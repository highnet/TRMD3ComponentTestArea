import {useEffect, useState} from "react";
import "trmd3components/trmd3.css";
import {getPreferredScheme, toggleTheme} from "trmd3components/Themeing";
import BottomAppBar from "trmd3components/BottomAppBar";
import TopAppBar from "trmd3components/TopAppBar";
import Badge from "trmd3components/Badge";
import Button from "trmd3components/Button";
import Component from "trmd3components/Component";

function App() {
	const [_theme, setTheme] = useState(
		localStorage.getItem("theme") || getPreferredScheme() + "-theme"
	);

	useEffect(() => {
		localStorage.setItem("theme", _theme);
		document.body.className = "body-" + _theme;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.code === "Space") {
				handleToggleTheme();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [_theme]);

	const handleToggleTheme = (): void => {
		toggleTheme(_theme, setTheme);
	};

	return (
		<>
			<Component>
				<Badge
					configuration={"multiple-digits"}
					anchor="top-right"
					xOffset={-2.5}
					yOffset={-0.6}>
					123
				</Badge>
			</Component>
		</>
	);
}

export default App;
