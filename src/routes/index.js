import {ElementGenerator} from "@/library/index.js";
import {Login, Register} from "@/screens"
import { Home } from "@/screens/home";

export const Routes = () => {
    const routes = document.getElementById('routes') || ElementGenerator({element: 'div'})
    routes.innerHTML = ''
    switch (location.pathname) {
       
        case '/login' :
            return routes.appendChild(Login())
        case '/register' :
            return routes.appendChild(Register())
        case '/home' :
            return routes.appendChild(Home())
        default :
            return routes.innerHTML = '404'
    }
}