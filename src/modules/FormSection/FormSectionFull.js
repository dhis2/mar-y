import React from 'react'
import propTypes from 'prop-types'
import styles from './FormSectionFull.module.css'

export const FormSectionFull = ({ children, dataTest }) => (
    <div className={styles.formSectionFull} data-test={dataTest}>
        {children}
    </div>
)

FormSectionFull.propTypes = {
    children: propTypes.any.isRequired,
    dataTest: propTypes.string,
}

FormSectionFull.defaultProps = {
    dataTest: 'dhis2-maintenance-formsectiontop',
}
