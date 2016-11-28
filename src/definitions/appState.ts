import * as Enums from "./enums";

export interface IListItem {
	completed: boolean;
	text: string;
	id: number;
}

export interface IList {
	items: IListItem[];
	visibilityFilter: Enums.VisibilityFilter;
}
