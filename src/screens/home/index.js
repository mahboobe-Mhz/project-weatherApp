import {ElementGenerator} from '@/library'
import {SearchBox} from '@/components/searchBox'

export const Home =()=>{
    return ElementGenerator({
        element:"div",
        className:"mt-5 ",
        child:[
            ElementGenerator({
                element:"div",

                child: SearchBox()
                
            }),
                    ElementGenerator({
                        element: "div",
                         className:"mt-20",
                        id:"weather"
                    })
                

            
        ]
    })
}