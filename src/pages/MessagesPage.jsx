import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./MessagesPage.scss";
import { If, Then, Else } from "react-if";
import { Link } from "react-router-dom";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { getToken } from "../helpers";
import { useDispatch } from "react-redux";
import { activeChatAction, activeChatUserAction } from "../store/chat/actions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  Status,
  ConversationList,
  Conversation,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import useAjax from "../hooks/useAjax";
import {
  PROFILES_WITH_MESSAGES_URL,
  ME_URL,
  MESSAGES_URL,
  PROFILE_URL,
} from "../urls";
import messageHook from "../hooks/messagesHook";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text,
    background: "white",
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const useStyles3 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Messages = () => {
  const dispatch = useDispatch();
  const state = useSelector(mapStateToProps);
  const [results, reload, loading, error] = useAjax();
  let [resultsMsg, reloadMsg, loadingMsg, errorMsg] = messageHook();
  getToken().then((results) => setToken(results));

  const [token, setToken] = useState(null);
  const [index, setIndex] = useState(0);
  const [send, setSend] = useState(false);
  // const [conversations, setConversations] = useState();
  const [user, setUser] = useState({});
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([{}]);
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();

  const sent = "🗸";
  const seen = "🗸🗸";

  const handleChange = (event) => {
    let x = event.target.className.split(" ");
    if (Number(x[1]) >= 0) {
      setIndex(x[1] - 1);
      getMessages(x[1] - 1);
    }
  };

  const newMessage = (event) => {
    // setSend(true);
    console.log(event);

    (async () => {
      await reload(
        MESSAGES_URL,
        "post",
        { receiver_id: chat[index].id, message: event },
        token
      );
    })();
    if (messages) {
      // setMessages([...messages,{ sender_id: user.id, message: event }]);
      messages.push({ sender_id: user.id, message: event });
      let list = messages.filter((val, idx) => idx !== index);
      list.unshift(messages[index]);
      setMessages(list);
    } else setMessages([{ sender_id: user.id, message: event }]);

    let newList = chat;
    let x = newList.splice(index, 1);
    x[0].last_message = { sender_id: user.id, message: event };
    newList.unshift(x[0]);
    setChat(newList);
    setIndex(0);
  };

  useEffect(() => {
    console.log(state);
    setUser({
      id: state.user.id,
      name: state.user.first_name,
      picture: state.user.profile_picture.link,
      last_login: state.user.user.last_login,
    });
  }, []);

  useEffect(() => {
    if (chat === null) {
      reload(PROFILES_WITH_MESSAGES_URL, "get", null, token);
      if (results && results.data.results.length)
        setChat(results.data.results.reverse());
    }
    console.log(
      "🚀 ~ file: MessagesPage.jsx ~ line 172 ~ useEffect ~ results",
      results
    );
    if (
      chat &&
      results &&
      results.data.first_name &&
      results.data.id !== user.id &&
      !chat.find((item) => item.id === results.data.id)
    ) {
      let list = chat;
      list.unshift(results.data);
      setChat(list);
    }
  }, [token, results]);

  let getMessages = (x) => {
    
    (async () => {
      await reloadMsg(`${MESSAGES_URL}/${chat[x].id}`, "get", null, token);
      dispatch(activeChatUserAction(chat[x]));
    })();
    console.log("🚀 ~ file: MessagesPage.jsx ~ line 204 ~ Messages ~ chat", chat)
  };

  useEffect(() => {
    if (chat && chat.length > 0) getMessages(index);
  }, [chat]);

  useEffect(() => {
    console.log("resultsMsg : ", resultsMsg);
    setMessages(resultsMsg);
  }, [resultsMsg]);

  let handleSeen = () => {
    reload(
      `${MESSAGES_URL}/${chat[index].last_message.id}`,
      "put",
      null,
      token
    );
    let list = chat;
    list[index].last_message.seen = true;
    console.log(
      "🚀 ~ file: MessagesPage.jsx ~ line 196 ~ handleSeen ~ list",
      list
    );
    setChat(list);
  };

  let searchHandler = (e) => {
    // console.log("pppppppp", e.id);
    getToken().then((results) => setToken(results)).then(()=>{

      let list = chat || [];
      let newChat = {
        caption: e.caption,
        first_name: e.first_name,
        id: e.id,
        last_message: null,
        last_name: e.last_name,
        profile_picture: e.profile_picture,
        user: e.user,
      };
      list.unshift(newChat);
      setChat(list);
  
      (async () => {
        await reloadMsg(
          `${MESSAGES_URL}/${list[index].id}`,
          "post",
          { receiver_id: e.id, message: "" },
          token
        );
        dispatch(activeChatUserAction(list[index]));})();
    })

    

    // if (e.target.value !== '') {
    //   reload(`${PROFILE_URL}/${e.id}`, 'get', null, token);
    // }
  };

  useEffect(() => {
    if (
      chat &&
      state.activeChat &&
      state.activeChat.sender_id === chat[index].id
    ) {
      setMessages((prev) => [
        ...prev,
        { ...state.activeChat, created_at: new Date() },
      ]);
      dispatch(activeChatAction(null));
    } else if (state.activeChat && state.activeChat.id) {
      searchHandler(state.activeChat);
    }
    // if (!chat || (chat && results.data.first_name && results.data.id !== user.id && !chat.find(item => item.id === results.data.id ))) {
    //   let list = chat;
    //   list.unshift(results.data);
    //   setChat(list);
    // }
  }, [state.activeChat]);

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <div id="people">
                <Link to={user ? `profile/${user.name}` : null}>
                  <Conversation name={user.name}>
                    <Avatar
                      src={user.picture}
                      status={
                        (Date.now() - new Date(user.last_login).getTime()) /
                          1000 <=
                        120
                          ? "available"
                          : "away"
                      }
                      size="lg"
                    />
                  </Conversation>
                </Link>
                {/* <hr />
                <div className={classes3.root}>
                  <AppBar
                    style={{ backgroundColor: '#529471' }}
                    position='static'
                  >
                    <Toolbar>
                      <Typography
                        className={classes3.title}
                        variant='h6'
                        noWrap
                      >
                        Add new conversation
                      </Typography>
                      <div className={classes3.search}>
                        <InputBase
                          placeholder='Search…'
                          classes3={{
                            root: classes3.inputRoot,
                            input: classes3.inputInput,
                          }}
                          inputProps={{ 'aria-label': 'search' }}
                          onChange={searchHandler}
                        />
                      </div>
                    </Toolbar>
                  </AppBar>
                </div> */}
                <hr />
                <div
                  style={{
                    height: "80%",
                  }}
                  onClick={(e) => handleChange(e)}
                >
                  <ConversationList>
                    {chat
                      ? chat.map((val, idx) => (
                          <Conversation
                            className={idx + 1}
                            name={val.first_name}
                            lastSenderName={
                              val.last_message &&
                              val.last_message.sender_id === user.id
                                ? "me"
                                : val.first_name
                            }
                            info={
                              val.last_message ? val.last_message.message : null
                            }
                            // unreadCnt={
                            //   val.last_message &&
                            //   val.last_message.seen === false &&
                            //   val.last_message.sender_id !== user.id
                            //     ? 1
                            //     : 0
                            // }
                          >
                            <Avatar
                              src={val.profile_picture.link}
                              name={val.first_name}
                              status={
                                (Date.now() -
                                  new Date(val.user.last_login).getTime()) /
                                  1000 <=
                                120
                                  ? "available"
                                  : "away"
                              }
                              size="md"
                            />
                          </Conversation>
                        ))
                      : null}
                  </ConversationList>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <div className={classes2.root}>
              <Link
                to={
                  chat && chat.length
                    ? `profile/${chat[index].first_name}`
                    : "/"
                }
              >
                <ConversationHeader>
                  <Avatar id="MessagesHexagon"
                    src={
                      chat && chat.length
                        ? chat[index].profile_picture.link

                        : "https://g.top4top.io/p_2035ty8v01.png"

                    }
                    name={null}
                    status={
                      chat &&
                      chat.length &&
                      (Date.now() -
                        new Date(chat[index].user.last_login).getTime()) /
                        1000 <=
                        120
                        ? "available"
                        : "away"
                    }
                  />

                  <ConversationHeader.Content
                    userName={

                      chat && chat.length ? chat[index].first_name : "Hexagon"

                    }
                  ></ConversationHeader.Content>
                </ConversationHeader>
              </Link>
            </div>
            <div
              style={{ position: "relative", height: "500px" }}
              // onClick={() => handleSeen()}
            >
              <MainContainer>
                <ChatContainer>
                  <MessageList loading={loadingMsg}>
                    {/* {resultsMsg = resultsMsg.data? resultsMsg.data.results.reverse() : null } */}
                    {messages
                      ? messages.map((val) => (
                          <If condition={val.sender_id === user.id}>
                            <Then>
                              <Message
                                model={{
                                  direction: "outgoing",
                                  position: "normal",
                                }}
                              >
                                <Message.CustomContent>
                                  {val.message}
                                  <br />
                                  <span
                                    style={{
                                      float: "right",
                                    }}
                                  >
                                    {sent}
                                  </span>
                                </Message.CustomContent>
                              </Message>
                            </Then>
                            <Else>
                              <Message
                                model={{
                                  message: val.message,
                                  sentTime: "just now",
                                  sender: "Joe",
                                }}
                              >
                                <Message.CustomContent>
                                  {val.message}
                                  <br />
                                  <span
                                    style={{
                                      float: "right",
                                    }}
                                  >
                                    {moment(val.created_at).format("hh:mm")}
                                  </span>
                                </Message.CustomContent>
                              </Message>
                              {/* <Message
                            model={{
          
                              message: "how are you   ", 
                              sentTime: "just now",
                              sender: "Joe",
                            }}
                          >
                            <Message.Footer sentTime="just now" />
                          </Message> */}
                            </Else>
                          </If>
                        ))
                      : null}

                    {/* <TypingIndicator />\ */}

                  </MessageList>

                  {/* <If condition={chat}>
                    <Then> */}
                  <MessageInput
                    placeholder="Type message here"
                    attachButton={false}
                    onSend={(e) => newMessage(e.replace("<br>", ""))}
                  />
                  {/* </Then>
                  </If> */}
                </ChatContainer>
              </MainContainer>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Messages;
const mapStateToProps = (state) => ({
  user: state.userDetails.user,
  activeChat: state.chat.activeChat,
});

// export default connect(mapStateToProps)(Messages);
