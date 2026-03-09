import type { Locale } from '../i18n/config';

// Public YouTube Data API key (read-only, restricted to YouTube Data API + referrer in Google Cloud Console)
// This key is intentionally in source — it's used client-side and always visible in HTML output.
// Security: restrict via Google Cloud Console → API key restrictions → HTTP referrers + API scope.
export const YOUTUBE_API_KEY = import.meta.env.YOUTUBE_API_KEY || 'AIzaSyAfULD2k-1fXj-XUETvGhu00y5VqJDvOyw';

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@TherapySupportAPP';

/**
 * Mapping locale → YouTube playlist ID for tutorials.
 * Each locale has its own playlist with localized tutorial videos.
 */
export const PLAYLIST_IDS: Record<Locale, string> = {
  en: 'PLODM3xurpEVxHAQVS_NAM_OmxHUw4kOG5',
  pl: 'PLODM3xurpEVwj7LWloeotvLZZg6nvsntx',
  sk: 'PLODM3xurpEVz1u7xNilrdjfHxyFZHRwYV',
  ca: 'PLODM3xurpEVyEQQcPofv8-pcdGc9BgYTV',
  ru: 'PLODM3xurpEVwhIl-pUJiBxTE8BllBJIpj',
  uk: 'PLODM3xurpEVxuCaQVy_L9r_ldhzPg6HCm',
  lt: 'PLODM3xurpEVzobyLDY2-grIgeNI_89NyH',
};
