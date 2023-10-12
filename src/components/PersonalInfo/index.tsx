import React from 'react';
import IPersonalInfoProps from './types';

import './style.css';

function PersonalInfo({ personalData }: IPersonalInfoProps): React.JSX.Element {

    return (
        <div className='personal_info'>
            <div>
                <div className='label_info'>ФИО:</div>
                <div className='value_info'>
                    {`${personalData?.surname} ${personalData?.name} ${personalData?.patronymic}`}
                </div>
            </div>
            <div>
                <div className='label_info'>Факультет:</div>
                <div className='value_info'>{personalData?.faculty}</div>
            </div>
            <div>
                <div className='label_info'>Специальность:</div>
                <div className='value_info'>{personalData?.specialty}</div>
            </div>
            <div>
                <div className='label_info'>Группа:</div>
                <div className='value_info'>{personalData?.group}</div>
            </div>
        </div>
    )
}

export default PersonalInfo;