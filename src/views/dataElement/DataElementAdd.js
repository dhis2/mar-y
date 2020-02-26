//import { useSelector } from 'react-redux'
import { Button } from '@dhis2/ui-core'
import React from 'react'
import i18n from '@dhis2/d2-i18n'
import {
    //Checkbox,
    Field,
    Form,
    Input,
    SingleSelect,
    TextArea,
    createMinCharacterLength,
} from '@dhis2/ui-forms'

import {
    Container,
    Content,
    FormActions,
    FormCard,
    FormHeadline,
    FormHelpSection,
    FormHelpSectionHeadline,
    FormHelpSectionParagraph,
    FormParagraph,
    FormSection,
    FormSectionFull,
    FormSectionHeadline,
    FormSectionLeft,
    FormSectionRight,
} from '../../modules'
import styles from './DataElementAdd.module.css'

const required = createMinCharacterLength(0)

export const DataElementAdd = () => {
    //const optionSets = useSelector(getOptionSets)

    return (
        <Container>
            <Content>
                <FormCard>
                    <Form
                        onSubmit={values => {
                            const formatted = {
                                ...values,
                                optionSet: {
                                    id: values.optionSet.value,
                                },
                            }

                            console.log('onSubmit', formatted)
                        }}
                    >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <FormSection twoCols>
                                    <FormSectionLeft>
                                        <FormHeadline>
                                            {i18n.t('Create a Data Element')}
                                        </FormHeadline>
                                        <FormParagraph>
                                            {i18n.t(
                                                'Data elements are the base of DHIS2.  Data elements define what is actually recorded in the system, for example number of immunisations or number of cases of malaria.'
                                            )}
                                        </FormParagraph>
                                    </FormSectionLeft>
                                </FormSection>

                                <FormSection twoCols>
                                    <FormSectionLeft>
                                        <FormSectionHeadline>
                                            Basic Information
                                        </FormSectionHeadline>
                                        <FormParagraph>
                                            {i18n.t(
                                                'Information to help others identify this data element'
                                            )}
                                        </FormParagraph>

                                        <Field
                                            required
                                            name="name"
                                            label={i18n.t('Name')}
                                            component={Input}
                                            validate={required}
                                        />

                                        <Field
                                            required
                                            label={i18n.t('Short name')}
                                            name="short_name"
                                            component={Input}
                                            validate={required}
                                        />

                                        <Field
                                            label={i18n.t('Code')}
                                            name="code"
                                            component={Input}
                                        />

                                        <Field
                                            label={i18n.t('Form name')}
                                            name="form_name"
                                            component={Input}
                                        />

                                        <Field
                                            label={i18n.t('Url')}
                                            name="url"
                                            component={Input}
                                        />

                                        <Field
                                            label={i18n.t('Descriptions')}
                                            name="description"
                                            component={TextArea}
                                            className={styles.last}
                                        />
                                    </FormSectionLeft>
                                </FormSection>

                                <FormSection twoCols withTop>
                                    <FormSectionFull>
                                        <FormSectionHeadline>
                                            {i18n.t('Data Setup')}
                                        </FormSectionHeadline>
                                        <FormParagraph>
                                            {i18n.t(
                                                'What type of this data element be used to capture'
                                            )}
                                        </FormParagraph>
                                    </FormSectionFull>

                                    <FormSectionLeft>
                                        <Field
                                            required
                                            name="domain_type"
                                            label={i18n.t('Domain type')}
                                            component={SingleSelect}
                                            selected={{}}
                                            validate={required}
                                            options={[]}
                                        />

                                        <Field
                                            required
                                            name="value_type"
                                            label={i18n.t('Value type')}
                                            component={SingleSelect}
                                            selected={{}}
                                            options={[]}
                                            validate={required}
                                        />

                                        <Field
                                            required
                                            name="aggregation_type"
                                            label={i18n.t('Aggregation type')}
                                            component={SingleSelect}
                                            selected={{}}
                                            options={[]}
                                            validate={required}
                                        />

                                        <Field
                                            name="field_mask"
                                            label={i18n.t('Field mask')}
                                            component={Input}
                                            className={styles.last}
                                        />
                                    </FormSectionLeft>

                                    <FormSectionRight>
                                        <FormHelpSection>
                                            <FormHelpSectionHeadline>
                                                {i18n.t(
                                                    'Domain, Value and Aggregation Types'
                                                )}
                                            </FormHelpSectionHeadline>
                                            <FormHelpSectionParagraph>
                                                {i18n.t(
                                                    'This is an example of a side-section that ce be included in a part of a form to give contextual help to a user. It is especially useful for giving help to an often misunderstood area.'
                                                )}
                                            </FormHelpSectionParagraph>
                                            <FormHelpSectionParagraph>
                                                {i18n.t(
                                                    'Domain refers to whether this data is for capture aggregated, anonymized data, or if the data element will be used to track data for specific entity, e.g. a person or patient.'
                                                )}
                                            </FormHelpSectionParagraph>
                                            <FormHelpSectionParagraph>
                                                {i18n.t(
                                                    'Value type is the type of data to collect, Common types are number (33 cases). Yes/No (Dosage given: Yes) or Organisation Unit (A location, or unit).'
                                                )}{' '}
                                                <a href="#">
                                                    {i18n.t(
                                                        'Read more about all value types here.'
                                                    )}
                                                </a>
                                            </FormHelpSectionParagraph>
                                            <FormHelpSectionParagraph>
                                                {i18n.t(
                                                    'Aggregation type is how the dta will be aggregated in analytics.  Data can be summed (added), averaged or other advanced analytic methods.'
                                                )}
                                            </FormHelpSectionParagraph>
                                        </FormHelpSection>
                                    </FormSectionRight>
                                </FormSection>

                                <FormActions>
                                    <Button primary type="submit">
                                        {i18n.t('Save Data Element')}
                                    </Button>
                                    <Button>
                                        {i18n.t('Cancel without saving')}
                                    </Button>
                                </FormActions>
                            </form>
                        )}
                    </Form>
                </FormCard>
            </Content>
        </Container>
    )
}

//<Field
//    name="store_zero_data_values"
//    component={Checkbox}
//    label="Store zero data values"
///>
//
//<Field
//    required
//    name="category_combination"
//    component={SingleSelect}
//    selected={{}}
//    options={[]}
//    validate={required}
///>
//
//<Field
//    name="option_set"
//    component={SingleSelect}
//    selected={{ label: '...', value: '...' }}
//    format={({ id }) => {
//        return {
//            label: optionSets[id].displayName,
//            value: id,
//        }
//    }}
//    parse={selectOption => {
//        return { id: selectOption.value }
//    }}
//    options={[]}
///>
//
//<Field
//    name="option_set_for_comments"
//    component={SingleSelect}
//    selected={{}}
//    options={[]}
///>
//
//{/* < name="legends" component={Transfer} /> < name="aggregation_levels" component={Transfer} /> */''}
//
//<Field
//    name="classification"
//    component={SingleSelect}
//    selected={{}}
//    options={[]}
///>
//
//<Field
//    name="collection_method"
//    component={SingleSelect}
//    selected={{}}
//    options={[]}
///>
//
//<Field
//    name="collection_method"
//    component={SingleSelect}
//    selected={{}}
//    options={[]}
///>
//
//{/* dynamic attributes */''}
//
//<Field
//    name="main_data_element_groups"
//    component={Input}
///>
//
//<Field
//    name="tracker-based_data"
//    component={Input}
///>
