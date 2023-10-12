import React from 'react';
import IOtherInfoProps from './types';

import './style.css';

function OtherInfo({ otherInfo }: IOtherInfoProps): React.JSX.Element {

    return (
        <div className='profile-main__container personal_info'>
            <div>
                <div className='label_info'>ФИО:</div>
                <div className='profile__fullname'>
                    <span>
                        {otherInfo?.surname}
                    </span>
                    <span>
                        {otherInfo?.name}
                    </span>
                    <span>
                        {otherInfo?.patronymic}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default OtherInfo;