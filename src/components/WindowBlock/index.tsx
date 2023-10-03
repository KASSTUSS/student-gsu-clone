import React from 'react';
import IBlockProps from './types';

import './style.css';

function WindowBlock(props: IBlockProps): React.JSX.Element {

    const [loading, setLoading] = React.useState(true)

    const {
        content,
        title,
        subtitle,
    } = props;

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 50)
    }, [])

    return (
        <section className='window-block'>
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