import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export const BackLink = ({to, children}) => {
	return(
		<Link to={to}>
		<IoIosArrowBack/>
		{children}
		</Link>
	)
}