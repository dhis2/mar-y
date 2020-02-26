import React from 'react'
import propTypes from 'prop-types'
import styles from './FormHelpSectionHeadline.module.css'

export const FormHelpSectionHeadline = ({ children }) => (
    <h3 className={styles.formHelpSectionHeadline}>{children}</h3>
)

FormHelpSectionHeadline.propTypes = {
    children: propTypes.any.isRequired,
}
