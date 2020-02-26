import React from 'react'
import propTypes from 'prop-types'
import styles from './FormActions.module.css'

export const FormActions = ({ children }) => (
    <div className={styles.formActions}>
        {React.Children.map(children, child => (
            <div className={styles.formAction}>{child}</div>
        ))}
    </div>
)

FormActions.propTypes = {
    children: propTypes.any.isRequired,
}
