import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import {closeSendMessage} from '../features/mailSlice'
import { db } from '../Firebase';
import firebase from 'firebase/compat/app';

const SendMail = () => {
    const { register, handleSubmit,  formState: { errors }  } = useForm();
    const onSubmit = (formData)=>{
        console.log(formData);
        db.collection("emails").add({
            to:formData.to,
            subject:formData.subject,
            message:formData.message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        dispatch((closeSendMessage()))
    }
    const dispatch = useDispatch()

  return (
    <>
        <div className="sendMial">
            <div className="sendMailHeader">
                <h3>New Message</h3>
                <CloseIcon className='close'  onClick={() => dispatch((closeSendMessage()))}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type='text'  name='to' placeholder='To' {...register("to",{ required: true })}/>
                {errors.to && <span className='fieldserrors'>To is required</span>}
                <input type='text' placeholder='Subject' name='subject' {...register("subject",{ required: true })} />
                {errors.subject && <span className='fieldserrors'>Subject is required</span>}
                <input type='text'  className='sendmailmessage ' name='message'{...register("message",{ required: true })} />
                {errors.message && <span className='fieldserrors'>Message is required</span>}
                <div className="sendmailoption">
                    <Button className='sendbtn' varient="contained" color="primary" type='submit'>Send</Button>
                </div>
            </form>
        </div>
    </>
  )
}

export default SendMail