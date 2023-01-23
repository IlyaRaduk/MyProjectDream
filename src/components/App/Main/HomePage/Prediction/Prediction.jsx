import style from './Prediction.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getPredictionThunkCreator } from '../../../../../redux/mainPageReducer';

const Prediction = () => {
    const isPrediction = useSelector((state) => state.homePage.isActivePrediction);
    const prediction = useSelector((state) => state.homePage.prediction);
    const dispatch = useDispatch();
    const handlerActivePrediction= (e)=>{
        dispatch(getPredictionThunkCreator())
    }

    return (
        <section className={style.prediction} >
            <div onClick={(e)=>handlerActivePrediction(e)} className={isPrediction? style.cookieActive: style.cookie }>
                {prediction}
            </div>
        </section>
    )
}

export default Prediction;