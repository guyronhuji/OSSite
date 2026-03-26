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

export function pageHref(locale: Locale, slugParts: string[]): string {
  return `/${locale}${slugParts.length ? `/${slugParts.join('/')}` : ''}`;
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
    sourceNote: string;
    sourceDateLabel: string;
    profileImageAlt: string;
    bookCoverAlt: string;
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
    sourceNote: 'Core biography and publication records migrated from the current HUJI site.',
    sourceDateLabel: 'Data refreshed',
    profileImageAlt: 'Portrait of Dr. Oded Steinberg',
    bookCoverAlt: 'Cover of Race, Nation, History',
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
    sourceNote: 'הביוגרפיה והפרסומים הועברו מאתר האוניברסיטה העברית הנוכחי.',
    sourceDateLabel: 'עודכן בתאריך',
    profileImageAlt: 'דיוקן של ד״ר עודד שטיינברג',
    bookCoverAlt: 'עטיפת הספר Race, Nation, History',
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
    sourceNote: 'Biografische und bibliografische Daten wurden von der aktuellen HUJI-Seite ubernommen.',
    sourceDateLabel: 'Daten aktualisiert',
    profileImageAlt: 'Portrat von Dr. Oded Steinberg',
    bookCoverAlt: 'Buchcover von Race, Nation, History',
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
    sourceNote: 'تم نقل السيرة الذاتية وسجل المنشورات من موقع الجامعة العبرية الحالي.',
    sourceDateLabel: 'تاريخ تحديث البيانات',
    profileImageAlt: 'صورة شخصية للدكتور عوديد شتاينبرغ',
    bookCoverAlt: 'غلاف كتاب Race, Nation, History',
  },
};
