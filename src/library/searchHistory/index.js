export const history= ()=>{
    const locatedUser =JSON.parse(localStorage.getItem(`users`))||[]
    console.log(locatedUser);
}

