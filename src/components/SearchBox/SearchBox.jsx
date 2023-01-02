import { Form, Input, SearchButton } from "./SeachBox.styled";

export const SearchForm = ({onSubmit}) => {
	return(
		<Form onSubmit={onSubmit}>
			<Input
			name="search"
			type="text"
			autoComplete="off"
			placeholder="Enter movie name"
			/>
			<SearchButton>Search</SearchButton>
		</Form>
	)
}