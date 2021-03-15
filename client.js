// Sanity API
const sanityClient = require('@sanity/client')

export default sanityClient({
  projectId: '94v4n48w', // you can find this in sanity.json
  dataset: process.env.SANITY_DATASET || 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})