export const getDataElements = state => state.dataElements
export const getDataElementsLoading = state => getDataElements(state).loading
export const getDataElementsLoaded = state => getDataElements(state).loaded
export const getDataElementsError = state => getDataElements(state).error
export const getDataElementsData = state => getDataElements(state).data
export const getDataElementsPager = state => getDataElements(state).pager
