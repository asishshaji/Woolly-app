const initialState = {
    isloggedIn: false,
    items: [
        {
            imageurl: "https://freesvg.org/img/healthy.png",
            name: "Lettuce Green",
            price: '30/100gm',
            count: 32,
            id: '#121'
        },
        {
            imageurl: "https://freesvg.org/img/healthy.png",
            name: "Lettuce Green",
            price: '30/100gm',
            count: 22,
            id: "#122"
        },
        {
            imageurl: "https://freesvg.org/img/healthy.png",
            name: "Lettuce Green",
            price: '30/100gm',
            count: 21,
            id: "#123"
        },

    ],
    subscriptions: [],
    userCart: []
}

import { combineReducers } from 'redux'

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            var itemIds = state.userCart.map((item) => item.itemId)
            if (itemIds.indexOf(action.itemId) in itemIds == false) {
                return {
                    ...state,
                    userCart: state.userCart.concat({ itemId: action.itemId, count: 1 })
                }
            }

            var arr = state.userCart.map(item => {
                if (item.itemId == action.itemId) {
                    return { itemId: item.itemId, count: item.count + 1 }
                }
                return { ...item }
            })
            return {
                ...state,
                userCart: arr
            }


        case "RM_ITEM":


            var arr = state.userCart.map(item => {
                if (item.itemId == action.itemId) {
                    if (item.count > 0)
                        return { itemId: item.itemId, count: item.count - 1 }
                }
                return { ...item }
            })
            return {
                ...state,
                userCart: arr
            }

        default:
            return state
    }
}
export default storeReducer