import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./MessagesPage.scss";
import { If, Then, Else } from "react-if";
import Faker from "faker";
import { Link } from "react-router-dom";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { getToken } from "../helpers";
import { useDispatch } from "react-redux";
import { activeChatUserAction } from "../store/chat/actions";
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
import { PROFILES_WITH_MESSAGES_URL, ME_URL, MESSAGES_URL } from "../urls";
import messageHook from "../hooks/messagesHook";
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

const Messages = () => {
  const dispatch = useDispatch();
  const state = useSelector(mapStateToProps);
  const [results, reload, loading, error] = useAjax();
  let [resultsMsg, reloadMsg, loadingMsg, errorMsg] = messageHook();
  getToken().then((results) => setToken(results));

  let conversation = [
    {
      name: "Lilly",
      lastSenderName: "Lilly",
      info: [{ message: Faker.lorem.sentence(), sender: "Lilly" }],
      src: Faker.image.avatar(),
    },
    {
      name: "Joe",
      lastSenderName: "Joe",
      info: [{ message: Faker.lorem.sentence(), sender: "Joe" }],
      src: Faker.image.avatar(),
    },
    {
      name: "Emily",
      lastSenderName: "Emily",
      info: [{ message: Faker.lorem.sentence(), sender: "Emily" }],
      src: Faker.image.avatar(),
    },
    {
      name: "Kai",
      lastSenderName: "Kai",
      info: [{ message: Faker.lorem.sentence(), sender: "Kai" }],
      src: Faker.image.avatar(),
    },
    {
      name: "Akane",
      lastSenderName: "Akane",
      info: [{ message: Faker.lorem.sentence(), sender: "Akane" }],
      src: Faker.image.avatar(),
    },
    {
      name: "Eliot",
      lastSenderName: "Eliot",
      info: [{ message: Faker.lorem.sentence(), sendnpmer: "Eliot" }],
      src: Faker.image.avatar(),
    },
    {
      name: "Zoe",
      lastSenderName: "Zoe",
      info: [{ message: Faker.lorem.sentence(), sender: "Zoe" }],
      src: Faker.image.avatar(),
    },
    {
      name: "Patrik",
      lastSenderName: "Patrik",
      info: [{ message: Faker.lorem.sentence(), sender: "Patrik" }],
      src: Faker.image.avatar(),
    },
  ];
  const [token, setToken] = useState(null);
  const [index, setIndex] = useState(0);
  const [send, setSend] = useState(false);
  const [conversations, setConversations] = useState(conversation);
  const [user, setUser] = useState({});
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const classes = useStyles();
  const classes2 = useStyles2();
  const sent = "🗸";
  const seen = "🗸🗸";

  const handleChange = (event) => {
    console.log(
      "🚀 ~ file: MessagesPage.jsx ~ line 162 ~ useEffect ~ chat",
      messages
    );
    console.log(event.target.className);
    let x = event.target.className.split(" ");

    setIndex(x[1] - 1);
    getMessages(x[1] - 1);
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
    messages.push({ sender_id: user.id, message: event });
    let list = messages.filter((val, idx) => idx !== index);
    list.unshift(messages[index]);
    setMessages(list);

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
    });
  }, []);
  
  useEffect(() => {

    if(chat === null){
      
      reload(PROFILES_WITH_MESSAGES_URL, "get", null, token);
      if (results) setChat(results.data.results.reverse());
    }
    
    

  }, [token, results]);
  
  let getMessages = (x) => {

    (async () => {
      await reloadMsg(`${MESSAGES_URL}/${chat[x].id}`, "get", null, token);
    })();
    
    dispatch(activeChatUserAction(chat[x].id))

  };
  
  useEffect(() => {
    console.log("🚀 ~ file: MessagesPage.jsx ~ line 204 ~ useEffect ~ chat", chat)
    
  }, [chat]);
  useEffect(() => {

    setMessages(resultsMsg)

  },[resultsMsg])


  let handleSeen = () => {
    console.log('hello')
    reload(`${MESSAGES_URL}/${chat[index].last_message.id}`, "put", null, token);
    let list = chat;
    list[index].last_message.seen = true;
    console.log("🚀 ~ file: MessagesPage.jsx ~ line 196 ~ handleSeen ~ list", list)
    setChat(list)
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <div id="people">
                <Conversation name={user.name}>
                  <Avatar src={user.picture} status="available" size="lg" />
                </Conversation>
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
                              val.last_message.sender_id === user.id
                                ? "me"
                                : val.first_name
                            }
                            info={val.last_message.message}
                            unreadCnt={val.last_message.seen === false && val.last_message.sender_id !== user.id ? 1: 0}
                          >
                            <Avatar
                              src={val.profile_picture.link}
                              name={val.first_name}
                              status="available"
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

                <Link to={chat && chat.length ?`profile/${chat[index].first_name}`: null}>
              <ConversationHeader>
                <Avatar
                  src={chat && chat.length ? chat[index].profile_picture.link : null}
                  name={null}
                  status="available"
                />

                <ConversationHeader.Content
                  userName={chat && chat.length ? chat[index].first_name : null}
                ></ConversationHeader.Content>
                
              </ConversationHeader>
                </Link>

            </div>
            <div style={{ position: "relative", height: "500px" }} onClick={()=>handleSeen()}>
              <MainContainer>
                <ChatContainer>
                  <MessageList>
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

                                    {val.created_at? val.created_at.split('T')[1].split(':').splice(0,2).join(':'): null}

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
                 
                  <MessageInput
                    placeholder="Type message here"
                    attachButton={false}
                    onSend={(e) => newMessage(e)}
                  />

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
});

// export default connect(mapStateToProps)(Messages);
