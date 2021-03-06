
import React, { useState, useEffect } from 'react';
import './header.scss';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const Header = () => {

    const [notifications, setNotifications] = useState(false);

    const [userOptions, setUserOptions] = useState(false);
    const [notificationsCount, setNotificationsCount] = useState(5);
    const [messagesCount, setMessagesCount] = useState(3);


    function showNotifications(e) {

        let notificationsList = document.getElementById('NotificationsList');

        let userOptionsToggle = document.getElementById('userOptionsToggle');


        if (notifications) {
            notificationsList.style.display = "none"; 
            setNotifications(false);
        }
        else {
            notificationsList.style.display = "flex"; 
            setNotifications(true);
            if(userOptions) {
            userOptionsToggle.style.display = "none"; 
            setUserOptions(false);
            }
        }
    }

    function toggleUserOptions(e) {

        let notificationsList = document.getElementById('NotificationsList');
        let userOptionsToggle = document.getElementById('userOptionsToggle');
        
        if (userOptions) {
            userOptionsToggle.style.display = "none"; 
            setUserOptions(false);

        }
        else {
            userOptionsToggle.style.display = "flex"; 
            setUserOptions(true);
            if(notifications) {
                notificationsList.style.display = "none"; 
                setNotifications(false);
                }
        }
    }

    return (
        <>

            <header className="container-m">
                <div className="d-flex flex-sm-row">
                    <img id="logo" src={"https://i.ibb.co/2Ff9bFV/Hexa-01.png"} alt={"Hexagon"} ></img>
                    {/* <h1 id="title">HEXAGON</h1> */}
                </div>
                <div id="search-bar" className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search Hexagon" aria-label="Search"
                        aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary">search</button>
                </div>
                <div id="iconsContainer">
                    <IconButton id="notifications" aria-label="cart">
                        <StyledBadge badgeContent={messagesCount} color="secondary">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                            </svg>
                        </StyledBadge>
                    </IconButton>

                    <IconButton id="notifications" aria-label="cart" type="submit" onClick={showNotifications}>
                        <StyledBadge badgeContent={notificationsCount} color="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                        </StyledBadge>
                    </IconButton>

                    <Button id="userHeaderContainer" onClick={toggleUserOptions}>
                        <img id="userHeaderImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZMTLWh4KIE7ogS6hfTgeKuTVTPxlM1qe6Q&amp;usqp=CAU" className="MuiAvatar-img" alt="User-Header"></img>
                    </Button>
                </div>
                <div id="NotificationsList">
                    <Button>
                        <p>JhonDoe liked your post. </p>
                    </Button>
                    <Button>
                        <p>JhonDoe liked your post. </p>
                    </Button>
                    <Button>
                        <p>JhonDoe liked your post. </p>
                    </Button>
                    <Button>
                        <p>JhonDoe commented on your post.</p>
                    </Button>
                    <Button>
                        <p>JhonDoe commented on your post.</p>
                    </Button>
                    <Button>
                        <p>JhonDoe commented on your post.</p>
                    </Button>
                    <Button>
                        <p>JhonDoe commented on your post.</p>
                    </Button>
                    <Button>
                        <p>JhonDoe commented on your post.</p>
                    </Button>
                </div>
                <div id="userOptionsToggle">
                    <Button>
                        <p>Change Password</p>
                    </Button>
                    <Button>
                        <p> Sign out</p>
                    </Button>
                </div>
            </header>
        </>
    )
}

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

export default Header;