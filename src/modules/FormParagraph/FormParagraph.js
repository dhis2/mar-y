import React from 'react'
import propTypes from 'prop-types'
import styles from './FormParagraph.module.css'

export const FormParagraph = ({ children, dataTest }) => (
    <p className={styles.formParagraph} data-test={dataTest}>
        {children}
    </p>
)

FormParagraph.propTypes = {
    children: propTypes.string.isRequired,
    dataTest: propTypes.string,
}
