import * as updeep from "updeep";
import {IList, IListItem} from "../definitions/appState";
import {IReducerHandler} from "../definitions/core";
import {IAction} from "../definitions/core";
import {IReducerMap} from "redux";
import * as types from "../definitions/actionDescriptors";
import {VisibilityFilter} from "../definitions/enums";

export const initialState: IList = {
	items: [],
	visibilityFilter: VisibilityFilter.SHOW_ALL,
};

export const listReducers: IReducerHandler<IList> = {
	[`${types.AddListItem}`]: (state = initialState, action: IAction<string, any>) => {
		let item: IListItem = {
			completed: false,
			text: action.payload,
			id: state.items.length + 1,
		};

		let items = state.items.slice(0);
		items.push(item);
		let newState = updeep.updateIn("items", items, state);
		return newState;
	},
	[`${types.ListItemOnClick}`]: (state = initialState, action: IAction<number, any>) => {
		let items = state.items.map((item) => {
			if (item.id !== action.payload) {
				return item;
			}

			return updeep.updateIn("completed", !item.completed, item);
		});

		let newState = updeep.updateIn("items", items, state);
		return newState;
	},
	[`${types.ChangeVisibilityFilter}`]: (state = initialState, action: IAction<VisibilityFilter, any>) => {
		let newState = updeep.updateIn("visibilityFilter", action.payload, state);
		return newState;
	},
};
