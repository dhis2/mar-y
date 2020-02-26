import {
    DATA_ELEMENTS_LOAD_ERROR,
    DATA_ELEMENTS_LOAD_START,
    DATA_ELEMENTS_SET,
} from './actions'

export const dataElementsDefaultState = {
    loading: false,
    loaded: false,
    error: null,
    data: {},
    pager: {
        pageSize: 50,
        page: 1,
    },
}

export const dataElements = (
    state = dataElementsDefaultState,
    { type, payload = {} } = {}
) => {
    const { dataElements: data, error, pager } = payload

    if (type === DATA_ELEMENTS_LOAD_START) {
        return { ...state, loading: true, error: null }
    }

    if (type === DATA_ELEMENTS_LOAD_ERROR) {
        return { ...state, loading: false, error: error }
    }

    if (type === DATA_ELEMENTS_SET) {
        return { ...state, pager, loading: false, loaded: true, data }
    }

    return state
}
