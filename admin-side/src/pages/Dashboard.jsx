import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ChurchContext } from "../context/ChurchContext";
import { MemberContext } from "../context/MemberContext";

const ProgressBar = ({ label, value, color }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <div style={{ fontSize: "18px", marginBottom: "8px" }}>{label}</div>
      <div
        style={{
          height: "25px",
          width: "100%",
          backgroundColor: "#e0e0de",
          borderRadius: "25px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${value}%`,
            backgroundColor: color,
            borderRadius: "25px",
            textAlign: "right",
            paddingRight: "12px",
            lineHeight: "25px",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
};

const PastEventsSummary = () => {
  return (
    <div className="group-hover flex flex-col w-full max-w-2xl p-8 bg-white shadow gap-8 rounded-lg mx-auto transition-transform transform hover:scale-105">
      <div className="flex flex-row justify-between gap-8">
        <div className="text-center p-8 shadow-md h-56 flex flex-col justify-center w-1/2 transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold">Total Past Events</h4>
          <p className="text-5xl font-bold">142</p>
          <p className="text-lg text-gray-500">From January 1 to December 31, 2023</p>
        </div>
        <div className="text-center p-8 shadow-md h-56 flex flex-col justify-center w-1/2 transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold">Upcoming Events</h4>
          <p className="text-5xl font-bold">28</p>
          <p className="text-lg text-gray-500">In the next 3 months</p>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-8">
        <div className="text-center p-8 shadow-md h-56 flex flex-col justify-center w-1/2 transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold">Event Types</h4>
          <div className="flex flex-col items-center space-y-2 mt-2">
            <span className="text-blue-600 text-xl">● Conferences</span>
            <span className="text-blue-400 text-xl">● Meetups</span>
            <span className="text-green-600 text-xl">● Workshops</span>
            <span className="text-yellow-600 text-xl">● Webinars</span>
          </div>
        </div>
        <div className="text-center p-8 shadow-lg h-56 flex flex-col justify-center w-1/2 transition-transform transform hover:scale-105">
          <h4 className="text-2xl font-semibold">Attendees</h4>
          <p className="text-5xl font-bold">12,345</p>
          <p className="text-lg text-gray-500">Total across all events</p>
        </div>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const [
    churchMembersState,
    setChurchMembersState,
    churchApplicantsState,
    setChurchApplicantsState,
  ] = useContext(ChurchContext);
  const [
    memberMembersState,
    setMemberMembersState,
    memberApplicantsState,
    setMemberApplicantsState,
  ] = useContext(MemberContext);

  const churchPendingCount = churchApplicantsState.length;
  const churchCurrentCount = churchMembersState.length;
  const totalChurchMembers = churchPendingCount + churchCurrentCount;
  const churchPendingPercentage = Math.round(
    (churchPendingCount / totalChurchMembers) * 100
  );
  const churchCurrentPercentage = Math.round(
    (churchCurrentCount / totalChurchMembers) * 100
  );

  const memberAccPendingCount = memberApplicantsState.length;
  const memberAccCurrentCount = memberMembersState.length;
  const totalMemberAcc = memberAccPendingCount + memberAccCurrentCount;
  const memberAccPendingPercentage = Math.round(
    (memberAccPendingCount / totalMemberAcc) * 100
  );
  const memberAccCurrentPercentage = Math.round(
    (memberAccCurrentCount / totalMemberAcc) * 100
  );

  const churchData = {
    labels: ["Current Church Members", "Pending Church Members"],
    datasets: [
      {
        data: [churchCurrentCount, churchPendingCount],
        backgroundColor: ["rgb(235,227,211)", "#26577c"],
        hoverOffset: 4,
      },
    ],
  };

  const memberAccData = {
    labels: ["Current Members", "Pending Applications"],
    datasets: [
      {
        data: [memberAccCurrentCount, memberAccPendingCount],
        backgroundColor: ["#952323", "rgb(228,168,124)"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
      legend: {
        position: "top",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col items-center w-full mt-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col gap-12">
          <div className="rounded-[5px] border-[1px] shadow-lg p-[20px] transition-transform transform hover:scale-105">
            <h2 style={{ textAlign: "center", color: "#555", fontSize: "24px" }}>MEMBER</h2>
            <div style={{ height: "300px" }}>
              <Pie data={memberAccData} options={options} />
            </div>
            <ProgressBar
              label="Pending Member Applications"
              value={memberAccPendingPercentage}
              color="rgb(228,168,124)"
            />
            <ProgressBar
              label="Current Members"
              value={memberAccCurrentPercentage}
              color="#952323"
            />
          </div>

          <div className="rounded-[5px] border-[1px] shadow-lg p-[20px] transition-transform transform hover:scale-105">
            <h2 style={{ textAlign: "center", color: "#555", fontSize: "24px" }}>CHURCH</h2>
            <div style={{ height: "300px" }}>
              <Pie data={churchData} options={options} />
            </div>
            <ProgressBar
              label="Pending Church Applications"
              value={churchPendingPercentage}
              color="#26577c"
            />
            <ProgressBar
              label="Current Church Members"
              value={churchCurrentPercentage}
              color="rgb(235,227,211)"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <PastEventsSummary />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
