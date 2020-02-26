import {
    startLoadingDataElements,
    setDataElements,
    loadingDataElementsError,
} from './actions'

const DATA_ELEMENTS_QUERY = {
    dataElements: {
        resource: 'dataElements',
        params: ({ page, pageSize }) => ({ page, pageSize }),
    },
}

export const loadDataElements = pager => (dispatch, getState, { engine }) => {
    dispatch(startLoadingDataElements())

    const variables = { ...pager }

    return engine
        .query(DATA_ELEMENTS_QUERY, { variables })
        .then(({ dataElements: data }) => {
            const { dataElements, pager } = data
            return dispatch(setDataElements(dataElements, pager))
        })
        .catch(error => dispatch(loadingDataElementsError(error.message)))
}
