import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "trmd3components/trmd3.css";
import Button from "trmd3components/Button";
import HorizontalCard from "trmd3components/HorizontalCard";
import {getPreferredScheme, toggleTheme} from "trmd3components/Themeing";

function App() {
	const [count, setCount] = useState(0);

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
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<Button onClick={handleToggleTheme}></Button>
			<HorizontalCard></HorizontalCard>
		</>
	);
}

export default App;
