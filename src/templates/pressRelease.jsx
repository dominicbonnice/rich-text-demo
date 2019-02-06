import React from "react";
import Layout from "../components/layout"
import Helmet from 'react-helmet';

const PressRelease = ({ data }) => {

	return (
		<Layout>
			<Helmet title={data.contentfulPressRelease.title} />
			<header>
				<nav><a href="/">« Go back</a></nav>
				<div class="title container">
					<h1>{data.contentfulPressRelease.title}</h1>
				</div>
			</header>
			<div class="body container" dangerouslySetInnerHTML={{__html: data.contentfulPressRelease.copy.childContentfulRichText.html}} />
		</Layout>
	)
}

export default PressRelease

export const PageQuery = graphql`
	query PressRelease($id: String!) {
	  contentfulPressRelease(id: { eq: $id }) {
	    title
	    copy {
        childContentfulRichText {
          html
        }
	    }
	  }
	}
`;
