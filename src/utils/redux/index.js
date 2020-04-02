import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export const useActions = (...actions) => {
  const dispatch = useDispatch();

  return actions.map(a => bindActionCreators(a, dispatch));
};
