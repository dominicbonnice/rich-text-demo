import React from "react";
import Layout from "../components/layout"
import Helmet from 'react-helmet';

const salesDemoPage = ({ data }) => {

	return (
		<Layout>
			<Helmet title={data.contentfulSalesDemoPage.title} />
			<header>
				<nav><a href="/" class="back">« Go back</a></nav>
				<div class="title container">
					<h1>{data.contentfulSalesDemoPage.title}</h1>
				</div>
			</header>
			<div class="body container" dangerouslySetInnerHTML={{__html: data.contentfulSalesDemoPage.copy.childContentfulRichText.html}} />
		</Layout>
	)
}

export default salesDemoPage

export const PageQuery = graphql`
	query salesDemoPage($id: String!) {
	  contentfulSalesDemoPage(id: { eq: $id }) {
	    title
	    copy {
        childContentfulRichText {
          html
        }
	    }
	  }
	}
`;
