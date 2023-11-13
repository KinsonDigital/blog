// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Kinson Digital",
	tagline: "Quality Software Development",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://your-docusaurus-test-site.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/blog",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "KinsonDigital", // Usually your GitHub org/user name.
	projectName: "blog", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				blog: {
					routeBasePath: "/",
					showReadingTime: true,
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	// ...
	plugins: [
		[
			"@docusaurus/plugin-content-blog",
			{
				/**
				 * Required for any multi-instance plugin
				 */
				id: "news",

				/**
				 * URL route for the blog section of your site.
				 * *DO NOT* include a trailing slash.
				 */
				routeBasePath: "news",

				/**
				 * Path to data on filesystem relative to site dir.
				 */
				path: "./news",
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/meta-image.png',
			metadata: [
				{
				  name: 'twitter:card',
				  content: 'summary'
				},
				{
				  name: 'twitter:title',
				  content: 'KinsonDigital Blog'
				},
				{
				  name: 'twitter:description',
				  content: 'Blogging about technology, software development, and game development.'
				},
				{
				  name: 'twitter:image',
				  content: 'https://docs.velaptor.io/img/meta-image.png'
				},
				{
				  name: 'twitter:image:alt',
				  content: 'KinsonDigital Blog'
				},
				{
				  name: 'twitter:site',
				  content: '@KDCoder'
				},
				{
				  name: 'twitter:creator',
				  content: '@KDCoder'
				},
				{
				  name: 'keywords',
				  content: 'Software Development, Software, Game, Game Development, C#, .NET, Technology, Programming, Coding, Tech'
				}
			],
			colorMode: {
				defaultMode: "dark",
				disableSwitch: true,
				respectPrefersColorScheme: false,
			},
			navbar: {
				title: "KinsonDigital",
				logo: {
					alt: "My Site Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						label: "News",
						to: "/news",
						position: "left",
						items: [
							{
								label: "All",
								to: "/news",
							},
							{
								label: "KD Org",
								to: "/news/tags/kd-org",
							}
						]
					},
					{
						href: "https://github.com/KinsonDigital",
						position: "right",
						className: "header-github-link",
					},
					{
						href: "https://discord.gg/qewu6fNgv7",
						position: "right",
						className: "header-discord-link",
					},
					{
						href: "https://twitter.com/KDCoder",
						position: "right",
						className: "header-twitter-link",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Community",
						items: [
							{
								label: "GitHub (KinsonDigital)",
								href: "https://github.com/KinsonDigital",
							},
							{
								label: "Discord",
								href: "https://discord.gg/qewu6fNgv7",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/KDCoder",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "News",
								to: "/news",
							},
							{
								label: "Blog",
								to: "/",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} KinsonDigital`,
			},
			prism: {
				additionalLanguages: ["bash", "diff", "json"], 
				theme: lightTheme,
				darkTheme: darkTheme,
			},
		}),
};

module.exports = config;
