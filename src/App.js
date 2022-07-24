import './App.css';
import { ConfigContextProvider } from "./dashboard/ConfigContext";
import { Dashboard } from "./dashboard/Dashboard";

function App () {
	
	return (
		<div className="App">
			<ConfigContextProvider>
				<Dashboard />
			</ConfigContextProvider>
		</div>
	);
}

export default App;
