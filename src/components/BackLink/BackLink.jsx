
import { IoIosArrowBack } from "react-icons/io";
import { ButtonBack } from "./BackList.styled";

export const BackLink = ({to, children}) => {
	return(
		<ButtonBack to={to}>
		<IoIosArrowBack/>
		{children}
		</ButtonBack>
	)
}