import style from './YourDreamSection.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { sendDreamThunkCreator } from '../../../../../redux/mainPageReducer';
import { useDispatch } from 'react-redux';

const YourDreamSection = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Индивидуальная расшифровка Вашего сна</h2>
            <div>
                <Formik
                    initialValues={{ email: '', text: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Необходимо заполнить поле';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Неправильный email';
                        }
                        if (!values.text) {
                            errors.text = 'Необходимо заполнить поле';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(sendDreamThunkCreator(values));
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={style.form}>
                            <Field className={style.email} type="email" name="email" placeholder='Введите email' />
                            <ErrorMessage className={style.error} name="email" component="div" />

                            <Field className={style.text} type="text" name="text" placeholder='Введите Ваш сон' />
                            <ErrorMessage className={style.error} name="text" component="div" />

                            <button className={style.submit} type="submit" disabled={isSubmitting}>
                                Отправить
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <p>
                напишите Ваш сон, и email адресс на который мы вышлем расшифровку вашего сна, полностью анонимно
            </p>
        </div>
    )
}

export default YourDreamSection;