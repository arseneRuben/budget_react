
const reducer= (state = initialEntries, action) =>{
  let newEntries
  switch(action.type) {
    case "ADD_ENTRY":
      newEntries = initialEntries.concat({...action.payload});
      return newEntries;
    case "REMOVE_ENTRY":
      newEntries = state.filter((entry)=> entry.id !== action.payload);
      return newEntries;
      
    default:
      return state;
  }
}
export default reducer;
var initialEntries=[
    {
      id:"1",
      description:"Work income redux",
      value : 1000,
      isExpense : false
    },
    {
      id:"5",
      description:"Water bill",
      value : 200,
      isExpense : true
    },
    {
      id:"6",
      description:"Baby shower",
      value : 600,
      isExpense : false
    },
    {
      id:"2",
      description:"Rent",
      value : 300,
      isExpense : true
    },
    {
      id:"3",
      description:"Fruits",
      value : 40,
      isExpense : true
    },
    {
      id:"4",
      description:"Power Bill",
      value : 606,
      isExpense : true
    },
  ]