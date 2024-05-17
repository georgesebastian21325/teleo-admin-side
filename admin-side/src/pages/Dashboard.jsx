import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ChurchContext } from "../context/ChurchContext";
import { MemberContext } from "../context/MemberContext";

const ProgressBar = ({ label, value, color }) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <div style={{ fontSize: "14px", marginBottom: "4px" }}>{label}</div>
      <div
        style={{
          height: "15px",
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
            paddingRight: "5px",
            lineHeight: "15px",
            color: "white",
            fontWeight: "bold",
            fontSize: "12px",
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
    <div className="flex justify-between items-center w-full max-w-4xl mt-8 p-4 bg-white shadow gap-[10px] rounded-lg">
  <div className="text-center p-4 shadow-md inline-block h-40 flex flex-col justify-center">
    <h4 className="text-lg font-semibold">Total Past Events</h4>
    <p className="text-3xl font-bold">142</p>
    <p className="text-sm text-gray-500">From January 1 to December 31, 2023</p>
  </div>
  <div className="text-center p-4 shadow-md inline-block h-40 flex flex-col justify-center">
    <h4 className="text-lg font-semibold">Event Types</h4>
    <div className="flex justify-center space-x-2 mt-2">
      <span className="text-blue-600">● Conferences</span>
      <span className="text-blue-400">● Meetups</span>
      <span className="text-green-600">● Workshops</span>
      <span className="text-yellow-600">● Webinars</span>
    </div>
  </div>
  <div className="text-center p-4 shadow-md inline-block h-40 flex flex-col justify-center">
    <h4 className="text-lg font-semibold">Upcoming Events</h4>
    <p className="text-3xl font-bold">28</p>
    <p className="text-sm text-gray-500">In the next 3 months</p>
  </div>
  <div className="text-center p-4 shadow-lg inline-block h-40 flex flex-col justify-center">
    <h4 className="text-lg font-semibold">Attendees</h4>
    <p className="text-3xl font-bold">12,345</p>
    <p className="text-sm text-gray-500">Total across all events</p>
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
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col lg:flex-row gap-[15px] p-[30px] pb-[20px] w-full">
        <div className="rounded-[5px] border-[1px] shadow-lg p-[20px] w-full">
          <h2 style={{ textAlign: "center", color: "#555" }}>MEMBER</h2>
          <div style={{ height: "250px" }}>
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

        <div className="rounded-[5px] border-[1px] shadow-lg p-[20px] w-full">
          <h2 style={{ textAlign: "center", color: "#555" }}>CHURCH</h2>
          <div style={{ height: "250px" }}>
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
      <PastEventsSummary />
    </div>
  );
};

export default DashboardPage;
