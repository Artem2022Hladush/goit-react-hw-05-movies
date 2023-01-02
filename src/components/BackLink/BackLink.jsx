import { StyledLink } from "./BackLink.styled";
import {BsArrowLeft} from "react-icons/bs"

export const BackLink = ({to, children}) => {
	return(
		<StyledLink to={to}>
			<BsArrowLeft size="24px"/>
			{children}
		</StyledLink>
	)
}
