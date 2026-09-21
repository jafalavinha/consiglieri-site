export function setLanguagePreference(lang: 'en' | 'pt') {
  try {
    localStorage.setItem('consiglieri_lang', lang);
    document.cookie = `consiglieri_lang=${lang};path=/;max-age=31536000;SameSite=Lax`;
  } catch {
    // Ignore storage errors in private browsing
  }
}
