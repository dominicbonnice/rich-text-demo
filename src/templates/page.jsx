import React from "react";

const Page = ({ data }) => {

	return (
		<div>
			<h1>{data.contentfulPage.title}</h1>
			<div dangerouslySetInnerHTML={{__html: data.contentfulPage.copy.childContentfulRichText.html}} />

		</div>
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

