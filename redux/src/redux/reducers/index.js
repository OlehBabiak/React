import {
    INC,
    INC_CUSTOM,
    DEC,
    RES
} from '../action-types'

const initialState = {
    counter: 0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC: {
            return {
                ...state,
                counter: state.counter+1
            }
        }
        case INC_CUSTOM: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case DEC: {
            return {
                ...state,
                counter: state.counter-1
            }
        }
        case RES: {
            return {
                ...state,
                counter: 0
            }
        }
        default:
            console.log('action', action.type, 'does no exist')
            return state
    }
}

