import { Button } from '@dhis2/ui-core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import React, { useEffect } from 'react'

import {
    Container,
    Content as ContentLayout,
    SideBar as SideBarLayout,
    MainContent,
    Sidebar,
    PageHeadline,
} from '../../modules'
import { dataElementSections, groups, sectionOrder } from '../../config'
import {
    getDataElementsData,
    getDataElementsError,
    getDataElementsLoaded,
    getDataElementsLoading,
    getDataElementsPager,
} from '../../redux/dataElements/selectors'
import { loadDataElements } from '../../redux/dataElements/thunks'

export const DataElementList = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const loaded = useSelector(getDataElementsLoaded)
    const loading = useSelector(getDataElementsLoading)
    const error = useSelector(getDataElementsError)
    const dataElements = useSelector(getDataElementsData)
    const initialPager = useSelector(getDataElementsPager)

    useEffect(() => {
        if (!loaded && !loading && !error) {
            dispatch(loadDataElements(initialPager))
        }
    }, [])

    const showLoading = !error && (!loaded || loading)
    const showError = error
    const showList = loaded && !loading && !error

    console.log('data', dataElements)
    console.log('loaded', loaded)
    console.log('loading', loading)
    console.log('error', error)
    return (
        <Container>
            <SideBarLayout>
                <Sidebar sections={sectionOrder[groups.dataElement.key]} />
            </SideBarLayout>

            <ContentLayout>
                <MainContent>
                    <PageHeadline>
                        {dataElementSections.dataElement.name}
                    </PageHeadline>

                    <Button
                        onClick={() =>
                            history.push(
                                '/edit/dataElementSection/dataElement/Add'
                            )
                        }
                    >
                        Add a new one
                    </Button>

                    {showLoading && <span>Loading data elements...</span>}
                    {showError && <span>{error}</span>}
                    {showList &&
                        dataElements.map(dataElement => (
                            <div
                                key={dataElement.id}
                                style={{ marginBottom: 2 }}
                                onClick={() => alert('Nice try')}
                            >
                                <pre style={{ display: 'inline-block' }}>
                                    Id: {dataElement.id}
                                </pre>
                                <span>{' ------ '}</span>
                                <span>{dataElement.displayName}</span>
                            </div>
                        ))}
                </MainContent>
            </ContentLayout>
        </Container>
    )
}
