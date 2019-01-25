import React from "react";
import Layout from "../components/layout"
import Helmet from 'react-helmet';

const Page = ({ data }) => {

	return (
		<Layout>
			<Helmet title={data.contentfulPage.title} />
			<div>
				<nav><a href="/">« Go back</a></nav>
				<h1>{data.contentfulPage.title}</h1>
				<div dangerouslySetInnerHTML={{__html: data.contentfulPage.copy.childContentfulRichText.html}} />
			</div>
		</Layout>
	)
}

export default Page

export const PageQuery = graphql`
	query Page($id: String!) {
	  contentfulPage(id: { eq: $id }) {
	    title
	    copy {
        childContentfulRichText {
          html
        }
	    }
	  }
	}
`;

