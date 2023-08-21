import { createContext } from "react";
import { ROUTES } from "../util/Routes";


export interface tipos {
    route: string,
    setRoute:(c: string) => void,
}



let initialState:tipos = {
    route: ROUTES.HOME,
    setRoute: ()=>{},
}


export const TodoContext = createContext<typeof initialState>(initialState);
