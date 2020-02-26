import React from 'react'
import propTypes from 'prop-types'
import styles from './FormSectionHeadline.module.css'

export const FormSectionHeadline = ({ children, dataTest }) => (
    <h2 className={styles.formSectionHeadline} data-test={dataTest}>
        {children}
    </h2>
)

FormSectionHeadline.propTypes = {
    children: propTypes.any.isRequired,
    dataTest: propTypes.string,
}

FormSectionHeadline.defaultProps = {
    dataTest: 'dhis2-maintenance-formsectionheadline',
}
