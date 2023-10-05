import React from 'react';
import IBlockProps from './types';

import './style.css';

function WindowBlock(props: IBlockProps): React.JSX.Element {

    const {
        content,
        title,
        subtitle,
        style,
        className,
    } = props;

    return (
        <section className={`window-block${className && ` ${className}`}`} style={style}>
            <div className='window-block__container'>
                <header className='window-block__header'>
                    <h2 className='window-block__title'>
                        {title}
                    </h2>
                    <h3 className='window-block__subtitle'>
                        {subtitle}
                    </h3>
                </header>
                <main className='window-block__content'>
                    {content}
                </main>
            </div>
        </section>

    )
}

export default WindowBlock;