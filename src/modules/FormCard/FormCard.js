import { Card } from '@dhis2/ui-core'
import React from 'react'
import propTypes from 'prop-types'
import styles from './FormCard.module.css'

export const FormCard = ({ children }) => (
    <div className={styles.formCardOuter}>
        <Card>
            <div className={styles.formCardInner}>{children}</div>
        </Card>
    </div>
)

FormCard.propTypes = {
    children: propTypes.any.isRequired,
}
