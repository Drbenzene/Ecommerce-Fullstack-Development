const loadFromLocalStorage = (state) => {
    try {
        const serializedState = localStorage.getItem(`${state}`);

        if (serializedState === undefined) {
            return undefined
        }

        return JSON.parse(serializedState);
    } catch (err){
        console.log(err);
        return undefined
    }

}

const saveToLocalStorage = (storageName, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(`${storageName}`, serializedState);
    } catch (err){
        console.log(err);
    }
}

export {loadFromLocalStorage, saveToLocalStorage}