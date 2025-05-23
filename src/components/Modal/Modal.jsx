import React, {useState} from 'react';
import cs from "./Modal.module.scss"
import Input from "../UI/Input/Input.jsx";
import emailjs from 'emailjs-com';
const Modal = ({visible,setVisible}) => {
    const rooClasses = [cs.modal];
    const [data,setData] = useState({
        first_name: '',
        last_name: '',
        user_email: '',
        message: '',
    })
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const API = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(service,
            template,
            data,
            API)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setVisible(false);
                setData({
                    first_name: '',
                    last_name: '',
                    user_email: '',
                    message: '',
                });
            }, (err) => {
                console.error('FAILED...', err);
                alert('Failed to send the message, please try again.');
            });
    };
    if (visible) {
        rooClasses.push(cs.active);
    }
    return (
        <div onClick={() => setVisible(false)} className={rooClasses.join(" ") } >
            <div
                className={cs.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <form className={cs.form} action="">
                    <h1 className={cs.title}>Полное имя</h1>
                    <div className={cs.inputWrapper}>
                        <div className={cs.wrapperItem}>
                            <Input name="first_name" value={data.first_name} onChange={handleChange} className={cs.input}/>
                            <h6>Имя</h6>
                        </div>
                        <div className={cs.wrapperItem}>
                            <Input name="last_name" value={data.last_name} onChange={handleChange} className={cs.input}/>
                            <h6>Фамилия</h6>
                        </div>
                    </div>
                    <div className={cs.wrapperItem}>
                        <h1 className={cs.title}>Почта</h1>
                        <Input name="user_email" value={data.user_email} onChange={handleChange} className={cs.input}/>
                        <h6 className={cs.supTitle}>example@example.com</h6>
                    </div>
                    <div className={cs.wrapperItem}>
                        <h1 className={cs.title}>Сообщение</h1>
                        <textarea
                            onChange={handleChange}
                            value={data.message}
                            className={cs.textArea}
                            name="message"
                            cols="30"
                            rows="10"
                        />
                    </div>

                    <button onClick={handleSubmit} className={cs.button}>Подтвердить</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;