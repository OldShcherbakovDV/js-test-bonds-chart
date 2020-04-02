import { subDays, format } from "date-fns";

const INTERVAL_CONFIG = {
  week: { count: 7, amplitude: [-2, 2] },
  month: { count: 30, amplitude: [-4, 2] },
  quarter: { count: 90, amplitude: [1, 5] },
  year: { count: 365, amplitude: [-2, 8] },
  max: { count: 400, amplitude: [-10, 9] }
};

const randomInteger = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

const _genirateDataForBonds = interval => {
  const config = INTERVAL_CONFIG[interval];
  const result = [];
  const currentDate = new Date();

  let value = 25;
  for (let i = 0; i < config.count; i++) {
    const date = format(subDays(currentDate, i), 'MM/dd/yyyy');
    value += randomInteger(...config.amplitude);
    result.push({
      date,
      price: value,
      spred: (randomInteger(0, 100) / 100) * value,
      yield: (randomInteger(50, 120) / 100) * value
    });
  }

  return result;
};

const api = {
  getInfo: () =>
    new Promise((resolve, reject) => {
      resolve({
        currency: "USD",
        title: "NII CAPITAL 7.625 21",
        description: `NII CAPITAL CORP, Telecommunications, NR, till 01.04.2016`
      });
    }),

  getData: (isin, interval) =>
    new Promise((resolve, reject) => {
      resolve(_genirateDataForBonds(interval));
    })
};

export default api;
