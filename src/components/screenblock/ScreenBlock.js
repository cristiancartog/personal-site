import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ScreenBlock.css';

const ScreenBlock = ({
                         children,
                         className,
                         containerClassName,
                         ...othersProps
                     }) => (
    <div className={classNames(containerClassName, 'screen-block-container')}>
        <div {...othersProps} className={classNames(className, 'screen-block')}>
            <div className="container">
                {children}
            </div>
        </div>
    </div>
);

ScreenBlock.defaultProps = {
    className: '',
    containerClassName: '',
};

ScreenBlock.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
};

export default ScreenBlock;
