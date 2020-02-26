export const DATA_ELEMENTS_LOAD_START = 'DATA_ELEMENTS_LOAD_START'
export const startLoadingDataElements = () => ({
    type: DATA_ELEMENTS_LOAD_START,
})

export const DATA_ELEMENTS_LOAD_ERROR = 'DATA_ELEMENTS_LOAD_ERROR'
export const loadingDataElementsError = error => ({
    type: DATA_ELEMENTS_LOAD_ERROR,
    payload: { error },
})

export const DATA_ELEMENTS_SET = 'DATA_ELEMENTS_SET'
export const setDataElements = (dataElements, pager) => ({
    type: DATA_ELEMENTS_SET,
    payload: { dataElements, pager },
})
