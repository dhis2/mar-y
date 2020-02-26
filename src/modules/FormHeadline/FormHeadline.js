import React from 'react'
import propTypes from 'prop-types'
import styles from './FormHeadline.module.css'

export const FormHeadline = ({ children, dataTest }) => (
    <h1 className={styles.formHeadline} data-test={dataTest}>
        {children}
    </h1>
)

FormHeadline.propTypes = {
    children: propTypes.string.isRequired,
    dataTest: propTypes.string,
}
