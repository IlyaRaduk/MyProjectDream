import DateField from "./DateField";
import { connect } from 'react-redux';
import { setDateActionCreator } from "../../../../../redux/mainPageReducer";
import { useEffect } from "react";

const DateFieldCont = (props) => {
    const optionsForDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric', 
        timezone: 'UTC',
    }
    useEffect(() => {
        props.setDate(new Date().toLocaleString("ru", optionsForDate));
    }, [])

    return (
        <DateField date={props.date} />
    )
}

const mapStateToProps = (state) => {
    return {
        date: state.mainPage.date,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setDate: (date) => {
            dispatch(setDateActionCreator(date))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateFieldCont)