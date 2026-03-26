export const localeOrder = ['en', 'he', 'de', 'ar'] as const;

export type Locale = (typeof localeOrder)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  he: 'עברית',
  de: 'Deutsch',
  ar: 'العربية',
};

export const localeCodes: Record<Locale, string> = {
  en: 'EN',
  he: 'HE',
  de: 'DE',
  ar: 'AR',
};

export const rtlLocales = new Set<Locale>(['he', 'ar']);

export function isLocale(value: string): value is Locale {
  return localeOrder.includes(value as Locale);
}

export function isRtl(locale: Locale): boolean {
  return rtlLocales.has(locale);
}

function normalizedBaseUrl(): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') {
    return '/';
  }

  return base.endsWith('/') ? base : `${base}/`;
}

export function withBase(path: string): string {
  if (
    !path ||
    path.startsWith('#') ||
    path.startsWith('//') ||
    /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(path)
  ) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBaseUrl()}${normalizedPath}`;
}

export function pageHref(locale: Locale, slugParts: string[]): string {
  return withBase(`/${locale}${slugParts.length ? `/${slugParts.join('/')}` : ''}`);
}

export const uiText: Record<
  Locale,
  {
    skipToContent: string;
    navLabel: string;
    languageLabel: string;
    latestPublications: string;
    allPublications: string;
    downloadCv: string;
    downloadPublicationsPdf: string;
    researchInterests: string;
    contact: string;
    office: string;
    email: string;
    phone: string;
    subpages: string;
    profileImageAlt: string;
    bookCoverAlt: string;
    researchThemes: string;
    filterAll: string;
    filterBooks: string;
    filterArticles: string;
    filterChapters: string;
    filterForthcoming: string;
    academicProfiles: string;
    careerTimeline: string;
  }
> = {
  en: {
    skipToContent: 'Skip to content',
    navLabel: 'Main navigation',
    languageLabel: 'Language',
    latestPublications: 'Selected Publications',
    allPublications: 'Full Publication List',
    downloadCv: 'Download CV',
    downloadPublicationsPdf: 'Download Publications PDF',
    researchInterests: 'Research Interests',
    contact: 'Contact',
    office: 'Office',
    email: 'Email',
    phone: 'Phone',
    subpages: 'Related Pages',
    profileImageAlt: 'Portrait of Dr. Oded Steinberg',
    bookCoverAlt: 'Cover of Race, Nation, History',
    researchThemes: 'Research Themes',
    filterAll: 'All',
    filterBooks: 'Books',
    filterArticles: 'Articles',
    filterChapters: 'Chapters',
    filterForthcoming: 'Forthcoming',
    academicProfiles: 'Academic Profiles',
    careerTimeline: 'Career Timeline',
  },
  he: {
    skipToContent: 'דלג לתוכן',
    navLabel: 'ניווט ראשי',
    languageLabel: 'שפה',
    latestPublications: 'פרסומים נבחרים',
    allPublications: 'רשימת פרסומים מלאה',
    downloadCv: 'הורדת קורות חיים',
    downloadPublicationsPdf: 'הורדת PDF פרסומים',
    researchInterests: 'תחומי מחקר',
    contact: 'יצירת קשר',
    office: 'חדר',
    email: 'דוא"ל',
    phone: 'טלפון',
    subpages: 'עמודים קשורים',
    profileImageAlt: 'דיוקן של ד״ר עודד שטיינברג',
    bookCoverAlt: 'עטיפת הספר Race, Nation, History',
    researchThemes: 'נושאי מחקר',
    filterAll: 'הכל',
    filterBooks: 'ספרים',
    filterArticles: 'מאמרים',
    filterChapters: 'פרקים',
    filterForthcoming: 'בקרוב',
    academicProfiles: 'פרופילים אקדמיים',
    careerTimeline: 'ציר זמן אקדמי',
  },
  de: {
    skipToContent: 'Zum Inhalt springen',
    navLabel: 'Hauptnavigation',
    languageLabel: 'Sprache',
    latestPublications: 'Ausgewahlte Publikationen',
    allPublications: 'Vollstandige Publikationsliste',
    downloadCv: 'CV herunterladen',
    downloadPublicationsPdf: 'Publikations-PDF herunterladen',
    researchInterests: 'Forschungsinteressen',
    contact: 'Kontakt',
    office: 'Zimmer',
    email: 'E-Mail',
    phone: 'Telefon',
    subpages: 'Zugehorige Seiten',
    profileImageAlt: 'Portrat von Dr. Oded Steinberg',
    bookCoverAlt: 'Buchcover von Race, Nation, History',
    researchThemes: 'Forschungsthemen',
    filterAll: 'Alle',
    filterBooks: 'Bucher',
    filterArticles: 'Artikel',
    filterChapters: 'Kapitel',
    filterForthcoming: 'Erscheint',
    academicProfiles: 'Akademische Profile',
    careerTimeline: 'Akademischer Zeitverlauf',
  },
  ar: {
    skipToContent: 'تخطي إلى المحتوى',
    navLabel: 'التنقل الرئيسي',
    languageLabel: 'اللغة',
    latestPublications: 'منشورات مختارة',
    allPublications: 'القائمة الكاملة للمنشورات',
    downloadCv: 'تنزيل السيرة الذاتية',
    downloadPublicationsPdf: 'تنزيل ملف المنشورات',
    researchInterests: 'مجالات البحث',
    contact: 'التواصل',
    office: 'المكتب',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    subpages: 'صفحات ذات صلة',
    profileImageAlt: 'صورة شخصية للدكتور عوديد شتاينبرغ',
    bookCoverAlt: 'غلاف كتاب Race, Nation, History',
    researchThemes: 'محاور البحث',
    filterAll: 'الكل',
    filterBooks: 'كتب',
    filterArticles: 'مقالات',
    filterChapters: 'فصول',
    filterForthcoming: 'قيد الصدور',
    academicProfiles: 'ملفات أكاديمية',
    careerTimeline: 'الخط الزمني الأكاديمي',
  },
};
