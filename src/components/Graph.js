import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ data }) => {
  // Use a ref to persist myChart across renders
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy existing chart before re-creating it
    }

    const ctx = document.getElementById('myChart').getContext('2d');

    // Initialize chart and assign it to chartRef
    chartRef.current = new Chart(ctx, {
      type: 'line', 
      data: data,
      options: {
        responsive: true,
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Cleanup on unmount
      }
    };
  }, [data]);  // Run effect whenever 'data' changes

  return <canvas id="myChart"></canvas>;
};

export default Graph;
