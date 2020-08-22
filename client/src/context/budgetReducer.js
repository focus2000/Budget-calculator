export default (state, action) => {
    switch(action.type) {
        case 'GET_INCOMES':
            return {
                ...state,
                incomeTransactions:action.payload
            }
            case 'GET_EXPENSES':
                return {
                    ...state,
                    expenseTranasctions: action.payload
                }
        case 'ADD_INCOME':
            return {
                ...state,
                incomeTransactions:[ ...state.incomeTransactions, action.payload]
            };

            case 'ADD_EXPENSE':
                return {
                    ...state,
                    expenseTransactions:[ ...state.expenseTransactions, action.payload]
                };

                case 'DELETE_INCOME':
                    return {
                        ...state,
                        incomeTransactions:state.incomeTransactions.filter(incomeTransaction => incomeTransaction._id !==action.payload)
                    };

                    case 'DELETE_EXPENSE':
                        return {
                            ...state,
                            expenseTransactions:state.expenseTransactions.filter(expenseTransaction => expenseTransaction._id !==action.payload)
                        };
                        case "INCOMES_ERROR":
                            return {
                                ...state,
                                incomeTransactions:[],
                                errors:action.payload
                            }

                            case 'EXPENSES_ERROR':
                                return {
                                    ...state,
                                    expenseTransactions:[],
                                    errors:action.payload
                                }

                      

                       

                            
        default:
            return state;
            

    }
}