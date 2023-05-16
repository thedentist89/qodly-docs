/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
   
  GetStarted:[
   {
      type: 'doc',
      id: 'overview',
      label: "Welcome"
    },
	{
      type: 'doc',
      id: 'get-started',
      label: "Getting Started"
    },
	{
      type: 'category',
      label: 'Concepts',
	  link: {
			type: 'generated-index',
			title: 'Concepts',
			description: 'Description of the main concepts implemented in Qodly.',
			slug: '/category/concepts',
			keywords: ['concepts'],
			image: '/img/docusaurus.png',
			},
      items: ['concepts/server-architecture','concepts/db',
				{ 	type: 'category',
					label: 'ORDA',
					link: {
						type: 'doc',
						id: 'concepts/orda/overview',
					},
					items: [
						'concepts/orda/data-model',
						'concepts/orda/orda-classes',
						'concepts/orda/data',
						'concepts/orda/glossary',
					],
				},
			],
    },
  ],
  
  
  Development:[
  
	{
      type: 'category',
      label: 'Qodly Studio',
	  link: {
			type: 'generated-index',
			title: 'Qodly Studio',
			description: 'Welcome to the Qodly Studio documentation.',
			slug: '/category/studio',
			keywords: ['Studio', 'Development'],
			image: '/img/docusaurus.png',
			},
		items: [
		{
			type: 'category',
			label: "Configuration",
			items: ['studio/configuration/4d-settings',
				'studio/configuration/license-usage'
			],
		},
		{
			type: 'category',
			label: 'Model',
			items: ['studio/model/model-overview',
				'studio/model/model-editor-interface',
				'studio/model/datastore-classes'
			],
		},
		{
			type: 'category',
			label: 'Webforms',
			items: ['studio/design-webforms/create-webform',
				'studio/design-webforms/components',
				'studio/design-webforms/styling',
				'studio/design-webforms/datasources',
				'studio/design-webforms/events/events',
				'studio/rendering',
			],
		},
		{
			type: 'doc',
			id: 'studio/settings',
			label: "Settings"
		},
		{
			type: 'doc',
				id: 'studio/coding-and-debugging',
				label: "Coding and debugging"
		},
		],
	},
	
	{
		type: 'category',
		label: 'QodlyScript Reference',
		link: {
			type: 'generated-index',
			title: 'QodlyScript',
			description: 'QodlyScript Reference Guide',
			slug: '/category/qodlyscript',
			keywords: ['qodlyscript', 'language'],
			image: '/img/docusaurus.png',
			},
		items: [
		  		{
			type: 'doc',
			id: 'language/basics/lang-quicktour',
			label: "QuickTour"
		},
		{ 	type: 'category',
			label: 'Basics',
			collapsible: true,
			collapsed: true,
			link: {
				type: 'generated-index',
				title: 'Basics',
				description: 'Main concepts of the QodlyScript Language.',
				slug: '/category/language',
				keywords: ['language'],
				image: '/img/docusaurus.png',
			},
			items: ['language/basics/lang-variables',
				'language/basics/lang-arrays',
				{ 	type: 'category',
					label: 'Data Types',
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'language/basics/lang-data-types',
					},
					items: [
						'language/basics/lang-blob',
						'language/basics/lang-boolean',
						'language/basics/lang-collection',
						'language/basics/lang-date',
						'language/basics/lang-null-undefined',
						'language/basics/lang-number',
						'language/basics/lang-object',
						'language/basics/lang-picture',
						'language/basics/lang-time',
						'language/basics/lang-text',
						'language/basics/lang-variant',
					],
				},
				'language/basics/lang-operators',
				'language/basics/lang-methods',
				'language/basics/lang-parameters',
				'language/basics/lang-expressions',
				'language/basics/lang-shared',
				'language/basics/lang-classes',
				'language/basics/lang-control-flow',
				'language/basics/lang-errors',
				'language/basics/lang-identifiers',
				'language/basics/lang-pathnames',
				],
		},
		{ 	type: 'category',
			label: 'Themes & classes',
			collapsible: true,
			collapsed: true,
			link: {
				type: 'generated-index',
				title: 'Themes & classes',
				description: 'List of commands and functions of the QodlyScript language',
				slug: '/category/themes',
				keywords: ['themes','classes'],
				image: '/img/docusaurus.png',
			},
			items: ['language/BlobClass',
			'language/boolean',
			'language/ClassClass',
			'language/CollectionClass',
			'language/CryptoKeyClass',
			'language/DataClassClass',
			'language/DataClassAttributeClass',
			'language/DataStoreClass',
			'language/dateandtime',
			'language/EmailObjectClass',
			'language/EntityClass',
			'language/EntitySelectionClass',
			'language/FileClass',
			'language/FileHandleClass',
			'language/FolderClass',
			'language/FunctionClass',
			'language/HTTPRequestClass',
			'language/IMAPTransporterClass',
			'language/MailAttachmentClass',
			'language/math',
			'language/string',
			'language/UsersClass',
			'language/WebForm',
			],
		},
	],
  },
 ],
		

  Cloud:[
  	{
		type: 'category',
		label: 'Cloud',
		link: {
			type: 'generated-index',
			title: 'Cloud',
			description: 'Qodly Cloud documentation',
			slug: '/category/cloud',
			image: '/img/docusaurus.png',
			},
		items: [
		  		{
					type: 'doc',
					id: 'cloud/overview-cloud',
					label: "Overview"
				},
			],
	},
	],


  API:[
	{
		type: 'category',
		label: 'API',
		link: {
			type: 'generated-index',
			title: 'API',
			description: 'QodlyScript REST API',
			slug: '/category/API',
			image: '/img/docusaurus.png',
			},
		items: [
		  		{
					type: 'doc',
					id: 'api/overview-api',
					label: "Overview"
				},
			],
	},
  ],

};
	
module.exports = sidebars;
