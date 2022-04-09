import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSessionListByClass } from "../../redux/actions/session.action";
import { Stepper } from "@mui/material";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "../../axios";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
  RadialBarChart,
  RadialBar,Legend,TooltipBarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  CartesianGrid,
  Tooltip,
  BarChart,Label,LabelList
} from "recharts";
function SessionTree() {
  const adminState = useSelector((state) => state.adminReducer);
  const sessionState = useSelector((state) => state.sessionReducer);
  const dispatch = useDispatch();
  const [isActiveSem, setIsActiveSem] = useState(0);
  const [graphData, setGraphData] = useState([ ]);
  const getSessionStatus = async (sem) => {
    const { _id } = adminState.courses;
    console.log(_id)
    const data = await axios.get(`/get/session/status/${_id}/${sem}`);
    setGraphData(data.data);
  };
  useEffect(async () => {
    await getSessionStatus("SEM1")
    await dispatch(getSessionListByClass());
  }, []);
  if (adminState.isLoading){ 
    return <></>
  }
  else
    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: "16% 1fr",
          height:"100%",
          overflow: "auto",
          width: "100%",
          backgroundColor: "",
        }}
      >
        <div
          className="semeContainer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            overflow: "auto",
          }}
        >
          {adminState.courses.Semesters.map((sem, k) => (
            <div
              style={{
                cursor: "pointer",
                color: "darkblue",
                borderBottom: `${
                  k == isActiveSem ? `2px solid black` : `0px solid green`
                }`,
              }}
              onClick={() => {
                setIsActiveSem(k);
                getSessionStatus(sem);
              }}
            >
              {sem}
            </div>
          ))}
        </div>
        <div className="graphContainer" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",overflow:"auto"}}>
        <BarChart width={700} height={350} data={graphData} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name"  allowDataOverflow={true} style={{fontSize:"10px"}} >
          </XAxis>
          <YAxis />
          <Tooltip formatter={(value,name)=>{return `${value}%`}} />
          <Legend />
          <Bar dataKey="percentage" fill="#8884d8" values={100}>
          {/* <LabelList dataKey="Name" /> */}
          </Bar>
        </BarChart>
        </div>
      </div>
    );
}

export default SessionTree;
