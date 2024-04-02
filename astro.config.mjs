import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: [
				'./src/style/starlight.css',
			],
			title: 'Republic Of Lunar',
			social: {
				github: 'https://github.com/lunarlands',
				gitlab: 'https://github.com/l.r',
			},
			sidebar: [
				{
					label: 'Chapter I',
					autogenerate: { directory: 'welcome' },
				},
				{
					label: 'Chapter II',
					badge: 'Updating',
					autogenerate: { directory: 'arch' },
				},
			],
		}),
	],
});
