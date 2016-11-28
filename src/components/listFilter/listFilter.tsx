import * as React from "react";
import {VisibilityFilter} from "../../definitions/enums";

/* tslint:disable:no-var-requires */
require("./listFilter.less");
/* tslint:enable:no-var-requires */

export interface IListFilterProps {
	dispatchChangeVisibilityFilterAction: (filterVal: VisibilityFilter) => void;
}

export const ListFilter = (props: IListFilterProps) => {
	return (
		<div className="list-filter">
			<span>Show: </span>
				<a href="javascript:void(0)" onClick={() => {props.dispatchChangeVisibilityFilterAction(VisibilityFilter.SHOW_ALL)}}>All</a>
				<a href="javascript:void(0)" onClick={() => {props.dispatchChangeVisibilityFilterAction(VisibilityFilter.SHOW_ACTIVE)}}>Active</a>
				<a href="javascript:void(0)" onClick={() => {props.dispatchChangeVisibilityFilterAction(VisibilityFilter.SHOW_COMPLETED)}}>Completed</a>
		</div>
	);
};
