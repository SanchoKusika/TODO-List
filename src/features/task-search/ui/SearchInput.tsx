import { useTaskSearchStore } from "../model/searchStore";

interface SearchInputProps {
	placeholder: string;
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
	const query = useTaskSearchStore((state) => state.query);
	const setQuery = useTaskSearchStore((state) => state.setQuery);

	return (
		<input
			className="header-control__input"
			type="search"
			value={query}
			placeholder={placeholder}
			onChange={(event) => setQuery(event.target.value)}
		/>
	);
};
