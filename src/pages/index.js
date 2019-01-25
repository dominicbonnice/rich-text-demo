import React from "react"
import Layout from "../components/layout"

const Entry = ({ entry }) => {
  return (
    <li>
      <a href={'/pages/' + entry.slug}>{entry.title}</a>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <div>
      <h1>Welcome</h1>
      <ul>
        {
          data.allContentfulPage.edges.map(
            (edge, i) => <Entry entry={edge.node} key={i} />
          )
        }
      </ul>     
    </div>
  </Layout>
)

export default IndexPage

export const Pages = graphql`
query Pages {
  allContentfulPage (
    filter: {
      title: { 
        ne:"IGNORE" 
      }
    }
  ) {
    edges {
      node {
        title
        slug
      }
    }
  }
}
`;
