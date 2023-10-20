import React from 'react';
import IOtherInfoProps from './types';

import './style.css';

function OtherInfo({ otherInfo }: IOtherInfoProps): React.JSX.Element {

    return (
        <div className='profile-main__container other-info'>
            {
                otherInfo?.coefficient && (
                    <div>
                        <div className='label_info'>Коэффициент стипендии:</div>
                        <div className='value_info'>
                            {otherInfo.coefficient}
                        </div>
                    </div>
                )
            }
            {
                otherInfo?.attendance.length > 0 && (
                    otherInfo.attendance.map((att, i) => (
                        <div key={i}>
                            <div className='label_info'>{`${att.caption}:`}</div>
                            <div className='value_info'>
                                {`${att.value} ${att.unit}`}
                            </div>
                        </div>
                    ))
                )
            }
            {
                otherInfo?.fees.length > 0 && (
                    otherInfo.fees.map((fee, i) => (
                        <div key={i}>
                            <div className='label_info'>{`${fee.caption}:`}</div>
                            <div className='value_info'>
                                {`${fee.value} ${fee.unit}`}
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default OtherInfo;