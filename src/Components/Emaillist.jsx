import { IconButton } from '@mui/material'
import './Emaillist.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import Emailrow from './Emailrow';
import { useEffect,useState } from 'react';
import {db} from '../Firebase'
const Emaillist = () => {
    const [email ,setEmail]=useState([])
    useEffect(()=>{
        db.collection("emails").orderBy("timestamp","desc").onSnapshot((snapshot)=>
        setEmail(snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data(),
        })))
        )
    },[])
    return (
        <>
            <div className="emaillist">
                <div className="emaillistsettings">
                    <div className="emailsettingleft">
                        <IconButton>
                            <CheckBoxOutlineBlankIcon />
                        </IconButton>
                        <IconButton>
                            <ArrowDropDownIcon />
                        </IconButton>
                        <IconButton>
                            <RedoIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                    <div className="emailsettingright">
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
                <div className="emaillistsection">
                    <Section Icon={InboxIcon} title='Primary' color="red" selected/>
                    <Section Icon={GroupIcon} title='Social' color="blue" />
                    <Section Icon={LocalOfferIcon} title='Promotions' color="green"/>
                    <Section Icon={InfoIcon} title='Updates' color="orange"/>
                    <Section Icon={ForumIcon} title='Forums' color="purple"/>
                </div>
                <div className="emaillist">
                {email.map(({id,data:{to,subject,message,timestamp}})=>
                    <Emailrow
                       id={id}
                       key={id}
                       title={to}
                       subject={subject}
                       description={message}
                       time={new Date(timestamp?.seconds*1000).toUTCString()}
                    />
                    )}
                   
                </div>
            </div>
        </>
    )
}

export default Emaillist