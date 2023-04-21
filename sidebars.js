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
      label: "Overview"
    },
	{
      type: 'doc',
      id: 'get-started',
      label: "Getting Started"
    },
  ],
  Guides:[
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
  QodlyScript:[
   		{
			type: 'doc',
			id: 'language/basics/lang-quicktour',
			label: "QuickTour"
		},
		{ 	type: 'category',
			label: 'QodlyScript Concepts',
			collapsible: true,
			collapsed: true,
			link: {
				type: 'generated-index',
				title: 'QodlyScript Concepts',
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
		{
			type: 'doc',
			id: 'language/BlobClass',
			label: "Blob"
		},
		{
			type: 'doc',
			id: 'language/ClassClass',
			label: "Class"
		},
		{
			type: 'doc',
			id: 'language/CollectionClass',
			label: "Collection"
		},
		{
			type: 'doc',
			id: 'language/CryptoKeyClass',
			label: "CryptoKey"
		},
		{
			type: 'doc',
			id: 'language/DataClassClass',
			label: "DataClass"
		},
		{
			type: 'doc',
			id: 'language/DataClassAttributeClass',
			label: "DataClassAttribute"
		},
		{
			type: 'doc',
			id: 'language/DataStoreClass',
			label: "DataStore"
		},
		{
			type: 'doc',
			id: 'language/EmailObjectClass',
			label: "Email"
		},
		{
			type: 'doc',
			id: 'language/EntityClass',
			label: "Entity"
		},
		{
			type: 'doc',
			id: 'language/EntitySelectionClass',
			label: "EntitySelection"
		},		
		{
			type: 'doc',
			id: 'language/FileClass',
			label: "File"
		},
		{
			type: 'doc',
			id: 'language/FileHandleClass',
			label: "FileHandle"
		},
		{
			type: 'doc',
			id: 'language/FolderClass',
			label: "Folder"
		},
		{
			type: 'doc',
			id: 'language/FunctionClass',
			label: "Function"
		},
		{
			type: 'doc',
			id: 'language/string',
			label: "String"
		},

  ],
};

module.exports = sidebars;
