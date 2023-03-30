import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");

	/* Folosim state pentru validarea inputului, default fiind validat 
	 si checkuim dupa daca este valid sau nu */
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		/* Resetam validarea la varianta originala atunci cand userul scrie in input */
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			/* Daca utilizatorul a introdus o valoare goala atunci nu ii validam inputul 
			si nu adaugam itemul gol absolut deloc */
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={`form-control ${!isValid ? "invalid" : ""}`}>
				<label
					style={{
						color: !isValid ? "red" : "",
					}}
				>
					Course Goal
				</label>
				<input
					type="text"
					onChange={goalInputChangeHandler}
					style={{
						borderColor: !isValid ? "red" : "",
						backgroundColor: !isValid ? "salmon" : "",
					}}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
