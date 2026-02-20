import ColumnsViewIcon from "@shared/assets/icons/view-columns.svg?react";
import ListViewIcon from "@shared/assets/icons/view-list.svg?react";
import { IconButton } from "@shared/ui/buttons";

import type { BoardViewMode } from "../model/boardViewStore";

interface BoardViewSwitcherProps {
	columnsLabel: string;
	listLabel: string;
	value: BoardViewMode;
	onChange: (mode: BoardViewMode) => void;
}

export const BoardViewSwitcher = ({
	columnsLabel,
	listLabel,
	value,
	onChange,
}: BoardViewSwitcherProps) => {
	return (
		<div className="board-view-switcher">
			<div className="board-view-switcher__controls">
				<IconButton
					type="button"
					className={`board-view-switcher__btn ${value === "columns" ? "is-active" : ""}`}
					onClick={() => onChange("columns")}
					title={columnsLabel}
					icon={<ColumnsViewIcon />}
				/>

				<IconButton
					type="button"
					className={`board-view-switcher__btn ${value === "list" ? "is-active" : ""}`}
					onClick={() => onChange("list")}
					title={listLabel}
					icon={<ListViewIcon />}
				/>
			</div>
		</div>
	);
};
