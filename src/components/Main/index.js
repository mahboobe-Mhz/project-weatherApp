import {ElementGenerator} from '@/library/'
import { Routes } from "@/routes"

export const Main = () => {
    return ElementGenerator({
        element: 'main',
        id: 'routes',
        className: 'flex justify-center items-center',
        child: Routes()
    });
}