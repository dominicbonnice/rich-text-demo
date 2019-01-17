const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
				allContentfulPage {
			    edges {
			      node {
			      	id
			        slug
			      }
			    }
			  }
      }
    `).then(result => {
      result.data.allContentfulPage.edges.forEach(({ node }) => {
        createPage({
          path: '/pages/'+node.slug,
          component: path.resolve(`./src/templates/page.jsx`),
          context: {
            id: node.id
          },
        })
      })
      resolve()
    })
  })
};
