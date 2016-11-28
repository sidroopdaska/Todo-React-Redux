import * as React from "react";
import { connect } from "react-redux";
import { IDispatch } from "redux";
import { IList } from "../../definitions/appState";
import { VisibilityFilter } from "../../definitions/enums";
import * as actions from "../../actions/appActions";
import { List } from "../../components/list/list";
import { TextInput } from "../../components/textInput/textInput";
import { ListFilter } from "../../components/listFilter/listFilter";

export interface ITodoProps {
	list?: IList;
	dispatch?: IDispatch;
}

export interface ITodoState {
	list: IList;
}

class Todo extends React.Component<ITodoProps, { item: string }> {
	constructor(props) {
		super(props);
		this.state = { item: "" };
	}

	private dispatchAddListItemAction() {
		let act = actions.addListItemAction(this.state.item);
		this.props.dispatch(act);
	}

	private addButtonOnClick = () => {
		this.dispatchAddListItemAction();
	}

	private textInputOnKeyDown = (event) => {
		let key = event.which || event.keyCode;
		// ENTER Keycode
		if (key === 13) {
			this.dispatchAddListItemAction();
		}
	}

	private textInputOnChange = (event) => {
		let value = event.target.value;
		this.setState({ item: value });
	}

	private dispatchListItemOnClickAction = (id: number) => {
		this.props.dispatch(actions.listItemOnClickAction(id));
	}

	private dispatchChangeVisibilityFilterAction = (filterVal: VisibilityFilter) => {
		this.props.dispatch(actions.changeVisibilityFitlerAction(filterVal));
	}

	public render() {
		return (
			<div>
				<TextInput
					id="text-input"
					isInline={true}
					value={this.state.item}
					placeholder="Enter an item to the list"
					label="Enter item"
					onChange={this.textInputOnChange}
					onKeyDown={this.textInputOnKeyDown}
				/>
				<button onClick={this.addButtonOnClick}>Add</button>
				<List
					list={this.props.list}
					dispatchListItemOnClickAction={this.dispatchListItemOnClickAction}
				/>
				<ListFilter
					dispatchChangeVisibilityFilterAction={this.dispatchChangeVisibilityFilterAction}
				/>
			</div>
		);
	}
};

function mapStateToProps(state: ITodoState, ownProps: ITodoProps) {
	return {
		list: state.list,
	} as ITodoProps;
}

export default connect(mapStateToProps)(Todo);
