import * as React from 'react';
import { ChartContainer, BarPlot } from '@mui/x-charts';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function BarChartDash() {
  return (
    <div className="barChart">
      <ChartContainer
        width={700}
        height={350}
        series={[{ data: uData, label: "uv", type: "bar" }]}
        xAxis={[{ scaleType: "band", data: xLabels }]}
      >
        <BarPlot />
      </ChartContainer>
    </div>
  );
}