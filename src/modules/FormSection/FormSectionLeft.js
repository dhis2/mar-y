import React from 'react'
import propTypes from 'prop-types'
import styles from './FormSectionLeft.module.css'

export const FormSectionLeft = ({ children, dataTest }) => (
    <div className={styles.formSectionLeft} data-test={dataTest}>
        {children}
    </div>
)

FormSectionLeft.propTypes = {
    children: propTypes.any.isRequired,
    dataTest: propTypes.string,
}

FormSectionLeft.defaultProps = {
    dataTest: 'dhis2-maintenance-formsectionleft',
}
