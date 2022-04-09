import React, { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import {useNavigate} from "react-router-dom"
import { createSession, validation } from "../../redux/actions/session.action";
import { useSelector, useDispatch } from "react-redux";
export default function AddSession() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const theSessionState = useSelector((state) => state.sessionReducer);
  const [value, setValue] = useState(null);
  const [isCostom, setCostom] = useState(false);
  const [topic, setTopic] = useState([]);
  const [subtopic, setSubTopic] = useState([]);
  const [theSession, setSession] = useState({
    sessionName: "",
    subject: "",
    topic: "",
    subtopic: "",
    date: "",
    fromtime: "",
    totime:"",
    isCostom: false,
  });
  const theSubjectState = useSelector((state) => state.subjectReducer);
  const manageTopic = (e) => {
    const { name, value } = e.target;
    setSession({ ...theSession, [name]: value });
    const { topics } = theSubjectState.subjects.find((t) => {
      if (t._id == value) {
        return t;
      }
    });
    setTopic(topics);
  };
  const manageSubTopic = (e) => {
    const { name, value } = e.target;
    setSession({ ...theSession, [name]: value });
    const { SubTopics } = topic.find((st) => {
      if (st.Name == value) {
        return st;
      }
    });
    setSubTopic(SubTopics);
  };
  const sendData = async() => {
    const isData =await dispatch(createSession(theSession));
    if(isData)
    navigate("/teacher/dashboard")
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "2%",
      }}
    >
      <div
        style={{
          width: "93%",
          minHeight: "78%",
          backgroundColor: "",
          boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
          padding: "4%",
        }}
      >
        <Grid container spacing={4}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              width: "100%",
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => {
                      setSession({ ...theSession, isCostom: !isCostom });
                      setCostom(!isCostom);
                    }}
                  />
                }
                label="Costom"
              />
            </FormGroup>
          </div>
          <Grid item sm={12} md={12} xl={12}>
            <Typography
              textAlign={"center"}
              component="h3"
              variant="h3"
              style={{
                textAlign: "center",
                wordSpacing: "7px",
                textTransform: "uppercase",
                fontSize: "28px",
                fontWeight: "bolder",
                color: "#060606",
              }}
            >
              Create Session
            </Typography>
          </Grid>

          <Grid item sm={4} md={4} xl={4} marginTop={5}>
            <FormControl fullWidth>
              <InputLabel>Select Subject</InputLabel>
              <Select
                label="Select Subject"
                name="subject"
                fullWidth
                onChange={(e) => {
                  setTopic([]);
                  manageTopic(e);
                  setSubTopic([]);
                }}
              >
                {theSubjectState.subjects.map((s, k) => (
                  <MenuItem key={k} value={s._id}>
                    {s.Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div style={{color:"red"}}>{theSessionState.err.subject}</div>
          </Grid>
          {isCostom ? (
            <Grid item sm={8} md={8} xl={8} marginTop={5}>
              <TextField
                variant="standard"
                label="Session Name"
                name="sessionName"
                fullWidth
                required
                value={theSession.sessionName}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setSession({ ...theSession, [name]: value });
                }}
              ></TextField>
              <div style={{color:"red"}}>{theSessionState.err.sessionName}</div>
            </Grid>
          ) : (
            <>
              <Grid item sm={4} md={4} xl={4} marginTop={5}>
                <FormControl fullWidth>
                  <InputLabel>Select Topic</InputLabel>
                  <Select
                    label="Select Topic"
                    name="topic"
                    fullWidth
                    onChange={manageSubTopic}
                  >
                    {topic.map((t, k) => (
                      <MenuItem key={k} value={t.Name}>
                        {t.Name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div style={{color:"red"}}>{theSessionState.err.topic}</div>
              </Grid>
              <Grid item sm={4} md={4} xl={4} marginTop={5}>
                <FormControl fullWidth>
                  <InputLabel>Select subtopic</InputLabel>
                  <Select
                    label="Select subtopic"
                    name="subtopic"
                    fullWidth
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setSession({ ...theSession, [name]: value });
                    }}
                  >
                    {subtopic.map((st, k) => (
                      <MenuItem key={k} value={st}>
                        {st}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div style={{color:"red"}}>{theSessionState.err.subtopic}</div>
              </Grid>
            </>
          )}
          <Grid item sm={6} md={6} xl={6} marginTop={5}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                size={"medium"}
                name={"date"}
                type={"date"}
                variant={"standard"}
                label={"date"}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setSession({ ...theSession, [name]: value });
                }}
              />
            </FormControl>
            <div style={{color:"red"}}>{theSessionState.err.date}</div>
          </Grid>
          <Grid item sm={3} md={3} xl={3} marginTop={5}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                size={"medium"}
                name={"fromtime"}
                type={"time"}
                variant={"standard"}
                label={"From"}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setSession({ ...theSession, [name]: value });
                }}
              />
            </FormControl>
            <div style={{color:"red"}}>{theSessionState.err.time}</div>
          </Grid>
          <Grid item sm={3} md={3} xl={3} marginTop={5}>
            <FormControl fullWidth>
              <TextField
                fullWidth
                size={"medium"}
                name={"totime"}
                type={"time"}
                variant={"standard"}
                label={"To"}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setSession({ ...theSession, [name]: value });
                }}
              />
            </FormControl>
            <div style={{color:"red"}}>{theSessionState.err.totime}</div>
          </Grid>
          <Grid item sm={6} md={6} xl={6} marginTop={5}>
            <Button variant="contained" color={"error"} fullWidth>
              Clear
            </Button>
          </Grid>
          <Grid item sm={6} md={6} xl={6} marginTop={5}>
            <Button
              variant="contained"
              color={"success"}
              fullWidth
              onClick={sendData}
            >
              create session
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
