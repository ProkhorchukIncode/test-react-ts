import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from '../Store/actionCreators'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}