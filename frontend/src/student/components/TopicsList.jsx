import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../../axios";
import Cookies from "js-cookie";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
function TopicsList() {
  const [activesem, setActiveSem] = useState(0);
  const adminState = useSelector((state) => state.adminReducer);
  const [topics, setTopics] = useState([]);
  const getTopics = async (sem) => {
    try {
      const data = await axios.get(`/topic/get?sem=${sem}`, {
        headers: { authorization: Cookies.get("e-learningadmintoken") },
      });
      setTopics(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(async () => {
    await getTopics("SEM1");
    setActiveSem(0);
  }, []);
  if (adminState.isLoading||!adminState.isLogedin) return <></>;
  else
    return (
      <div
        className="totalSubCon"
        style={{
          height: "100%",
          backgroundColor: "",
          display: "grid",
          gridTemplateRows: "15% 1fr",
          boxShadow: "rgba(100, 100, 111, 0.151) 0px 7px 29px 0px",
          padding: "2%",
        }}
      >
        <div
          className="semContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {adminState.courses.Semesters.map((sem, k) => (
            <div
              style={{
                cursor: "pointer",
                borderBottom: `${activesem == k ? "2px solid blue" : ""}`,
              }}
              onClick={() => {
                setActiveSem(k);
                getTopics(sem);
              }}
            >
              {sem}
            </div>
          ))}
          {/* <Select style={{width:"30%"}} defaultValue={adminState.courses.Semesters[0]} label={"select semester"}>
          {adminState.courses.Semesters.map((sem, k) => (
            <MenuItem value={sem}>{sem}</MenuItem>
          ))}
        </Select> */}
        </div>
        <div className="allSyllContainer" style={{ overflow: "auto" }}>
          {topics.map((top, k) => (
            <List component="nav">
              <ListItem>
                <ListItemButton
                  style={{
                    backgroundColor: `${
                      k % 2 == 0 ? "hsl(216 98% 39% / 0.04)" : ""
                    }`,
                  }}
                >
                  <ListItemText primary={top.Name} />
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </div>
      </div>
    );
}

export default TopicsList;
