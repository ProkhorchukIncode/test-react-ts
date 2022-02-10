import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootReducer } from "../Store/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<rootReducer> = useSelector