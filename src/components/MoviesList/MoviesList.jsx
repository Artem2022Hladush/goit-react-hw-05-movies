import { StyledLink, List } from "./MoviesList.styled"

export const MoviesList=({movies, location})=> {
	return(
		<List>
			{movies.map(({id, original_title}) => {
				return(
					<li key={id}>
						<StyledLink to={`/movies/${id}`} state={{from: location}}>
							{original_title}
						</StyledLink>
					</li>
				)
			})}
		</List>
	)
}
