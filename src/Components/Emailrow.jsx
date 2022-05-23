import { Checkbox, IconButton } from '@mui/material'
import './Emailrow.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useNavigate } from 'react-router-dom';
import {  useDispatch } from 'react-redux'
import {selectMail} from '../features/mailSlice'

const Emailrow = ({id,title,subject,descrition,time}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const openMail = ()=>{
        dispatch(selectMail({id,title,subject,descrition,time}))
        navigate("/mail")
    }
  return (
    <>
        <div className="Emailrow" onClick={openMail}>
         <div className="Emailrowoption">
             <Checkbox/>
             <IconButton>
                 <StarBorderIcon/>
             </IconButton>
             <IconButton>
                 <LabelImportantIcon/>
             </IconButton>
         </div>
         <h3 className="Emailrowtitle">{title}</h3>
         <div className="Emailrowmessage"><h4>{subject}<span className="Emailrowdescription">{descrition}</span></h4></div>
         <p className="Emailrowtime">{time}</p>
        </div>
    </>
  )
}

export default Emailrow