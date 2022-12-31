import { StyledLink, List } from "./MoviesList.styled"

export const MoviesList=({movies})=> {
	return(
		<List>
			{movies.map(({id, original_title}) => {
				return(
					<li key={id}>
						<StyledLink >
							{original_title}
						</StyledLink>
					</li>
				)
			})}
		</List>
	)
}