
export function reducer(state, action ) {

    console.log(`original products state : ${JSON.stringify(state)}`);
    console.log(`action : ${JSON.stringify(action)}`);

    switch (action.type) {
        case 'TOGGLE_SHOW_PRODUCT_CODE': {          

            let newState = {
                ...state,
                showProductCode : action.payload
            };

            console.log(`new products state : ${JSON.stringify(newState)}`);

            return newState;
        }

        default: {
            return state;
        }
    }
}