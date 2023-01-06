import PropTypes from 'prop-types';
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

MoviesList.propTypes = {
	movies: PropTypes.arrayOf(
	  PropTypes.shape({
		 id: PropTypes.number.isRequired,
		 original_title: PropTypes.string.isRequired,
	  })
	).isRequired,
	location: PropTypes.shape({
	  pathname: PropTypes.string.isRequired,
	  search: PropTypes.string,
	  state: PropTypes.string,
	}),
 };