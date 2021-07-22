import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./MessagesPage.scss";
import { ChatList } from "react-chat-elements";
import superagent from 'superagent';
import "react-chat-elements/dist/main.css";
import { If, Then, Else } from "react-if";
import Faker from "faker";
// import { AppBar, Typography,Toolbar, Avatar  } from "@material-ui/core";
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
let x = Faker.date.recent().toString();
console.log("date", x.split(" ")[4].split(":").splice(0, 2).join(":"));
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
  const [user, setUser] = useState({})
  const classes = useStyles();
  const classes2 = useStyles2();
  const sent = "🗸";
  const seen = "🗸🗸";

  const handleChange = (event) => {
    console.log(event.target.className);
    let x = event.target.className.split(" ");
    console.log(
      "🚀 ~ file: MessagesPage.jsx ~ line 57 ~ handleChange ~ x",
      x[1]
    );
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
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4YmY0MTQ1MC1hNDU3LTRlMzktYWRiZS02YTVjY2Q5YTcwNDgiLCJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiaWF0IjoxNjI2OTkwNTcwLCJleHAiOjE2MjY5OTY1NzB9.GwpmXubDWAKyvGz5T_r3P9o-5f-F6EWSWIHgr4hmo0Y'

  useEffect(()=>{
   superagent.get('http://localhost:5000/api/v1/me-profile').set('Authorization', `Bearer ${token}`)
   .then(results=>{
   console.log("🚀 ~ file: MessagesPage.jsx ~ line 139 ~ useEffect ~ results", results)
     setUser({id: results.body.id, name: results.body.first_name, picture: results.body.profile_picture.link})
   })
  },[])

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <div id="people">
                <Conversation name={user.name}>
                  <Avatar
                    src={user.picture}
                    status="available"
                    size="lg"
                  />
                </Conversation>
                <hr />
                <div
                  style={{
                    height: "80%",
                  }}
                  onClick={(e) => handleChange(e)}
                >
                  <ConversationList>
                    {conversations.map((val, idx) => (
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
                    ))}
                  </ConversationList>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <div className={classes2.root}>
              <ConversationHeader>
                <Avatar
                  src={conversations[index].src}
                  name={conversations[index].name}
                  status="available"
                />

                <ConversationHeader.Content
                  userName={conversations[index].name}
                ></ConversationHeader.Content>
              </ConversationHeader>
            </div>
            <div style={{ position: "relative", height: "500px" }}>
              <MainContainer>
                <ChatContainer>
                  <MessageList>
                    {conversations[index].info.map((val) => (
                      <If condition={val.sender === "me"}>
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
                            <Message.Footer sentTime={Faker.date.recent().toString().split(" ")[4].split(":").splice(0, 2).join(":")} />
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
                    ))}

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
