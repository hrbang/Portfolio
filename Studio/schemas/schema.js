// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	name: 'projectSchema',
	types: schemaTypes.concat([{
		title: "Projects",
		name: "projects",
		type: "document",
		fields: [{
				title: "Project header",
				name: "project_header",
				type: "object",
				options: {
					collapsible: true,
					collapsed: false,
					columns: 1
				},
				fields: [{
						title: "Project title",
						name: "project_title",
						type: "string",
					},
					{
						title: "Project image",
						name: "project_image",
						type: "image",
					}
				]
			},
			{
				title: "Preliminary fields",
				name: "preliminary_fields",
				type: "object",
				options: {
					collapsible: true,
					collapsed: false,
					columns: 1
				},
				fields: [{
						title: "Title",
						name: "title",
						type: "string",
					},
					{
						title: "Text",
						name: "text",
						type: "text",
					},
					{
						title: "Project link",
						name: "project_link",
						type: "url",
					}
				]
			},
			{
				title: "Image gallery",
				name: "image_gallery",
				type: "object",
				options: {
					collapsible: true,
					collapsed: false,
					columns: 3
				},
				fields: [{
						title: "Image 1",
						name: "image_1",
						type: "image",
					},
					{
						title: "Image 2",
						name: "image_2",
						type: "image",
					},
					{
						title: "Image 3",
						name: "image_3",
						type: "image",
					}
				]
			},
			{
				title: "Video section",
				name: "video_section",
				type: "object",
				options: {
					collapsible: true,
					collapsed: false,
					columns: 1
				},
				fields: [{
					title: "Title",
					name: "title",
					type: "string",
				},
				{
					title: "Video",
					name: "video",
					type: "file",
				},
			]
			}
		]
	}])
})