
export const addEntryRedux =(payload)=> {
    return {type : "ADD_ENTRY", payload}
}

export const removeEntryRedux =(id)=> {
    return {type : "ADD_ENTRY", payload: {id}}
}