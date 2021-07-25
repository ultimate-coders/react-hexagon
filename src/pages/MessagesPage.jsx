import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./MessagesPage.scss";
import { If, Then, Else } from "react-if";
import Faker from "faker";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
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
import { PROFILES_WITH_MESSAGES_URL, ME_URL,MESSAGES_URL } from "../urls";
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
  const [results, reload, loading, error] = useAjax();
  let token = JSON.parse(localStorage.getItem("tokenName")).access_token;
  console.log(
    "🚀 ~ file: MessagesPage.jsx ~ line 51 ~ Messages ~ token",
    token
  );

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
  const [index, setIndex] = useState(0);
  const [conversations, setConversations] = useState(conversation);
  const [user, setUser] = useState({});
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const classes = useStyles();
  const classes2 = useStyles2();
  const sent = "🗸";
  const seen = "🗸🗸";

  const handleChange = (event) => {
    console.log(event.target.className);
    let x = event.target.className.split(" ");
    setIndex(x[1] - 1);
  };

  const newMessage = (event) => {
    console.log(event);
    conversations[index].info.push({ sender: "me", message: event });
    let list = conversations.filter((val, idx) => idx !== index);
    console.log(
      "🚀 ~ file: MessagesPage.jsx ~ line 120 ~ newMessage ~ list",
      list
    );
    list.unshift(conversations[index]);

    setConversations(list);
    setIndex(0);
  };

  useEffect(() => {
    reload(ME_URL, "get", null, token);

    // if (results){
    //   if(results.data.profile_picture){
    //     setUser({
    //       id: results.data.id,
    //       name: results.data.first_name,
    //       picture: results.data.profile_picture.link,
    //     });
    //   }
    // }
    // if(user){
    //   reload(PROFILES_WITH_MESSAGES_URL, 'get', {receiver_id: user.id}, token)
    //   console.log(results)
    // }
  }, []);

  useEffect(() => {
    if (results) {
      console.log("🚀 ~ file: MessagesPage.jsx ~ line 156 ~ useEffect ~ results", results)
      if (results.data.profile_picture) {
        setUser({
          id: results.data.id,
          name: results.data.first_name,
          picture: results.data.profile_picture.link,
        });
      } 
      
      // console.log("🚀 ~ file: MessagesPage.jsx ~ line 164 ~ useEffect ~ !chat === null", chat )
      if (chat === null) {
        
        reload(
          PROFILES_WITH_MESSAGES_URL,
          "get",
          null,
          token
          );
          // console.log("🚀 ~ file: MessagesPage.jsx ~ line 155 ~ useEffect ~ results", results.data)
          if(results.data.results) setChat(results.data.results)
      
      } 

        console.log("🚀 ~ file: MessagesPage.jsx ~ line 191 ~ useEffect ~ messages === null && chat", messages === null && chat !== null, messages, chat)
        if (messages === null && chat ) {
          console.log("🚀 ~ file: MessagesPage.jsx ~ line 201 ~ useEffect ~ chat[index].id", chat[index].id)
          
          reload(
            `${MESSAGES_URL}/${chat[index].id}`,
            "get",
            null,
            token
            );
            console.log("🚀 ~ file: MessagesPage.jsx ~ line 15 ~ useEffect ~ results", results.data)
            
            if(results.data.results !== chat) setMessages(results.data.results.reverse());
            console.log("🚀 ~ file: MessagesPage.jsx ~ line 190 ~ useEffect ~ messages", messages)
          }
      
      // if (chat === null) {
        
      //   reload(
      //     PROFILES_WITH_MESSAGES_URL,
      //     "get",
      //     { receiver_id: user.id },
      //     token
      //     );
      //     // console.log("🚀 ~ file: MessagesPage.jsx ~ line 155 ~ useEffect ~ results", results.data)
      //     if(results.data.results) setChat(results.data.results)
      
      // }
    }

    // if(user){
    //   reload(PROFILES_WITH_MESSAGES_URL, 'get', {receiver_id: user.id}, token)
    //   console.log(results)
    // } else {
    //   setUser({
    //     id: results.data.id,
    //     name: results.data.first_name,
    //     picture: results.data.profile_picture.link,
    //   });
    // }
    // (async ()=>{
    //   await reload(PROFILES_WITH_MESSAGES_URL, 'get', {receiver_id: user.id}, token)
    //   console.log("🚀 ~ file: MessagesPage.jsx ~ line 51 ~ Messages ~ results", results)
    // })()
  }, [results,chat]);
 
  // useEffect(()=>{
  //   reload(PROFILES_WITH_MESSAGES_URL, 'get', {receiver_id: user.id}, token)

  // }, [user])

  // console.log(results.data)

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
                    {chat? chat.map((val, idx) => (
                      <Conversation
                        className={idx + 1}
                        name={val.first_name}
                        lastSenderName={val.first_name}
                        info={val.last_message.message}
                      >
                        <Avatar
                          src={val.profile_picture.link}
                          name={val.first_name}
                          status="available"
                          size="md"  
                        />
                      </Conversation>
                    )): null}
                    {/* {conversations.map((val, idx) => (
                      <Conversation
                        className={idx + 1}
                        name={val.name}
                        lastSenderName={val.info[val.info.length - 1].sender}
                        info={val.info[val.info.length - 1].message}
                      >
                        <Avatar
                          src={val.src}
                          name={val.name}
                          status="available"
                          size="md"
                        />
                      </Conversation>
                    ))} */}
                  </ConversationList>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <div className={classes2.root}>
              <ConversationHeader>
                <Avatar
                  src={chat? chat[index].profile_picture.link : null}
                  name={conversations[index].first_name}
                  status="available"
                />

                <ConversationHeader.Content
                  userName={chat? chat[index].first_name: null}
                ></ConversationHeader.Content>
              </ConversationHeader>
            </div>
            <div style={{ position: "relative", height: "500px" }}>
              <MainContainer>
                <ChatContainer>
                  <MessageList>
                    {messages? messages.map((val) => (
                      
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
                            {/* <Message.Footer sentTime={Faker.date.recent().toString().split(" ")[4].split(":").splice(0, 2).join(":")} /> */}
                            <Message.CustomContent>
                              {val.message}
                              <br />
                              <span
                                style={{
                                  float: "right",
                                }}
                              >
                                {Faker.date
                                  .recent()
                                  .toString()
                                  .split(" ")[4]
                                  .split(":")
                                  .splice(0, 2)
                                  .join(":")}
                              </span>
                            </Message.CustomContent>
                          </Message>
                          {/* <Message
                            model={{
          console.log("🚀 ~ file: MessagesPage.jsx ~ line 322 ~ useEffect ~ results", results)
                              message: "how are you   ", 
                              sentTime: "just now",
                              sender: "Joe",
                            }}
                          >
                            <Message.Footer sentTime="just now" />
                          </Message> */}
                        </Else>
                      </If>
                    )): null}

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
