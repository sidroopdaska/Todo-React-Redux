declare module Updeep {
	interface IStatic {
		update<T extends {}, U extends {}>(updates: U, obj: T): T;

		updateIn<T extends {}>(path: string | Array<string | number>, value: any, obj: T): T;

		constant<T extends {}>(obj: T): T;
	}
}

declare var updeep: Updeep.IStatic;

declare module "updeep" {
	export = updeep;
}