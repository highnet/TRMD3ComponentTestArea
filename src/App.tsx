import {useEffect, useState} from "react";
import "trmd3components/trmd3.css";
import {getPreferredScheme, toggleTheme} from "trmd3components/Themeing";
import BottomAppBar from "trmd3components/BottomAppBar";
import TopAppBar from "trmd3components/TopAppBar";
import Badge from "trmd3components/Badge";
import Button from "trmd3components/Button";
import HorizontalCard from "trmd3components/HorizontalCard";
import StackedCard from "trmd3components/StackedCard";
import Component from "trmd3components/Component";
import Carousel from "trmd3components/Carousel";
import Checkbox from "trmd3components/Checkbox";
import InputChip from "trmd3components/InputChip";
import AssistChip from "trmd3components/AssistChip";
import {activateSnackBarId, openDialogId} from "trmd3components/Modals";
import Dialog from "trmd3components/Dialog";
import HorizontalDivider from "trmd3components/HorizontalDivider";
import VerticalDivider from "trmd3components/VerticalDivider";
import ExtendedFab from "trmd3components/ExtendedFab";
import Fab from "trmd3components/Fab";
import Icon from "trmd3components/Icon";
import IconButton from "trmd3components/IconButton";
import List from "trmd3components/List";
import ListItem from "trmd3components/ListItem";
import MenuItem from "trmd3components/MenuItem";
import Menu from "trmd3components/Menu";
import NavigationDrawerItem from "trmd3components/NavigationDrawerItem";
import NavigationDrawer from "trmd3components/NavigationDrawer";
import NavigationRail from "trmd3components/NavigationRail";
import RadioButton from "trmd3components/RadioButton";
import SegmentedButton from "trmd3components/SegmentedButton";
import SegmentedButtonGroup from "trmd3components/SegmentedButtonGroup";
import SideSheet from "trmd3components/SideSheet";
import Typography from "trmd3components/Typography";
import Slider from "trmd3components/Slider";
import SnackBar from "trmd3components/SnackBars";
import Switch from "trmd3components/Switch";
import TextField from "trmd3components/TextField";
import Tooltip from "trmd3components/Tooltip";

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
			<Typography variant="text-display-large">
				Display Large - Roboto 57/54 . 0
			</Typography>

			<Typography variant="text-display-medium">
				Display Medium - Roboto 45/52 . 0
			</Typography>

			<Typography variant="text-display-small">
				Display Small - Roboto 36/44 . 0
			</Typography>
		</>
	);
}

export default App;
