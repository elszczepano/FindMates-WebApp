const registerForm = (state = [], action) => {
	switch(action.type) {
	case 'ADD_REGISTER_DETAIL':
		return;
	case 'EDIT_REGISTER_DETAIL':
		return;
	case 'CLEAR_REGISTER_FORM':
		return;
	default:
		return state;
	}

};

export default registerForm;