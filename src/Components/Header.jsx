import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch  } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../Firebase';
const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const signOut = ()=>{
       auth.signOut().then(()=>{
        dispatch(logout)
       })
    }
    return (
        <>
            <div className="header">
                <div className="headerleft">
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Link to='/'>
                    <img src="logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="headermiddle">
                    <SearchIcon className='search' />
                    <input type="text" placeholder='Search mail' />
                    <ArrowDropDownIcon className='dropdownarrow' />
                </div>
                <div className="headerright">
                    <IconButton>
                        <HelpOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <Avatar src={user?.photoUrl} onClick={signOut} style={{cursor:'pointer'}} />
                </div>
            </div>
        </>
    )
}

export default Header