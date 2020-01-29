export const loadState = () => {
    try {

        const serealizedState = localStorage.getItem('@shoppingList/state');
        if(serealizedState === null){
            return undefined;
        }
        return JSON.parse(serealizedState);

    }catch(err){
        return undefined;
    }
}

export const saveState = (state) => {

    try {

        const serealizedState = JSON.stringify(state);
        localStorage.setItem('@shoppingList/state',serealizedState);

    }catch(err){
        //Ignoring
    }
}