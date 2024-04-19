import { Card } from '@/components/ui';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import * as React from 'react';

export  const CompanyGraph= () => {

   const numDataPoints = 100; // Number of data points

// Generate fluctuating line data
const lineData = Array.from({ length: 100 }, (_, i) => {
    let value;
    if (i < 30) {
        value = Math.random() * 10; // Generate low values at the start
    } else if (i < 70) {
        const fluctuation = Math.random() * 20 - 10; // Generate fluctuating values in the middle
        value = 15 + fluctuation; // Central value around 15
    } else {
        value = 30 + Math.random() * 10; // Generate high values towards the end
    }
    return value;
});

// Generate column data
const columnData = Array.from({ length: 100 }, () => Math.random() * 30); // Adjust this value for desired range

const interval = Math.max(1, Math.floor(numDataPoints / 10)); // Adjust the denominator as needed

const chartOptions = {
    chart: {
        type: "column"
    },
    title: {
        text: ""
    },
    credits: {
        enabled: false,
    },
    xAxis: {
        categories: Array.from({ length: numDataPoints }, (_, i) => {
            const date = new Date(`2024-03-21`);
            date.setDate(date.getDate() + i);
            const day = date.getDate();
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const month = monthNames[date.getMonth()];
            const year = date.getFullYear();
            return `${day} ${month} ${year}`;
        }), // Generating dates for 100 data points
        labels: {
            step: interval, // Set the interval for x-axis date labels
            style: {
                textOverflow: 'none'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Price' // Set the title of the y-axis
        }
    },
    plotOptions: {
        column: {
            groupPadding: 0, // No gap between groups of columns
            pointPadding: 0 // No gap between columns within a group
        },
        line: {
            marker: {
                enabled: false // Disable markers for the line series
            }
        }
    },
    series: [
        {
            name: 'Stock Market Rate',
            type: 'column',
            data: columnData
        }
        // {
        //     name: 'Trend',
        //     type: 'line',
        //     data: lineData
        // }
    ]
};

    
    
    

  return (
    <>
    <Card>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
      </Card>
    </>
  );

}