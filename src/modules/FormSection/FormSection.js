import React from 'react'
import propTypes from 'prop-types'
import styles from './FormSection.module.css'
import cx from 'classnames'

export const FormSection = ({ children, dataTest, twoCols, withTop }) => (
    <section
        className={cx(styles.formSection, {
            [styles.twoCols]: twoCols,
            [styles.withTop]: withTop,
        })}
        data-test={dataTest}
    >
        {children}
    </section>
)

FormSection.propTypes = {
    children: propTypes.any.isRequired,
    dataTest: propTypes.string,
    twoCols: propTypes.bool,
    withTop: propTypes.bool,
}

FormSection.defaultProps = {
    dataTest: 'dhis2-maintenance-formsection',
}
