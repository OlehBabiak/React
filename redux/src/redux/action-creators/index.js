import {
    INC,
    INC_CUSTOM,
    DEC,
    RES,
} from '../action-types'

const incAction = () => ({type: INC})
const incCustom = (payload) => ({type: INC_CUSTOM, payload})
const incDec = () => ({type: DEC})
const incRes = () => ({type: RES})

export {
    incAction,
    incCustom,
    incDec,
    incRes,

}