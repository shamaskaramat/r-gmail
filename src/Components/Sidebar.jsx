import './Sidebar.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SendIcon from '@mui/icons-material/Send';
import LabelIcon from '@mui/icons-material/Label';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import {  useDispatch } from 'react-redux'
import {openSendMessage} from '../features/mailSlice'
const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="sidebar">
                <Button startIcon={<AddIcon />}
                    className='Compose'
                    onClick={() => dispatch((openSendMessage()))}
                >Compose</Button>
                <SidebarOptions Icon={InboxIcon} title="Inbox" number={154} selected={true} />
                <SidebarOptions Icon={StarIcon} title="Starred" number={54} />
                <SidebarOptions Icon={AccessTimeFilledIcon} title="Snoozed" number={54} />
                <SidebarOptions Icon={SendIcon} title="Send" number={54} />
                <SidebarOptions Icon={LabelIcon} title="[map]/Trash" number={5} />
                <SidebarOptions Icon={ExpandMoreIcon} title="More" number={21} />
                <div className="sidebarFooter">
                    <div className="footerIcons">
                        <IconButton>
                            <PersonIcon />
                        </IconButton>
                        <IconButton>
                            <DuoIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar