import React, { Component } from "react";
import "./App.css";
import BtnDataFetch from "./BtnDataFetch";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
	state = {
		users: null,
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
				console.log(data);
				this.setState({
					users: data.results,
				});
			})
			.catch(() => alert("Error - Try one more time"));
	};
	render() {
		const users = this.state.users;
		return (
			<>
				<BtnDataFetch click={this.handleDataFatch} />
				{users ? <UsersList users={users} /> : users}
			</>
		);
	}
}

export default App;
