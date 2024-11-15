import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './ChartWidget.module.css';

interface ChartWidgetProps {
  title: string;
  data?: Array<{ name: string; value: number }>;
}

const defaultData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 200 },
  { name: 'May', value: 700 },
];

const ChartWidget: React.FC<ChartWidgetProps> = ({ title, data = defaultData }) => {
  return (
    <div className={styles.chartWidget}>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#007bff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartWidget;
