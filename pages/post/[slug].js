import groq from 'groq'
import client from '../../client'
const Post = (props) => {
	const {
		title = 'Missing title',
	} = props
	return (
		<article>
			<h1>{title}</h1>
		</article>
	)
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title
}`

Post.getInitialProps = async function (context) {
	// It's important to default the slug so that it doesn't return "undefined"
	const { slug = "" } = context.query
	return await client.fetch(query, { slug })
}

export default Post