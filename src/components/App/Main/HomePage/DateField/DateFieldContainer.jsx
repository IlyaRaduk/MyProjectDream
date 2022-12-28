import DateField from "./DateField";
import { connect } from 'react-redux';
import { setDateActionCreator, setMoonPhaseActionCreator } from "../../../../../redux/mainPageReducer";
import { useEffect } from "react";


const getMoonPhase = () => {
    const moonBegin = 1670461650000;
    const moonMonth = 29.53059 * 24 * 60 * 60 * 1000;
    const delayPhase = 318930372;
    let nowTime = Date.now()
    let moonDay = ((nowTime - moonBegin) % moonMonth);
    let moonPhase = null;
    if (0 <= moonDay && moonDay < 318930372) {
        moonPhase = 'Полнолуние';
    }
    else if (delayPhase <= moonDay && moonDay < delayPhase * 2) {
        moonPhase = 'Убывающая луна';
    }
    else if (delayPhase * 2 <= moonDay && moonDay < delayPhase * 3) {
        moonPhase = 'Последняя четверть';
    }
    else if (delayPhase * 3 <= moonDay && moonDay < delayPhase * 4) {
        moonPhase = 'Старая луна';
    }
    else if (delayPhase * 4 <= moonDay && moonDay < delayPhase * 5) {
        moonPhase = 'Новолуние';
    }
    else if (delayPhase * 5 <= moonDay && moonDay < delayPhase * 6) {
        moonPhase = 'Молодая луна';
    }
    else if (delayPhase * 6 <= moonDay && moonDay < delayPhase * 7) {
        moonPhase = 'Первая четверть';
    }
    else if (delayPhase * 7 <= moonDay && moonDay < delayPhase * 8) {
        moonPhase = 'Прибывающая луна';
    }
    return moonPhase;
}
const getDate = () => {
    const optionsForDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric',
        timezone: 'UTC',
    }
    return new Date().toLocaleString("ru", optionsForDate);
}

const DateFieldContainer = (props) => {
    useEffect(() => {
        props.setDate(getDate());
        props.setMoonPhase(getMoonPhase());
    }, [])

    return (
        <DateField date={props.date} moonPhase={props.moonPhase} />
    )
}

const mapStateToProps = (state) => {
    return {
        date: state.homePage.date,
        moonPhase: state.homePage.moonPhase,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setDate: (date) => {
            dispatch(setDateActionCreator(date))
        },
        setMoonPhase: (moonPhase) => {
            dispatch(setMoonPhaseActionCreator(moonPhase))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateFieldContainer)