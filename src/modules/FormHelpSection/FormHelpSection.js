import React from 'react'
import propTypes from 'prop-types'

import { Help } from './HelpIcon'
import styles from './FormHelpSection.module.css'

export const FormHelpSection = ({ children }) => (
    <div className={styles.formHelpSection}>
        <div className={styles.formHelpSectionIcon}>
            <Help />
        </div>

        {children}
    </div>
)

FormHelpSection.propTypes = {
    children: propTypes.any.isRequired,
}
