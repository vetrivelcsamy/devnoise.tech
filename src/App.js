import React from "react";
import Quotes from "./components/Quotes";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<div>
					<Route exact path='/' component={Quotes} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
