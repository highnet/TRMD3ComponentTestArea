import {useEffect, useState} from "react";
import "trmd3components/trmd3.css";
import Button from "trmd3components/Button";
import HorizontalCard from "trmd3components/HorizontalCard";
import {getPreferredScheme, toggleTheme} from "trmd3components/Themeing";

function App() {
	const [_theme, setTheme] = useState(
		localStorage.getItem("theme") || getPreferredScheme() + "-theme"
	);

	useEffect(() => {
		localStorage.setItem("theme", _theme);
		document.body.className = "body-" + _theme;
	}, [_theme]);

	const handleToggleTheme = (): void => {
		toggleTheme(_theme, setTheme);
	};

	return (
		<>
			<Button onClick={handleToggleTheme}>Toggle Theme</Button>
			<HorizontalCard></HorizontalCard>
		</>
	);
}

export default App;
