import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  CircularProgress
} from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { addTopic } from "../../redux/actions/admin.action";
const count = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fiveth",
  "sixth",
  "Seventh",
  "Eighth",
  "Nineth",
  "Tenth",
];
export default function AddTopic() {
  const [subtopic, setSubtopic] = useState([]);
  const [topic, setTopic] = useState({
    Name: "",
    subject: "",
    subTopic0: "",
    subTopic1: "",
    subTopic2: "",
    subTopic3: "",
    subTopic4: "",
    subTopic5: "",
    subTopic6: "",
    subTopic9: "",
    subTopic10: "",
    subTopic11: "",
  });
  // function for clear subTopic
  const clearSubTopic = () => {
    setTopic({
      ...topic,
      subTopic0: "",
      subTopic1: "",
      subTopic2: "",
      subTopic3: "",
      subTopic4: "",
      subTopic5: "",
      subTopic6: "",
      subTopic9: "",
      subTopic10: "",
      subTopic11: "",
    });
  };
const  dispatch =  useDispatch();
const theState = useSelector((state) => state.adminReducer);

  const manageTopic = (e) => {
    const { name, value } = e.target;
    setTopic({ ...topic, [name]: value });
  };

  const sendTopic = async () => {
    const dataToSend={}
     dataToSend.Name=topic.Name
     dataToSend.subject=topic.subject
     dataToSend.SubTopics=[]
     if(topic.subTopic0)
     dataToSend.SubTopics.push(topic.subTopic0)
     if(topic.subTopic1)
     dataToSend.SubTopics.push(topic.subTopic1)
     if(topic.subTopic2)
     dataToSend.SubTopics.push(topic.subTopic2)
     if(topic.subTopic3)
     dataToSend.SubTopics.push(topic.subTopic3)
     if(topic.subTopic4)
     dataToSend.SubTopics.push(topic.subTopic4)
     if(topic.subTopic5)
     dataToSend.SubTopics.push(topic.subTopic5)
     if(topic.subTopic6)
     dataToSend.SubTopics.push(topic.subTopic6)
     if(topic.subTopic7)
     dataToSend.SubTopics.push(topic.subTopic7)
     if(topic.subTopic8)
     dataToSend.SubTopics.push(topic.subTopic8)
     if(topic.subTopic9)
     dataToSend.SubTopics.push(topic.subTopic9)
     if(topic.subTopic10)
     dataToSend.SubTopics.push(topic.subTopic10)
     if(topic.subTopic11)
     dataToSend.SubTopics.push(topic.subTopic11)
     dispatch(addTopic(dataToSend))
  }
  
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
          Add Topic
        </Typography>
        <Grid container spacing={8}>
          <Grid item md={12} sm={12} xl={12} style={{ marginTop: "10px" }}>
            <TextField
              label="Topic Name"
              name="Name"
              onChange={manageTopic}
              value={topic.Name}
              variant="standard"
              fullWidth
              required
            ></TextField>
          </Grid>
          <Grid item md={6} sm={6} xl={6}>
            <FormControl fullWidth>
              <InputLabel>Select Subject</InputLabel>
              <Select
                name="subject"
                onChange={manageTopic}
                value={topic.subject}
                required
                fullWidth
                label="Select Subject"
              >
                {theState.subjects.map((d) => (
                  <MenuItem value={d._id}>{d.Name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} sm={6} xl={6}>
            <FormControl fullWidth>
              <InputLabel>Select No Of SubTopic</InputLabel>
              <Select
                required
                fullWidth
                label="Select No Of SubTopic"
                defaultValue={0}
                onChange={(e) => {
                  const dataToSet = [];
                  for (let i = 0; i < e.target.value; i++) {
                    dataToSet.push(count[i]);
                  }
                  clearSubTopic();

                  setSubtopic(dataToSet);
                }}
              >
                <MenuItem value="0">0</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={12} sm={12} xl={12}>
            {subtopic.map((d, k) => (
              <TextField
                required
                name={`subTopic${k}`}
                onChange={manageTopic}
                label={`1.${k+1} ${d} SubTopic`}
                fullWidth
                variant="standard"
                style={{ marginBottom: "20px" }}
              ></TextField>
            ))}
          </Grid>

          <Grid item md={6} sm={6} xl={6}>
            <Button variant="contained" color="error" fullWidth>
              Reset
            </Button>
          </Grid>
          <Grid item xs={6} md={6} xl={6} lg={6} textAlign={"center"}>
          {theState.isLoading?<CircularProgress/>  : 
            <Button
              variant="contained"
              color="success"
              onClick={sendTopic}
              fullWidth
            >
              Add Subject
            </Button>
          }
          </Grid>
          <Grid item xs={12} md={12} xl={12} lg={12} textAlign={"center"} style={{marginBottom:"10px",color:"red"}}>
             <b style={{paddinBottom:"10px",fontSize:"20px"}}>{theState.err ?`*${theState.err}`:""}</b>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
