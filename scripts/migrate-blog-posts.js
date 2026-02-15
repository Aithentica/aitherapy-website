import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { parseStringPromise } from 'xml2js';
import TurndownService from 'turndown';
import { join } from 'path';

const XML_PATH = join(import.meta.dirname, '../../Downloads/therapysupport.WordPress.2026-02-14.xml');
const OUTPUT_DIR = join(import.meta.dirname, '../src/content/blog');

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

// Strip WordPress block comments
turndown.addRule('wpBlock', {
  filter: (node) => node.nodeType === 8, // Comment nodes
  replacement: () => '',
});

// Better image handling - strip WP images since they point to old domain
turndown.addRule('wpImages', {
  filter: 'figure',
  replacement: (content, node) => {
    const img = node.querySelector('img');
    if (!img) return content;
    const alt = img.getAttribute('alt') || '';
    const src = img.getAttribute('src') || '';
    const figcaption = node.querySelector('figcaption');
    const caption = figcaption ? figcaption.textContent : '';
    if (caption) {
      return `\n\n![${alt}](${src})\n*${caption}*\n\n`;
    }
    return `\n\n![${alt}](${src})\n\n`;
  },
});

function stripWpComments(html) {
  return html.replace(/<!--.*?-->/gs, '');
}

function extractCDATA(val) {
  if (Array.isArray(val)) val = val[0];
  if (typeof val === 'string') return val;
  if (val && val._) return val._;
  return '';
}

function getCategories(item) {
  const cats = item.category || [];
  const categories = [];
  const tags = [];
  for (const cat of cats) {
    const domain = cat.$.domain;
    const name = extractCDATA(cat);
    if (domain === 'category') {
      categories.push(name);
    } else if (domain === 'post_tag') {
      tags.push(name);
    }
  }
  return { categories, tags };
}

function getDescription(item) {
  const excerpt = extractCDATA(item['excerpt:encoded']);
  if (excerpt && excerpt.trim()) {
    return excerpt.trim().replace(/"/g, '\\"').slice(0, 300);
  }
  // Fallback: use first paragraph of content
  const content = extractCDATA(item['content:encoded']);
  const stripped = content.replace(/<[^>]+>/g, '').replace(/<!--.*?-->/gs, '').trim();
  return stripped.slice(0, 200).replace(/"/g, '\\"');
}

function getAuthorName(creator) {
  const name = extractCDATA(creator);
  const authorMap = {
    'Joanna': 'Joanna Glowacka',
    'bartlomiej.glowacki': 'Bartlomiej Glowacki',
    'admin': 'Therapy Support',
    'lukasz.piwowar': 'Lukasz Piwowar',
  };
  return authorMap[name] || name;
}

async function main() {
  console.log('Reading WordPress XML...');
  const xml = readFileSync(XML_PATH, 'utf-8');

  console.log('Parsing XML...');
  const result = await parseStringPromise(xml, { explicitCDATA: false });

  const items = result.rss.channel[0].item;
  const posts = items.filter((item) => {
    const postType = extractCDATA(item['wp:post_type']);
    const status = extractCDATA(item['wp:status']);
    return postType === 'post' && status === 'publish';
  });

  console.log(`Found ${posts.length} published posts`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const post of posts) {
    const title = extractCDATA(post.title);
    const slug = extractCDATA(post['wp:post_name']);
    const date = extractCDATA(post['wp:post_date']);
    const creator = post['dc:creator'];
    const author = getAuthorName(creator);
    const htmlContent = extractCDATA(post['content:encoded']);
    const description = getDescription(post);
    const { categories, tags } = getCategories(post);
    const category = categories[0] || 'Inne';

    // Convert HTML to Markdown
    const cleanHtml = stripWpComments(htmlContent);
    let markdown = turndown.turndown(cleanHtml);

    // Clean up excessive newlines
    markdown = markdown.replace(/\n{3,}/g, '\n\n');

    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description}"
pubDate: ${date.split(' ')[0]}
author: "${author}"
category: "${category}"
tags: [${tags.map((t) => `"${t}"`).join(', ')}]
draft: false
---`;

    const fileContent = `${frontmatter}\n\n${markdown.trim()}\n`;
    const filePath = join(OUTPUT_DIR, `${slug}.md`);

    writeFileSync(filePath, fileContent, 'utf-8');
    console.log(`  Wrote: ${slug}.md (${title})`);
  }

  console.log(`\nDone! Migrated ${posts.length} posts to ${OUTPUT_DIR}`);
}

main().catch(console.error);
