import React from 'react';
import ILineProps from './types';

function Line(props: ILineProps): React.JSX.Element {

    const {
        width
    } = props;

    return (
        <div
            className='line'
            style={{ width: width || '50%' }}
        />
    )
}

export default Line;