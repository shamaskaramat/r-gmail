import './Mail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveIcon from '@mui/icons-material/Archive';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import DraftsIcon from '@mui/icons-material/Drafts';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../features/mailSlice';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
const Mail = () => {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail)
  return (
    <>
      <div className="mail">
        <div className="mailtools">
          <div className="mailtoolsleft">
            <IconButton>
              <ArrowBackIcon onClick={() => navigate('/')} />
            </IconButton>
            <IconButton>
              <ArchiveIcon />
            </IconButton>
            <IconButton>
              <ErrorIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <DraftsIcon />
            </IconButton>
            <IconButton>
              <WatchLaterIcon />
            </IconButton>
            <IconButton>
              <AddTaskIcon />
            </IconButton>
            <IconButton>
              <DriveFileMoveIcon />
            </IconButton>
            <IconButton>
              <LabelIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="mailtoolsright">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <IconButton>
              <KeyboardIcon />
            </IconButton>
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
        <div className="mailbody">
          <div className="mailbodyheader">
            <div className="mailbodyheaderleft">
              <p>{selectedMail?.subject}</p>
              <IconButton>
                <LabelImportantOutlinedIcon />
              </IconButton>
            </div>
            <div className="mailbodyright">
              <IconButton>
                <LocalPrintshopIcon />
              </IconButton>
              <IconButton>
                <IosShareIcon />
              </IconButton>
            </div>
          </div>
          <div className="maildetails">
            <div className='maildetailsright'>
              <Avatar className='avatarmail' />
              <div className='maildetailsoption'>
                <h3>{selectedMail?.title}</h3>
                <p> member@linkedin.com</p>
              </div>
            </div>
            <div className='maildetailsleft'>
              <p style={{coloe:'gray'}}>{selectedMail?.time}</p>
              <StarBorderIcon className='mailoptionicon' />
              <UndoOutlinedIcon className='mailoptionicon'/>
              <MoreVertOutlinedIcon className='mailoptionicon' />
            </div>
          </div>
          <div className='message'>
            <p className='messagedetails'>{selectedMail?.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mail