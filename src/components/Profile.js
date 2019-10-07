import React from 'react';

class Profile extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			imageSource: "/placeholder_portrait.png",
			altText: "test text",
			name: "FirstName LastName",
			biography: "biography goes here"
		}
	}
	render() {
		return(
			<div align="center">
				<img src={this.state.imageSource} height="25%" width="25%" alt={this.state.altText} />
				<div className="bio">
					<p className="name">{this.state.name}</p>
					<p>{this.state.biography}</p>
				</div>
			</div>
		);
	}
}

export default Profile;