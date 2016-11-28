import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from "../store/store";
import {Main} from "./main";

const store = configureStore();

let mainAppContainer = document.getElementById("appMain");
ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>, mainAppContainer);
