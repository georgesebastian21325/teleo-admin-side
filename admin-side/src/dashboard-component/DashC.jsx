import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { getPendingCount, getCurrentCount } from "../church-account/ChurchMembers";
import { getMemberAccPendingCount, getMemberAccCurrentCount } from '../member-account/MemberAcc'; // Adjust the path as necessary

const ProgressBar = ({ label, value, color }) => {
    return (
        <div style={{ margin: '10px 0' }}>
            <div style={{ fontSize: '14px', marginBottom: '4px' }}>{label}</div>
            <div style={{
                height: '15px',
                width: '100%',
                backgroundColor: '#e0e0de',
                borderRadius: '25px',
            }}>
                <div style={{
                    height: '100%',
                    width: `${value}%`,
                    backgroundColor: color,
                    borderRadius: '25px',
                    textAlign: 'right',
                    paddingRight: '5px',
                    lineHeight: '15px',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '12px'
                }}>
                    {value}%
                </div>
            </div>
        </div>
    );
};

const DashC = () => {
    const pendingCount = getPendingCount();
    const currentCount = getCurrentCount();
    const totalChurchMembers = pendingCount + currentCount;
    const pendingPercentage = Math.round((pendingCount / totalChurchMembers) * 100);
    const currentPercentage = Math.round((currentCount / totalChurchMembers) * 100);

    const memberAccPendingCount = getMemberAccPendingCount();
    const memberAccCurrentCount = getMemberAccCurrentCount();
    const totalMemberAcc = memberAccPendingCount + memberAccCurrentCount;
    const memberAccPendingPercentage = Math.round((memberAccPendingCount / totalMemberAcc) * 100);
    const memberAccCurrentPercentage = Math.round((memberAccCurrentCount / totalMemberAcc) * 100);

    const churchData = {
        labels: ['Current Church Members', 'Pending Church Members'],
        datasets: [{
            data: [currentCount, pendingCount],
            backgroundColor: ['rgb(235,227,211)', '#26577c'],
            hoverOffset: 4
        }]
    };

    const memberAccData = {
        labels: ['Current Members', 'Pending Applications'],
        datasets: [{
            data: [memberAccCurrentCount, memberAccPendingCount],
            backgroundColor: ['#952323', 'rgb(228,168,124)'],
            hoverOffset: 4
        }]
    };

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            },
            legend: {
                position: 'top'
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div style={{
            maxWidth: '375px',
            margin: '20px auto',
            backgroundColor: 'white',
            padding: '20px'
        }}>
            <div style={{ padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                <h2 style={{ textAlign: 'center', color: '#555' }}>MEMBER</h2>
                <div style={{ height: '250px' }}>
                    <Pie data={memberAccData} options={options} />
                </div>
                <ProgressBar label="Pending Member Applications" value={memberAccPendingPercentage} color="rgb(228,168,124)" />
                <ProgressBar label="Current Members" value={memberAccCurrentPercentage} color="#952323" />
            </div>
            <div style={{ marginBottom: '30px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                <h2 style={{ textAlign: 'center', color: '#555' }}>CHURCH</h2>
                <div style={{ height: '250px' }}>
                    <Pie data={churchData} options={options} />
                </div>
                <ProgressBar label="Pending Church Applications" value={pendingPercentage} color="#26577c" />
                <ProgressBar label="Current Church Members" value={currentPercentage} color="rgb(235,227,211)" />
            </div>
        </div>
    
    );
}

export default DashC;
