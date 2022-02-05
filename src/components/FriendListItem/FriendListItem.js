import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem ({ avatar, name, isOnline}) { 
    return (
        <div className={s.item}>
        { isOnline ? (<span className={s.online}></span>):(<span className={s.offline}></span>)}
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{ name}</p>
        </div>   
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    
}

export default FriendListItem