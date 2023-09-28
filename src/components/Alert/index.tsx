import React from 'react';
import { ACTIVE_ALERT_DUR, SHOW_ALERT_DUR } from '@constants/animation';
import IAlertProps from './types';

function Alert(props: IAlertProps): React.JSX.Element {

    const [showAlert, setShowAlert] = React.useState(false)

    const {
        icon,
        text,
        active,
        setActive
    } = props;

    React.useEffect(() => {
        if (active) {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, ACTIVE_ALERT_DUR - SHOW_ALERT_DUR)
            setTimeout(() => {
                setActive(false)
            }, ACTIVE_ALERT_DUR)
        }
    }, [active, setActive])

    return (
        <>
            {active && (
                <div className={`alert ${showAlert ? 'show' : 'hide'}`}>
                    <img src={icon} alt="" />
                    {text}
                </div>
            )}
        </>
    )
}

export default Alert;