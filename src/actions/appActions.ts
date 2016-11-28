import * as types from "../definitions/actionDescriptors";
import {IListItem} from "../definitions/appState";
import {VisibilityFilter} from "../definitions/enums";
import {IAction} from "../definitions/core";

export function addListItemAction(text: string) {
	let action: IAction<string, any> = {
		type: types.AddListItem,
		payload: text,
	};

	return action;
}

export function listItemOnClickAction(id: number) {
	let action: IAction<number, any> = {
		type: types.ListItemOnClick,
		payload: id,
	};

	return action;
}

export function changeVisibilityFitlerAction(filterVal: VisibilityFilter) {
	let action: IAction<VisibilityFilter, any> = {
		type: types.ChangeVisibilityFilter,
		payload: filterVal,
	};

	return action;
}
