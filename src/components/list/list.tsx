import * as React from "react";
import {IListItem, IList} from "../../definitions/appState";
import {VisibilityFilter} from "../../definitions/enums";

/* tslint:disable:no-var-requires */
require("./list.less");
/* tslint:enable:no-var-requires */

export interface IListProps {
	list: IList;
	dispatchListItemOnClickAction: (id: number) => void;
}

export class List extends React.Component<IListProps, any> {
	constructor(props) {
		super(props);
	}

	private listItemOnClick(id: number) {
		this.props.dispatchListItemOnClickAction(id);
	}

	private detListItemsToRender() {
		let list = this.props.list;
		switch (this.props.list.visibilityFilter) {
			case VisibilityFilter.SHOW_ACTIVE:
				return list.items.filter((item) => {
					return !item.completed;
				});
			case VisibilityFilter.SHOW_COMPLETED:
				return list.items.filter((item) => {
					return item.completed;
				});
			case VisibilityFilter.SHOW_ALL:
			default: return list.items;
		}
	}

	private renderListItems() {
		let filteredItems = this.detListItemsToRender();

		return filteredItems.map((item) => {
			let boundItemClick = this.listItemOnClick.bind(this, item.id);
			return (
				<li
					key={item.id}
					onClick={boundItemClick}
					className={`${item.completed ? "item-completed" : "item-active"}`}
				>
					{item.text}
				</li>
			);
		});
	}

	public render() {
		return(
			<ul>
				{this.props.list.items.length > 0 ? this.renderListItems() : <li className="list-empty">List is empty!</li>}
			</ul>
		);
	}
};
