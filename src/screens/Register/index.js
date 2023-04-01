import {ElementGenerator} from '@/library'
import {Routes} from "@/routes/index.js";

export const Register = () => {
    return (ElementGenerator({
        element: 'div',
        id: 'authentication-modal',
        restAttrs: {
            'tabIndex': '-1',

        },
        className: 'flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full',
        child: [
            ElementGenerator({
                element: 'div',
                className: 'relative w-full h-full max-w-md md:h-auto',
                child: [
                    ElementGenerator({
                        element: 'div',
                        className: 'relative bg-white rounded-lg shadow dark:bg-gray-700',
                        child: [
                           
                            ElementGenerator({
                                element: 'div',
                                className: "px-6 py-6 lg:px-8",
                                child: [
                                    ElementGenerator({
                                        element: 'h3',
                                        className: "mb-4 text-xl font-bold text-gray-900 dark:text-white",
                                        child: 'Sign in'
                                    }),
                                    ElementGenerator({
                                        element: 'form',
                                        id:"registerForm",
                                        onsubmit:(e)=>{
                                            e.preventDefault()
                                            const formInput=e.target.querySelectorAll('input')
                                            const data ={}
                                            const errors ={}
                                            formInput.forEach(input => {
                                               
                                                if(input.value){
                                                    data[input.name]=input.value
                                                    input.dataset.valid=true
                                                    input.nextElementSibling.classList.add("hidden")
                                                }else{
                                                    input.dataset.valid=false
                                                    input.dataset.error=true
                                                    errors[input.name]={error:'this field is required'}
                                                    input.nextElementSibling.classList.remove("hidden")
                                                    input.nextElementSibling.innerText='this field is required'
                                                }
                                            });
                                            const isFormValid = [...formInput].every(i => i.dataset.valid=== "true")     
                                                              if(isFormValid){
                                                                const locatedUser =JSON.parse(localStorage.getItem(`users`))||[]
                                                                const isExists= locatedUser.find(u => u.email === data.email)
                                                                if(isExists) return alert("user Already Exist")
                                                                const newUsers=[...locatedUser,data]
                                                                localStorage.setItem(`users`,JSON.stringify(newUsers))
                                                              } else{
                                                               
                                                              }
                                                           
                                                   },
                                        className: "space-y-6",
                                        child: [ElementGenerator({
                                            element: 'div',
                                            child: [
                                                ElementGenerator({
                                                    element: 'label',
                                                    htmlFor: "name",
                                                    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                                                    child: 'Your name'
                                                }),
                                                ElementGenerator({
                                                    element: 'input',
                                                    type: "text",
                                                    name: "name",
                                                    restAttrs:{
                                                        'data-valid':false
                                                    },
                                                    id: "name",
                                                    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
                                                    placeholder: "John",
                                                   
                                                }),
                                                ElementGenerator({
                                                    element: 'span',
                                                    className: "hidden block mb-2 text-sm font-medium text-red-500 dark:text-white",
                                                    child: ''
                                                }),
                                            ]
                                        }),
                                            ElementGenerator({
                                                element: 'div',
                                                child: [
                                                    ElementGenerator({
                                                        element: 'label',
                                                        htmlFor: "email",
                                                        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                                                        child: 'Your email'
                                                    }),
                                                    ElementGenerator({
                                                        element: 'input',
                                                        type: "email",
                                                        name: "email",
                                                        restAttrs:{
                                                            'data-valid':false
                                                        },
                                                        id: "email",
                                                        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
                                                        placeholder: "name@company.com",
                                                        
                                                    }),
                                                    ElementGenerator({
                                                        element: 'span',
                                                        className: "hidden block mb-2 text-sm font-medium text-red-500 dark:text-white",
                                                        child: ''
                                                    }),
                                                ]
                                            }),
                                            ElementGenerator({
                                                element: 'div',
                                                child: [
                                                    ElementGenerator({
                                                        element: 'label',
                                                        htmlFor: "password",
                                                        className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                                                        child: 'Your password'
                                                    }),
                                                    ElementGenerator({
                                                        element: 'input',
                                                        type: "password",
                                                        restAttrs:{
                                                            'data-valid':false
                                                        },
                                                        name: "password",
                                                        id: "password",
                                                        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",
                                                        placeholder: "password",
                                                        
                                                    }),
                                                    ElementGenerator({
                                                        element: 'span',
                                                        className: "hidden block mb-2 text-sm font-medium text-red-500 dark:text-white",
                                                        child: ''
                                                    }),
                                                ]
                                            }),
                                            ElementGenerator({
                                                element: 'button',
                                                type: "submit",
                                               
                                                className: "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                                                child: 'Register'
                                            })
                                        ],
                                      
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }))
}
