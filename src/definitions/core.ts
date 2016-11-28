export interface IAction<T, G> {
	type: string;
	payload: T;
	meta?: G;
}

export interface IReducerCollection {
	addReducer<T>(stateProperty: string, initialState: T, handlers: IReducerHandler<T>);
	containsKey(stateProperty: string): boolean;
	reducers(): { [stateProperty: string]: (state: any, action: IAction<any, any>) => any };
}

export interface IReducerHandler<T> {
	[name: string]: (state: T, action: IAction<any, any>) => T;
}
