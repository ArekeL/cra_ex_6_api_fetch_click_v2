import React from "react";
import "./BtnDataFetch.css";

const BtnDataFetch = (props) => {
	return (
		<button className='btn' onClick={props.click}>
			Dodaj użytkownika
		</button>
	);
};

export default BtnDataFetch;
