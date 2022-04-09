import React, { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import axios from "../../axios";
import { updateSubject } from "../../redux/actions/subject.action";
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";
export default function TopicEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theState = useSelector((state) => state.adminReducer);
  const { sid } = useParams();
  const [topic, setTopics] = useState({
    _id: "",
    Name: "",
    topics: [],
  });
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    try {
      setLoading(true);
      const theSubjects = await axios.get(`/subject/get/${sid}`);
      const { _id, Name, topics } = theSubjects.data;
      setLoading(false);
      console.log(topics);
      setTopics({ _id, Name, topics });
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);
  const manageAddTopic = (e) => {
    const { id } = e.target;
    let { topics } = topic;
    topics[id].SubTopics.push(" ");
    setTopics({ ...topic, topics });
  };
  const handleTopicName = (e) => {
    const { id, value } = e.target;
    let { topics } = topic;
    topics[id].Name = value;
    setTopics({ ...topic, topics });
  };
  const handleSubtopicList = (e) => {
    const { id, value } = e.target;
    const splitedData = id.split(",");
    let { topics } = topic;
    topics[splitedData[0]].SubTopics[splitedData[1]] = value;
    setTopics({ ...topic, topics });
  };
  const deleteTopic = (e) => {
    const { id } = e.target;
    let { topics } = topic;
    topics.splice(id, 1);
    setTopics({ ...topic, topics });
  };
  const deleteSubtopic = (e) => {
    const { id } = e.target;
    let { topics } = topic;
    const splitedData = id.split(",");
    topics[splitedData[0]].SubTopics.splice(splitedData[1], 1);
    setTopics({ ...topic, topics });
  };

  const sendUpdatedData = async () => {
    await dispatch(updateSubject(topic));
    navigate("/teacher/topic/list");
  };

  if (loading || theState.isLoading) {
    return <CircularProgress />;
  } else {
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
            Edit Topic List
          </Typography>
          <Grid container spacing={5}>
            <Grid item sm={6} md={6} sx={6} xl={6} marginTop="40px">
              <FormControl fullWidth>
                <InputLabel>{"Class"}</InputLabel>
                <Select label="Class" defaultValue={1}>
                  <MenuItem value={1}>{theState.courses[0].course}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={6} md={6} sx={6} xl={6} marginTop="40px">
              <FormControl fullWidth>
                <InputLabel>{"Subject"}</InputLabel>
                <Select label="Subject" defaultValue={1}>
                  <MenuItem value={1}>{topic.Name}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={12} md={12} sx={12} xl={12}>
              <Typography
                component="h5"
                variant="h5"
                style={{
                  wordSpacing: "7px",
                  textTransform: "uppercase",
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#060606",
                }}
              >
                Topic List
              </Typography>
            </Grid>
            {topic.topics.map((t, k) => (
              <Grid item sm={12} md={12} sx={12} xl={12}>
                <TextField
                  fullWidth
                  variant="standard"
                  label={`${k + 1}`}
                  name={`topic${k}`}
                  id={k}
                  value={t.Name}
                  onChange={handleTopicName}
                  required
                />
                <div
                  style={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "right",
                    marginTop: "10px",
                  }}
                >
                  <MdDelete
                    id={k}
                    cursor={"pointer"}
                    size={25}
                    color={"red"}
                    onClick={(e) => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteTopic(e);
                          Swal.fire(
                            "Deleted!",
                            "Your topic has been deleted.",
                            "success"
                          );
                        }
                      });
                    }}
                  />
                </div>
                {t.SubTopics.map((st, sk) => (
                  <>
                    <TextField
                      fullWidth
                      variant="standard"
                      style={{ marginTop: "15px", marginLeft: "20px" }}
                      label={`${k + 1}.${sk + 1}`}
                      value={st}
                      id={`${k},${sk}`}
                      onChange={handleSubtopicList}
                      required
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "left",
                        marginTop: "10px",
                        paddingLeft: "20px",
                      }}
                    >
                      <MdDelete
                        id={`${k},${sk}`}
                        cursor={"pointer"}
                        size={25}
                        color={"red"}
                        onClick={deleteSubtopic}
                      />
                    </div>
                  </>
                ))}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
                    marginTop: "15px",
                  }}
                >
                  <IoMdAdd
                    size={25}
                    cursor="pointer"
                    color="green"
                    id={k}
                    onClick={manageAddTopic}
                  />
                </div>
              </Grid>
            ))}

            <Grid item sm={6} md={6} sx={6} xl={6}>
              <NavLink
                to={`/teacher/topic/list`}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <Button fullWidth variant="contained" color="error">
                  Cancle
                </Button>
              </NavLink>
            </Grid>
            <Grid item sm={6} md={6} sx={6} xl={6}>
              <Button
                fullWidth
                variant="contained"
                color="success"
                onClick={sendUpdatedData}
              >
                Update Topic
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
