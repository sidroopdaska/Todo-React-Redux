import * as React from "react";
import Todo from "../pages/todo";

/* tslint:disable:no-var-requires */
require("./main.less");
/* tslint:enable:no-var-requires */

export interface IMainProps {}

export class Main extends React.Component<IMainProps, any> {
	constructor(props) {
		super(props);
	}

	public render() {
		return (
			<div className="container">
				<div>Header goes here!</div>
				<Todo />
			</div>
		);
	}
}
