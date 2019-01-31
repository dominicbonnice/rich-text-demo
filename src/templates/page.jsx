import React from "react";
import Layout from "../components/layout"
import Signup from "../components/signup"
import Helmet from 'react-helmet';

const Page = ({ data }) => {

	return (
		<Layout>
			<Helmet title={data.contentfulPage.title} />
			<header>
				<nav><a href="/">« Go back</a></nav>
				<div class="title container">
					<h1>{data.contentfulPage.title}</h1>
				</div>
			</header>
			<div class="body container" dangerouslySetInnerHTML={{__html: data.contentfulPage.copy.childContentfulRichText.html}} />
			<Signup />
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
