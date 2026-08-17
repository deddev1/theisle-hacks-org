import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'isle-esp'
	| 'isle-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'isle-esp': '/isle-esp/',
	'isle-aimbot': '/isle-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-isle-hacks/',
	wallhack: '/isle-wallhack/',
	radar: '/isle-radar-hack/',
	'eac': '/eac-bypass/',
	'cheats-2026': '/isle-hacks-2026/',
	hacks: '/the-isle-hacks/',
	'cheat-download': '/isle-hack-download/',
	'mod-menu': '/isle-mod-menu/',
	'soft-aim': '/isle-soft-aim/',
	'best-cheats': '/best-isle-hacks/',
	'aimbot-hack': '/isle-aimbot-hack/',
	'esp-hack': '/isle-esp-hack/',
	'unlock-all': '/isle-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'isle-esp': {
		en: 'isle-esp',
		es: 'trucos-isle-esp',
		fr: 'triche-isle-esp',
		de: 'isle-esp-wallhack',
		pt: 'cheats-isle-esp',
		it: 'trucchi-isle-esp',
		nl: 'isle-esp-wallhack',
		pl: 'cheaty-isle-esp',
		ru: 'isle-esp-chity',
		tr: 'isle-esp-hile',
		ar: 'isle-esp-wallhack',
		ja: 'isle-esp-wallhack',
		ko: 'isle-esp-wallhack',
		zh: 'isle-esp-wallhack',
		hi: 'isle-esp-wallhack',
		id: 'isle-esp-wallhack',
		th: 'isle-esp-wallhack',
		vi: 'isle-esp-wallhack',
		uk: 'isle-esp-chity',
		cs: 'isle-esp-wallhack',
		ro: 'isle-esp-wallhack',
		sv: 'isle-esp-wallhack',
	},
	'isle-aimbot': {
		en: 'isle-aimbot',
		es: 'trucos-isle-aimbot',
		fr: 'triche-isle-aimbot',
		de: 'isle-aimbot',
		pt: 'cheats-isle-aimbot',
		it: 'trucchi-isle-aimbot',
		nl: 'isle-aimbot',
		pl: 'cheaty-isle-aimbot',
		ru: 'isle-aimbot-chity',
		tr: 'isle-aimbot-hile',
		ar: 'isle-aimbot',
		ja: 'isle-aimbot',
		ko: 'isle-aimbot',
		zh: 'isle-aimbot',
		hi: 'isle-aimbot',
		id: 'isle-aimbot',
		th: 'isle-aimbot',
		vi: 'isle-aimbot',
		uk: 'isle-aimbot-chity',
		cs: 'isle-aimbot',
		ro: 'isle-aimbot',
		sv: 'isle-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-isla',
		fr: 'fonctionnalites-triche-isla',
		de: 'isle-hacks-funktionen',
		pt: 'recursos-cheats-isla',
		it: 'funzioni-trucchi-isla',
		nl: 'isle-hacks-functies',
		pl: 'funkcje-cheatow-isla',
		ru: 'funkcii-chitov-isla',
		tr: 'isle-hile-ozellikleri',
		ar: 'isle-hacks-features',
		ja: 'isle-hacks-features',
		ko: 'isle-hacks-features',
		zh: 'isle-hacks-features',
		hi: 'isle-hacks-features',
		id: 'isle-hacks-features',
		th: 'isle-hacks-features',
		vi: 'isle-hacks-features',
		uk: 'funkcii-chitiv-isla',
		cs: 'isle-hacks-funkce',
		ro: 'functii-cheats-isla',
		sv: 'isle-hacks-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-isla',
		fr: 'prix-triche-isla',
		de: 'isle-hacks-preise',
		pt: 'precos-cheats-isla',
		it: 'prezzi-trucchi-isla',
		nl: 'isle-hacks-prijzen',
		pl: 'ceny-cheatow-isla',
		ru: 'ceny-chitov-isla',
		tr: 'isle-hile-fiyatlari',
		ar: 'isle-hacks-pricing',
		ja: 'isle-hacks-pricing',
		ko: 'isle-hacks-pricing',
		zh: 'isle-hacks-pricing',
		hi: 'isle-hacks-pricing',
		id: 'isle-hacks-pricing',
		th: 'isle-hacks-pricing',
		vi: 'isle-hacks-pricing',
		uk: 'ciny-chitiv-isla',
		cs: 'isle-hacks-ceny',
		ro: 'preturi-cheats-isla',
		sv: 'isle-hacks-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-isla',
		fr: 'installation-triche-isla',
		de: 'isle-hacks-installation',
		pt: 'instalacao-cheats-isla',
		it: 'installazione-trucchi-isla',
		nl: 'isle-hacks-installatie',
		pl: 'instalacja-cheatow-isla',
		ru: 'ustanovka-chitov-isla',
		tr: 'isle-hile-kurulum',
		ar: 'isle-hacks-setup',
		ja: 'isle-hacks-setup',
		ko: 'isle-hacks-setup',
		zh: 'isle-hacks-setup',
		hi: 'isle-hacks-setup',
		id: 'isle-hacks-setup',
		th: 'isle-hacks-setup',
		vi: 'isle-hacks-setup',
		uk: 'vstanovka-chitiv-isla',
		cs: 'isle-hacks-instalace',
		ro: 'instalare-cheats-isla',
		sv: 'isle-hacks-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-isla',
		fr: 'mises-a-jour-triche-isla',
		de: 'isle-hacks-updates',
		pt: 'atualizacoes-cheats-isla',
		it: 'aggiornamenti-trucchi-isla',
		nl: 'isle-hacks-updates',
		pl: 'aktualizacje-cheatow-isla',
		ru: 'obnovleniya-chitov-isla',
		tr: 'isle-hile-guncellemeleri',
		ar: 'isle-hacks-updates',
		ja: 'isle-hacks-updates',
		ko: 'isle-hacks-updates',
		zh: 'isle-hacks-updates',
		hi: 'isle-hacks-updates',
		id: 'isle-hacks-updates',
		th: 'isle-hacks-updates',
		vi: 'isle-hacks-updates',
		uk: 'onovlennya-chitiv-isla',
		cs: 'isle-hacks-aktualizace',
		ro: 'actualizari-cheats-isla',
		sv: 'isle-hacks-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-isla',
		fr: 'faq-triche-isla',
		de: 'isle-hacks-faq',
		pt: 'faq-cheats-isla',
		it: 'faq-trucchi-isla',
		nl: 'isle-hacks-faq',
		pl: 'faq-cheatow-isla',
		ru: 'faq-chitov-isla',
		tr: 'isle-hile-sss',
		ar: 'isle-hacks-faq',
		ja: 'isle-hacks-faq',
		ko: 'isle-hacks-faq',
		zh: 'isle-hacks-faq',
		hi: 'isle-hacks-faq',
		id: 'isle-hacks-faq',
		th: 'isle-hacks-faq',
		vi: 'isle-hacks-faq',
		uk: 'faq-chitiv-isla',
		cs: 'isle-hacks-faq',
		ro: 'faq-cheats-isla',
		sv: 'isle-hacks-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-isla',
		fr: 'support-triche-isla',
		de: 'isle-hacks-support',
		pt: 'suporte-cheats-isla',
		it: 'supporto-trucchi-isla',
		nl: 'isle-hacks-support',
		pl: 'wsparcie-cheatow-isla',
		ru: 'podderzhka-chitov-isla',
		tr: 'isle-hile-destek',
		ar: 'isle-hacks-support',
		ja: 'isle-hacks-support',
		ko: 'isle-hacks-support',
		zh: 'isle-hacks-support',
		hi: 'isle-hacks-support',
		id: 'isle-hacks-support',
		th: 'isle-hacks-support',
		vi: 'isle-hacks-support',
		uk: 'pidtrymka-chitiv-isla',
		cs: 'isle-hacks-podpora',
		ro: 'suport-cheats-isla',
		sv: 'isle-hacks-support',
	},
	undetected: {
		en: 'undetected-isle-hacks',
		es: 'trucos-isla-indetectables',
		fr: 'triche-isla-indetectable',
		de: 'unentdeckte-isle-hacks',
		pt: 'cheats-isla-indetectaveis',
		it: 'trucchi-isla-indetectabili',
		nl: 'undetected-isle-hacks',
		pl: 'niewykrywalne-cheats-isla',
		ru: 'nedecektiruemye-chity-isla',
		tr: 'tespit-edilemeyen-isle-hileleri',
		ar: 'undetected-isle-hacks',
		ja: 'undetected-isle-hacks',
		ko: 'undetected-isle-hacks',
		zh: 'undetected-isle-hacks',
		hi: 'undetected-isle-hacks',
		id: 'undetected-isle-hacks',
		th: 'undetected-isle-hacks',
		vi: 'undetected-isle-hacks',
		uk: 'nedecektovani-chity-isla',
		cs: 'undetected-isle-hacks',
		ro: 'cheats-isla-nedetectabile',
		sv: 'undetected-isle-hacks',
	},
	wallhack: {
		en: 'isle-wallhack',
		es: 'wallhack-trucos-isla',
		fr: 'wallhack-triche-isla',
		de: 'isle-wallhack',
		pt: 'wallhack-cheats-isla',
		it: 'wallhack-trucchi-isla',
		nl: 'isle-wallhack',
		pl: 'wallhack-cheatow-isla',
		ru: 'wallhack-chity-isla',
		tr: 'isle-wallhack-hile',
		ar: 'isle-wallhack',
		ja: 'isle-wallhack',
		ko: 'isle-wallhack',
		zh: 'isle-wallhack',
		hi: 'isle-wallhack',
		id: 'isle-wallhack',
		th: 'isle-wallhack',
		vi: 'isle-wallhack',
		uk: 'wallhack-chity-isla',
		cs: 'isle-wallhack',
		ro: 'wallhack-cheats-isla',
		sv: 'isle-wallhack',
	},
	radar: {
		en: 'isle-radar-hack',
		es: 'radar-hack-trucos-isla',
		fr: 'radar-hack-triche-isla',
		de: 'isle-radar-hack',
		pt: 'radar-hack-cheats-isla',
		it: 'radar-hack-trucchi-isla',
		nl: 'isle-radar-hack',
		pl: 'radar-hack-cheatow-isla',
		ru: 'radar-hack-chity-isla',
		tr: 'isle-radar-hack',
		ar: 'isle-radar-hack',
		ja: 'isle-radar-hack',
		ko: 'isle-radar-hack',
		zh: 'isle-radar-hack',
		hi: 'isle-radar-hack',
		id: 'isle-radar-hack',
		th: 'isle-radar-hack',
		vi: 'isle-radar-hack',
		uk: 'radar-hack-chity-isla',
		cs: 'isle-radar-hack',
		ro: 'radar-hack-cheats-isla',
		sv: 'isle-radar-hack',
	},
	'eac': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-cheats',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'isle-hacks-2026',
		es: 'trucos-isla-2026',
		fr: 'triche-isla-2026',
		de: 'isle-hacks-2026',
		pt: 'cheats-isla-2026',
		it: 'trucchi-isla-2026',
		nl: 'isle-hacks-2026',
		pl: 'cheaty-isla-2026',
		ru: 'chity-isla-2026',
		tr: 'isle-hileleri-2026',
		ar: 'isle-hacks-2026',
		ja: 'isle-hacks-2026',
		ko: 'isle-hacks-2026',
		zh: 'isle-hacks-2026',
		hi: 'isle-hacks-2026',
		id: 'isle-hacks-2026',
		th: 'isle-hacks-2026',
		vi: 'isle-hacks-2026',
		uk: 'chity-isla-2026',
		cs: 'isle-hacks-2026',
		ro: 'cheats-isla-2026',
		sv: 'isle-hacks-2026',
	},
	hacks: {
		en: 'isle-hacks',
		es: 'hacks-trucos-isla',
		fr: 'hacks-triche-isla',
		de: 'isle-hacks',
		pt: 'hacks-cheats-isla',
		it: 'hacks-trucchi-isla',
		nl: 'isle-hacks',
		pl: 'hacks-cheatow-isla',
		ru: 'haksy-chity-isla',
		tr: 'isle-hile-hacks',
		ar: 'isle-hacks',
		ja: 'isle-hacks',
		ko: 'isle-hacks',
		zh: 'isle-hacks',
		hi: 'isle-hacks',
		id: 'isle-hacks',
		th: 'isle-hacks',
		vi: 'isle-hacks',
		uk: 'haksy-chity-isla',
		cs: 'isle-hacks',
		ro: 'hacks-cheats-isla',
		sv: 'isle-hacks',
	},
	'cheat-download': {
		en: 'isle-hack-download',
		es: 'descarga-trucos-isla',
		fr: 'telechargement-triche-isla',
		de: 'isle-hack-download',
		pt: 'download-cheats-isla',
		it: 'download-trucchi-isla',
		nl: 'isle-hack-download',
		pl: 'pobieranie-cheatow-isla',
		ru: 'skachat-chity-isla',
		tr: 'isle-hile-indir',
		ar: 'isle-hack-download',
		ja: 'isle-hack-download',
		ko: 'isle-hack-download',
		zh: 'isle-hack-download',
		hi: 'isle-hack-download',
		id: 'isle-hack-download',
		th: 'isle-hack-download',
		vi: 'isle-hack-download',
		uk: 'zavantazhennya-chitiv-isla',
		cs: 'isle-hack-download',
		ro: 'descarcare-cheats-isla',
		sv: 'isle-hack-download',
	},
	'mod-menu': {
		en: 'isle-mod-menu',
		es: 'menu-mod-trucos-isla',
		fr: 'menu-mod-triche-isla',
		de: 'isle-mod-menu',
		pt: 'menu-mod-cheats-isla',
		it: 'menu-mod-trucchi-isla',
		nl: 'isle-mod-menu',
		pl: 'menu-mod-cheatow-isla',
		ru: 'mod-menu-chity-isla',
		tr: 'isle-mod-menu',
		ar: 'isle-mod-menu',
		ja: 'isle-mod-menu',
		ko: 'isle-mod-menu',
		zh: 'isle-mod-menu',
		hi: 'isle-mod-menu',
		id: 'isle-mod-menu',
		th: 'isle-mod-menu',
		vi: 'isle-mod-menu',
		uk: 'mod-menu-chity-isla',
		cs: 'isle-mod-menu',
		ro: 'meniu-mod-cheats-isla',
		sv: 'isle-mod-menu',
	},
	'soft-aim': {
		en: 'isle-soft-aim',
		es: 'soft-aim-trucos-isla',
		fr: 'soft-aim-triche-isla',
		de: 'isle-soft-aim',
		pt: 'soft-aim-cheats-isla',
		it: 'soft-aim-trucchi-isla',
		nl: 'isle-soft-aim',
		pl: 'soft-aim-cheatow-isla',
		ru: 'soft-aim-chity-isla',
		tr: 'isle-soft-aim',
		ar: 'isle-soft-aim',
		ja: 'isle-soft-aim',
		ko: 'isle-soft-aim',
		zh: 'isle-soft-aim',
		hi: 'isle-soft-aim',
		id: 'isle-soft-aim',
		th: 'isle-soft-aim',
		vi: 'isle-soft-aim',
		uk: 'soft-aim-chity-isla',
		cs: 'isle-soft-aim',
		ro: 'soft-aim-cheats-isla',
		sv: 'isle-soft-aim',
	},
	'best-cheats': {
		en: 'best-isle-hacks',
		es: 'mejores-trucos-isla',
		fr: 'meilleures-triches-isle',
		de: 'beste-isle-hacks',
		pt: 'melhores-cheats-isla',
		it: 'migliori-trucchi-isla',
		nl: 'beste-isle-hacks',
		pl: 'najlepsze-cheats-isla',
		ru: 'luchshie-chity-isla',
		tr: 'en-iyi-isle-hileleri',
		ar: 'best-isle-hacks',
		ja: 'best-isle-hacks',
		ko: 'best-isle-hacks',
		zh: 'best-isle-hacks',
		hi: 'best-isle-hacks',
		id: 'best-isle-hacks',
		th: 'best-isle-hacks',
		vi: 'best-isle-hacks',
		uk: 'naykrashchi-chity-isla',
		cs: 'nejlepsi-isle-hacks',
		ro: 'cele-mai-bune-cheats-isla',
		sv: 'basta-isle-hacks',
	},
	'aimbot-hack': {
		en: 'isle-aimbot-hack',
		es: 'aimbot-hack-trucos-isla',
		fr: 'aimbot-hack-triche-isla',
		de: 'isle-aimbot-hack',
		pt: 'aimbot-hack-cheats-isla',
		it: 'aimbot-hack-trucchi-isla',
		nl: 'isle-aimbot-hack',
		pl: 'aimbot-hack-cheatow-isla',
		ru: 'aimbot-hack-chity-isla',
		tr: 'isle-aimbot-hack',
		ar: 'isle-aimbot-hack',
		ja: 'isle-aimbot-hack',
		ko: 'isle-aimbot-hack',
		zh: 'isle-aimbot-hack',
		hi: 'isle-aimbot-hack',
		id: 'isle-aimbot-hack',
		th: 'isle-aimbot-hack',
		vi: 'isle-aimbot-hack',
		uk: 'aimbot-hack-chity-isla',
		cs: 'isle-aimbot-hack',
		ro: 'aimbot-hack-cheats-isla',
		sv: 'isle-aimbot-hack',
	},
	'esp-hack': {
		en: 'isle-esp-hack',
		es: 'esp-hack-trucos-isla',
		fr: 'esp-hack-triche-isla',
		de: 'isle-esp-hack',
		pt: 'esp-hack-cheats-isla',
		it: 'esp-hack-trucchi-isla',
		nl: 'isle-esp-hack',
		pl: 'esp-hack-cheatow-isla',
		ru: 'esp-hack-chity-isla',
		tr: 'isle-esp-hack',
		ar: 'isle-esp-hack',
		ja: 'isle-esp-hack',
		ko: 'isle-esp-hack',
		zh: 'isle-esp-hack',
		hi: 'isle-esp-hack',
		id: 'isle-esp-hack',
		th: 'isle-esp-hack',
		vi: 'isle-esp-hack',
		uk: 'esp-hack-chity-isla',
		cs: 'isle-esp-hack',
		ro: 'esp-hack-cheats-isla',
		sv: 'isle-esp-hack',
	},
	'unlock-all': {
		en: 'isle-unlock-all',
		es: 'unlock-all-trucos-isla',
		fr: 'unlock-all-triche-isla',
		de: 'isle-unlock-all',
		pt: 'unlock-all-cheats-isla',
		it: 'unlock-all-trucchi-isla',
		nl: 'isle-unlock-all',
		pl: 'unlock-all-cheatow-isla',
		ru: 'unlock-all-chity-isla',
		tr: 'isle-unlock-all',
		ar: 'isle-unlock-all',
		ja: 'isle-unlock-all',
		ko: 'isle-unlock-all',
		zh: 'isle-unlock-all',
		hi: 'isle-unlock-all',
		id: 'isle-unlock-all',
		th: 'isle-unlock-all',
		vi: 'isle-unlock-all',
		uk: 'unlock-all-chity-isla',
		cs: 'isle-unlock-all',
		ro: 'unlock-all-cheats-isla',
		sv: 'isle-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	if (withSlash === '/isle-hacks/' || withSlash === '/the-isle-hacks/') {
		return getLocalizedPath('hacks', locale);
	}
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('isle-aimbot', locale), pageId: 'isle-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('isle-esp', locale), pageId: 'isle-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
