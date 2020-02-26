import React from 'react'
import propTypes from 'prop-types'
import styles from './FormSectionRight.module.css'

export const FormSectionRight = ({ children, dataTest }) => (
    <div className={styles.formSectionRight} data-test={dataTest}>
        {children}
    </div>
)

FormSectionRight.propTypes = {
    children: propTypes.any.isRequired,
    dataTest: propTypes.string,
}

FormSectionRight.defaultProps = {
    dataTest: 'dhis2-maintenance-formsectionright',
}
