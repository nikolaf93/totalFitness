export interface Settings {
  theme: 'light' | 'dark';
  // Add more settings here in the future
}

const SETTINGS_KEY = 'totalFitnessSettings';

export function loadSettings(): Settings | undefined {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return undefined;
    return JSON.parse(raw) as Settings;
  } catch {
    return undefined;
  }
}

export function saveSettings(settings: Settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // Ignore write errors
  }
} 