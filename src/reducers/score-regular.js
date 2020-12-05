
const scoreRegular =(state=0, action)=>{
    switch(action.type){
        case "SCORE_REGULAR":
            return { 
            ...state,
            score: state +1
            }
            
        default:
            return state
    }
}

export default scoreRegular