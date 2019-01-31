import React from "react";

export default () => (
	<div className="signup">
		<form
			className="container"
			action="https://contentful.us18.list-manage.com/subscribe/post?u=64719f4e18541c12bab05be89&amp;id=be74f09e93"
			method="post"
			id="mc-embedded-subscribe-form"
			name="mc-embedded-subscribe-form"
			target="_blank">
			<h2>Participate in the Alpha program</h2>
			<p>
				If you want to shape the above features with your feedback, sign up in the mailchimp form below and we'll get in touch with you to enable the alpha features.
			</p>
			<div>
				<input
					type="email"
					placeholder="Your Email address (required)"
					name="EMAIL"
					className="signup__input-text"
					id="mce-EMAIL" />
				<input
					type="text"
					name="b_64719f4e18541c12bab05be89_be74f09e93"
					tabindex="-1"
					className="signup__input-honeypot"
					value="" />
				<input
					type="submit"
					value="Subscribe"
					name="subscribe"
					className="signup__submit"
					id="mc-embedded-subscribe"/>
			</div>
		</form>
	</div>
);
