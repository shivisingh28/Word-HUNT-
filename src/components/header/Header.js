import {
	createMuiTheme,
	MenuItem,
	TextField,
	ThemeProvider,
} from "@material-ui/core";

import React from "react";
import "./Header.css";
import categories from "../../data/category";

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
	const darkTheme = createMuiTheme({
		palette: {
			primary: {
				main: lightMode ? "#000" : "#fff",
			},
			type: lightMode ? "light" : "dark",
		},
	});
	const handleChange = (Language) => {
		setCategory(Language);
		setWord("");
	};
	return (
		<div className="header">
			<span className="title">{word ? word : "WORD HUNT"}</span>
			<div className="inputs">
				<ThemeProvider theme={darkTheme}>
					<TextField
						className="search"
						label="Search a word "
						value={word}
						onChange={(e) => setWord(e.target.value)}
					/>
					<TextField
						className="select"
						select
						label="Language"
						value={category}
						onChange={(e) => handleChange(e.target.value)}
						helperText="Please select your language"
					>
						{categories.map((option) => (
							<MenuItem key={option.label} value={option.label}>
								{option.value}
							</MenuItem>
						))}
					</TextField>
				</ThemeProvider>
			</div>
		</div>
	);
};

export default Header;
