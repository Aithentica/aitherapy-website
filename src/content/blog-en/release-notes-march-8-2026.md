---
title: "Release Notes — March 8, 2026"
description: "Online video sessions without Google Meet, recording that doesn't stop when switching tabs, a mobile app for phone recording, a booking widget for your website, AI chat with streaming, branded emails, and dozens of improvements reported by our team."
pubDate: 2026-03-08
heroImage: "/images/blog/release-notes-8-marca-2026.png"
author: "Bartlomiej Glowacki"
category: "Other"
tags: []
draft: false
---

This is **the biggest update in Therapy Support history**. There are so many changes that we've divided them into 13 sections — but the most important message is simple: **you can now conduct video sessions directly in the app**, and recording works even when you switch between tabs.

💚 **Huge thanks** to the entire testing team: **Martyna**, **Joanna**, **Bohdan**, **Ewa**, **Magdalena**, **Jagoda**, **Marta**, and **Bartłomiej** — your reports shaped this release at every step!

* * *

## 1\. 🎥 Online video sessions — without leaving the app

Previously, running an online session required switching to Google Meet. From now on, **video sessions take place directly in Therapy Support** — with camera, microphone, and screen sharing.

### What changed?

- **One click** — you open a session, click "Join" and you're in the video room. No copying links, no opening new tabs
- **Permanent room per client** — each client has their own video room that works for every session. No need to generate new links
- **Client joins without logging in** — the client gets an invitation link and joins with one click, without creating an account. A "Join session" button is visible on their dashboard
- **Copy link** — in the therapist's profile you can copy the video link for the client and send it via email or text

### Meeting type: AITS Video or Google Meet?

For each session you now see what type of meeting it is — "AITS Video" or "Google Meet." You can change the default type in settings. The client list and profile show a clear badge with the meeting type.

### What we fixed during rollout

During video testing, a whole series of minor issues came up — we fixed them all:
- Camera and microphone buttons were invisible — now they're always in place
- The control bar was clipped on small screens — layout fixed
- After ending a recording, the window didn't close automatically — now it closes and refreshes session data
- The "Back" button in a video session navigated to the wrong page — now it returns where you came from

* * *

## 2\. 🎙️ Recording without interruptions — even when switching tabs (Martyna)

At **Martyna's** request, we rebuilt recording from the ground up. The most important change: **recording doesn't stop when you switch between tabs**.

### How does it work now?

- Click "Record" — recording starts and **continues in the background**, even when you open notes from a previous session, browse a client's profile, or check the calendar
- **Live transcription** — text appears on screen in real time, immediately after recording starts. No need to wait until the session ends
- If for any reason live transcription doesn't work, the system automatically **saves a backup audio file** (MP3). You have **24 hours to download** the recording and reprocess it
- When recording is interrupted (e.g., due to a connection issue), you see a **clear message** explaining what happened and what you can do

### Downloading recordings

At **Bartłomiej's** request, we added a download button for recordings directly in the session. Next to it you'll see "24h" — that's how long the file is available. At **Bohdan's** request, we also fixed an issue where the download button disappeared after navigating to a different session.

* * *

## 3\. 📱 Mobile app — record sessions from your phone

The new mobile app lets you **record sessions directly from your phone** — ideal when you're conducting an in-person session and want to record it without a laptop.

### What can it do?

- **Record from your phone** — open the app, select a session, press "Record." Automatic transcription
- **Quick PIN** instead of full login — when you return to the app after the screen dims, just enter your PIN
- **Session doesn't expire** during long recordings — even a 2-hour session won't be interrupted by automatic logout
- **Pull-to-refresh** — the session list refreshes with a gesture, like any modern app
- **Upload status** — you can see in real time whether the recording has been uploaded and processed

### What we fixed

During mobile testing, we discovered that phone transcription was overwriting existing notes instead of appending. Fixed — **mobile transcription now always appends** to existing session notes, nothing is lost.

* * *

## 4\. 🤖 AI Chat — live responses and formatting

The AI assistant in the client profile underwent a major overhaul. At **Joanna's** request, we changed how AI is accessible while working with a client.

### What's new?

- **Responses appear live** — you don't wait for the full response, you see text appearing word by word
- **Nice formatting** — AI responses have headings, lists, and bold text, making them much more readable
- **Persistent AI widget** — the AI assistant is visible at all times in the client profile, without needing to open an extra window. At **Joanna's** request, we replaced the popup modal with a persistent widget with a context counter
- **AI sees session notes** — at **Bartłomiej's** request, the AI assistant now takes into account notes from the current session and chat history when generating responses
- **Prompt editor** — the administrator can customize how AI responds, directly from the interface

### What we fixed

- Clicking the ABC analysis button caused a white screen — fixed
- After saving a transcript, the app now automatically switches to the recording tab

* * *

## 5\. 🧩 Booking widget — your calendar on your website

You can now **embed a booking form on your own website**. Clients see your calendar, choose a time slot, session type, and pay — without leaving your site.

### How does it work?

1. In your dashboard, you'll find your unique widget link
2. Copy the ready-made code and paste it on your website
3. A booking form with your calendar appears on your site

### What does the widget include?

- **Session types** — the client sees the list of session types you've configured in your profile. Added at a **beta tester's** request
- **Therapy Support logo** in the header — at **Magdalena's** request, we replaced the placeholder with the real logo
- **Compact form** — everything fits in a small frame on your site
- **Stripe payment** — the client proceeds to payment directly from the widget

The widget is available **only when you have a Stripe account connected**. Administrators can also see the widget button in the therapist management panel.

* * *

## 6\. 💰 Payment reminders — ready templates you can edit

A new way to send payment reminders to clients — via email or SMS.

- **Ready template** — the message is pre-filled, but you can edit it before sending
- **Remembers changes** — your modified text is saved as a template for future use
- **Button in client profile** — quick access to send a reminder directly from the profile, without navigating to the finance section
- **Consistent amounts** — the preview and actual send show the same amounts as the financial dashboard

* * *

## 7\. 📧 Professional emails with logo and branding (Ewa)

At **Ewa's** request, all emails sent from the system now have a **professional look**:

- Therapy Support logo in the header
- Consistent colors and layout
- Proper display on both desktop and mobile

No more plain text messages — your clients receive emails that look professional and build trust in your practice.

* * *

## 8\. 🎙️ Recording and transcription — language selection and diarization status

### Recording language selection

Before starting a recording, you can now **choose the language and number of participants**. The system matches the transcription language to your selection. Polish is set as default.

Language and participant selectors are visible even if something went wrong with the connection — you can change them and try again.

### Speaker recognition status

When recording from your phone, you now see a **diarization status** — indicating whether the system is correctly identifying who is speaking (therapist or client).

### Transcription notifications

Transcription processing notifications now include the **client's name and session number** — you immediately know which session the notification refers to. Session tiles also show an indicator when audio is being processed.

### Uploading recordings to past sessions

At **Martyna's** request, you can now **upload an audio file to a session that already took place** — in case recording wasn't enabled during the session but you have a file from a voice recorder.

* * *

## 9\. 📅 Calendar — 15-minute slots and cross-week dragging

### Sessions every 15 minutes

The calendar and session forms now support **sessions starting every 15 minutes** — at 9:00, 9:15, 9:30, or 9:45. Previously, slots were only available on the hour.

### Dragging sessions between weeks

On the weekly calendar grid, you can now **drag a session to another week** — for example, when a client wants to reschedule by a week.

### Moving sessions with conflicts (Joanna)

At **Joanna's** request, therapists can now **move a session even when the new time conflicts** with another session. The system asks for confirmation and allows you to proceed — because sometimes it's intentional (e.g., group sessions).

### Other session changes

- At **Joanna's** request, we renamed "Initial Consultation" to **"Initial Interview"** — more precise clinical terminology
- The "This week" list on the dashboard now shows the **number of scheduled sessions**
- At **Marta's** request: a session cancelled within the appropriate timeframe **no longer shows as "Unpaid"**
- The therapist's public profile now shows **session types** in the availability calendar

* * *

## 10\. 🔍 Session classification and AI analysis (Bohdan, Jagoda)

### Automatic session type recognition (Bohdan)

At **Bohdan's** request, we fixed automatic session classification. Previously, the system didn't always correctly identify the session type after uploading a transcript. Now classification works properly — just click "Summary" and AI will determine whether it was a standard, consultation, crisis, or interview session.

At **Bohdan's** request, we also fixed an issue with the transcription timestamp being off by 1 hour — now the time is correct.

### ABC Analysis (Jagoda)

At **Jagoda's** request, we updated how AI extracts elements from the ABC model (thought-feeling-behavior). The analysis now includes the **significance of the thought** for the client and a **behavioral strategy** — two new fields that appear automatically after transcript analysis.

* * *

## 11\. 🎨 New look and interface

### Login page

The login page now has a **new design** in Therapy Support colors — green accents and a professional look from the very first contact with the app.

### Dashboard

- At **Bohdan's** request: the session count on the dashboard now displays correctly with proper pluralization ("1 session", "3 sessions", "5 sessions") — in all 7 languages
- Dashboard panels (revenue, sessions, notes) now have visible borders — easier to tell them apart

### Client profile

- Buttons in the client profile have been reorganized — more logical layout, most-used actions on top
- Video buttons on the client dashboard have been moved to a more intuitive location
- Client name formatting is now consistent throughout the app

### Booking form

- **Session date visible in the header** — no need to scroll to see the selected date
- **Changed field order** — first session type, then date and time, finally contact details. A more natural flow

### Translations (Ewa)

At **Ewa's** request, we added missing translations in video sections, meeting types, subscriptions, and password settings. We also fixed the translation of the "online" status in 5 languages (Slovak, Catalan, Russian, Ukrainian, and Lithuanian).

* * *

## 12\. 🐛 What we fixed

Here's a list of issues you reported — all fixed in this release:

- **Large audio files** caused timeouts during transcription — now all files are processed in batch mode, regardless of size
- **Transcription didn't appear** in the text field after processing — fixed
- **Recording stopped** during longer sessions due to session expiration — token now refreshes automatically
- At **Bohdan's** request: AI feature limits worked inconsistently between plans — unified, Professional plan now has full access
- External calendar sync (CalDAV) wasn't working properly — at **Bartłomiej's** request, the communication method was fixed
- The app sometimes slowed down after extended use — fixed performance issues that could cause browser freezing
- The "Log out" button in the browser wasn't working — restored and working properly
- Adding a client required an email, even though the backend didn't require it — email is now optional
- The app is more stable — we fixed several concurrent data access issues that could cause sporadic errors

* * *

## 13\. 📋 What to check

| Check this | ✅ |
|---|---|
| **Video** | |
| Open an online session and join the video room — camera and microphone work | ⬜ |
| Send the client an invitation link — client joins without logging in | ⬜ |
| Client list shows "AITS Video" or "Google Meet" badge | ⬜ |
| Change the default meeting type in settings | ⬜ |
| Copy the video link from the therapist profile | ⬜ |
| **Recording** | |
| Start recording and switch to another tab — recording continues | ⬜ |
| After a transcription error — download button visible (shows "24h") | ⬜ |
| Live transcription appears immediately after starting recording | ⬜ |
| Select language and number of participants before recording | ⬜ |
| Upload an audio file to a past session | ⬜ |
| **Phone** | |
| Record a session from the mobile app — transcription appears in the session | ⬜ |
| After screen dims — enter PIN and return to the app without logging in | ⬜ |
| Phone transcription appends to notes (doesn't overwrite) | ⬜ |
| **AI Chat** | |
| Open AI chat in client profile — responses appear live | ⬜ |
| AI responses have formatting (headings, lists, bold) | ⬜ |
| Click ABC analysis button — no white screen | ⬜ |
| **Booking widget** | |
| Open your site with the widget — booking form displays | ⬜ |
| Client sees session types in the widget form | ⬜ |
| Stripe payment opens correctly from the widget | ⬜ |
| **Finance and reminders** | |
| Send a payment reminder from the client profile | ⬜ |
| Modify reminder text and save as template | ⬜ |
| **Calendar** | |
| Create a session at 9:15 — displays correctly in calendar | ⬜ |
| Drag a session to another week on the calendar grid | ⬜ |
| Move a session to a conflicting time — works after confirmation | ⬜ |
| Cancelled session no longer shows as "Unpaid" | ⬜ |
| **Emails** | |
| Check a system email — logo and branding visible | ⬜ |
| **Other** | |
| New login page design | ⬜ |
| Session count on dashboard displays correctly (1 session / 3 sessions) | ⬜ |

* * *

This was a **record sprint** — video sessions, mobile app, rebuilt recording, and dozens of improvements. Thank you to the entire team for your invaluable reports and patience during testing!

_Article prepared by the Therapy Support team_
