import React, { Component } from "react";
import "./App.css";
import BtnDataFetch from "./BtnDataFetch";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
	state = {
		users: [],
	};

	handleDataFatch = () => {
		fetch(API)
			.then((response) => {
				if (response.ok) {
					return response;
				}
				throw Error(response.status);
			})
			.then((response) => response.json())
			.then((data) => {
				const user = data.results;
				this.setState((prevState) => ({
					users: prevState.users.concat(user),
				}));
			})
			.catch(() => alert("Error - Try one more time"));
	};
	render() {
		const users = this.state.users;
		return (
			<>
				<BtnDataFetch click={this.handleDataFatch} />
				{users.length > 0 ? <UsersList users={users} /> : users}
			</>
		);
	}
}

export default App;
