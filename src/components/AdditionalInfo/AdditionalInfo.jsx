import {
	StyledLink,
	Title,
	Container,
	List,
	ListItem,
 } from './AdditionalInfo.styled';
 
 export const AdditionalInfo = ({ location }) => {
	return (
	  <Container>
		 <Title>Additional information</Title>
		 <List>
			<ListItem>
			  <StyledLink to="cast" state={{ from: location }}>
				 Cast
			  </StyledLink>
			</ListItem>
			<ListItem>
			  <StyledLink to="reviews" state={{ from: location }}>
				 Review
			  </StyledLink>
			</ListItem>
		 </List>
	  </Container>
	);
 };