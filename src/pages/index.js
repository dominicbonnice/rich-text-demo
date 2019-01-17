import React from "react"

const Entry = ({ entry }) => {
  return (
    <li>
      <a href={'/pages/' + entry.slug}>{entry.title}</a>
    </li>
  )
}

const IndexPage = ({ data }) => (
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
