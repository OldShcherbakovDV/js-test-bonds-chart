import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { format } from "date-fns";

import { useActions } from "../../../utils/redux";
import {
  getBondsData,
  bondsFetchDataAction
} from "../../../redux/modules/bonds";

import Select from "../../common/Select";
import RadioGroup from "../../common/RadioGroup";

import "./bonds-chart.css";

const DATE_INTERVAL_OPTIONS = [
  { value: "week", text: "Week" },
  { value: "month", text: "Month" },
  { value: "quarter", text: "Quarter" },
  { value: "year", text: "Year" },
  { value: "max", text: "Max" }
];

const PARAM_OPTIONS = [
  { value: "price", text: "Price" },
  { value: "yield", text: "Yield" },
  { value: "spred", text: "Spred" }
];

const DEFAULT_PARAM = PARAM_OPTIONS[0].value;
const DEFAULT_DATE_INTERVAL = DATE_INTERVAL_OPTIONS[0].value;

const CHART_OPTIONS = {
  legend: {
    display: false
  }
};

const getChartData = (bondsData, type) => {
  const labels = bondsData.map(({ date }) => format(new Date(date), "dd.MM"));
  const data = bondsData.map(item => item[type]);

  return {
    labels,
    datasets: [
      {
        data
      }
    ]
  };
};
/**
 * Render bound chart.
 */
const BondsChart = ({ isin }) => {
  const [dateInterval, setDateInterval] = useState(DEFAULT_DATE_INTERVAL);
  const [param, setParam] = useState(DEFAULT_PARAM);
  const [bondsFetchData] = useActions(bondsFetchDataAction);
  const bondsData = useSelector(getBondsData);

  useEffect(() => {
    bondsFetchData(isin, dateInterval);
  }, [dateInterval]);

  return (
    <div className="bonds-chart__wrapper">
      <RadioGroup
        value={dateInterval}
        options={DATE_INTERVAL_OPTIONS}
        onChange={value => setDateInterval(value)}
      />
      <div className="bonds-chart">
        {bondsData && (
          <Line data={getChartData(bondsData, param)} options={CHART_OPTIONS} />
        )}
        <div className="bonds-chart__type-select">
          <Select
            value={param}
            options={PARAM_OPTIONS}
            onChange={value => setParam(value)}
          />
        </div>
      </div>
    </div>
  );
};

export default BondsChart;
