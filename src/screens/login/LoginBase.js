import React from 'react';

class LoginBase extends React.Component {
	constructor() {
		super();

		this.backToMainLoginView.bind(this.backToMainLoginView());
	}

	backToMainLoginView() {
		console.log('return to main login');
	}
}

export default LoginBase;
