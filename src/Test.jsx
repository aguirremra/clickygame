import React from "react";

class Test extends React.Component {
	render () {
		return (
			<div>
				The application should render different images (of your choice) to the screen. Each image should listen for click events.
				The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.
			</div>
			);
	}
}

export default Test;