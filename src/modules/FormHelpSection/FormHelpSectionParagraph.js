import React from 'react'
import propTypes from 'prop-types'
import styles from './FormHelpSectionParagraph.module.css'

export const FormHelpSectionParagraph = ({ children }) => (
    <p className={styles.formHelpSectionParagraph}>{children}</p>
)

FormHelpSectionParagraph.propTypes = {
    children: propTypes.any.isRequired,
}
