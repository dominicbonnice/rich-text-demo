import React from "react"
import Layout from "../components/layout"

const Entry = ({ entry, type }) => {
  return (
    <li>
      <a href={'/' + type + '/' + entry.slug}>{entry.title}</a>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <div className="container">
      <h1>Welcome</h1>
      <h2>Press Releases</h2>
      <ul>
        {
          data.allContentfulPressRelease.edges.map(
            (edge, i) => <Entry entry={edge.node} type='press-releases' key={i} />
          )
        }
      </ul>  
      <h2>Sales Demo Pages</h2>
      <ul>
        {
          data.allContentfulSalesDemoPage.edges.map(
            (edge, i) => <Entry entry={edge.node} type='sales-demo-pages' key={i} />
          )
        }
      </ul>     
    </div>
  </Layout>
)

export default IndexPage

export const Pages = graphql`
query Pages {
  allContentfulPressRelease (
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
  allContentfulSalesDemoPage (
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
