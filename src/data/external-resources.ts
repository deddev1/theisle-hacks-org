import { brand } from './brand';

export type ExternalResource = {
	label: string;
	href: string;
	note?: string;
};

/** Authoritative third-party guides — cite official game sources for readers and search engines. */
export const externalResources: ExternalResource[] = [
	{
		label: 'The Isle on Steam',
		href: brand.gameUrl,
		note: 'Official store page, system requirements, and player reviews.',
	},
	{
		label: 'Steam patch notes & news',
		href: 'https://store.steampowered.com/app/376210/news/',
		note: 'Read official update posts before you change your loadout.',
	},
	{
		label: 'Official The Isle website',
		href: 'https://www.survivetheisle.com/',
		note: 'Game overview from Afterthought LLC.',
	},
	{
		label: 'The Isle Wiki (Fandom)',
		href: 'https://isle.fandom.com/wiki/The_Isle',
		note: 'Dinosaur stats, maps, and survival mechanics.',
	},
	{
		label: 'Steam Community hub',
		href: 'https://steamcommunity.com/app/376210',
		note: 'Announcements and community discussions.',
	},
];
