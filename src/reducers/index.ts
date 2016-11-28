import {IAction, IReducerCollection, IReducerHandler} from "../definitions/core";
import {combineReducers, IReducerMap, IReducer} from "redux";
import {initialState, listReducers} from "./listReducers";

function createReducer<T, G>(initialState: T, handlers: IReducerHandler<T>) {
	return (state: T = initialState, action: IAction<G, any>) => {
		const handler = (action && action.type && handlers.hasOwnProperty(action.type)) ? handlers[action.type] : null;
		if (!handler) {
			return state;
		}
		state = handler(state, action);
		return state;
	};
}

class ReducerCollection implements IReducerCollection {
	private items: { [index: string]: (state: any, action: IAction<any, any>) => any } = {};

	public containsKey(stateProperty: string): boolean {
		return this.items.hasOwnProperty(stateProperty);
	}

	public addReducer<T>(stateProperty: string, initialState: T, handlers: IReducerHandler<T>) {
		if (this.containsKey(stateProperty)) { throw `error`; }
		this.items[stateProperty] = createReducer(initialState, handlers);
	}

	public reducers(): { [stateProperty: string]: (state: any, action: IAction<any, any>) => any } {
		return this.items;
	}
}

let dict = new ReducerCollection();
dict.addReducer("list", initialState, listReducers);

let rootReducer = combineReducers(dict.reducers());
export default rootReducer;
