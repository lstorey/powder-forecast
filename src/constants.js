import { mean, median, nightAndDay } from "./aggregators";

export const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const axisStyle = { fontSize: "0.6rem" };

const data = {
  modelA: [
    0, 0.3, 0.4, 2.1, 4.8, 3.6, 2.4, 0.2, 0, 0, 0, 0, 4, 7.2, 6.1, 0.5, 0, 0, 0,
    0,
  ],
  modelB: [
    0, 0, 0.2, 1.9, 2.1, 6.8, 4.2, 4.2, 1.6, 0, 0, 0, 1, 2.7, 1.3, 6.8, 7.9, 0,
    0, 0,
  ],
  modelC: [
    0, 0, 0, 0.5, 0.8, 1.8, 3.4, 5.6, 4.2, 1, 0, 0, 0.5, 0.5, 1.3, 0.4, 0.4,
    0.4, 0, 0,
  ],
  modelD: [0, 0, 1, 3, 5, 6, 3, 3, 0, 0, 0, 0, 5, 7, 5, 3, 0, 0, 0, 0],
  modelE: [0, 0, 1, 4, 7, 9, 5, 5, 0, 0, 0, 0, 7, 10, 7, 5, 0, 0, 0, 0],
  modelF: [0, 1, 4, 7, 9, 5, 5, 0, 0, 0, 0, 7, 10, 7, 5, 0, 0, 0, 0, 0],
};

export const models = Object.keys(data);

export const lineData = data[models[0]].map((_, i) => {
  const values = models.map((model) => data[model][i]);
  return {
    name: i,
    ...models.reduce(
      (acc, key) => ({
        ...acc,
        [key]: data[key][i],
      }),
      {}
    ),
    median: median(values),
    mean: mean(values),
  };
});

export const barData = Array.from({
  length: Math.floor(data[models[0]].length / 2),
}).map((_, i) => ({
  name: i,
  ...models.reduce(
    (acc, key) => ({
      ...acc,
      [key]: nightAndDay(data[key], i),
    }),
    {}
  ),
  median: median(models.map((key) => nightAndDay(data[key], i))),
}));

export const bestDaysData = {
  "🌲 Storm skiing": {
    title: "> 5 in during the day",
    days: [
      { description: "Wednesday", info: "0.5-1 inches per hour" },
      { description: "Next Monday", info: "0.5-1 inches per hour" },
    ],
  },
  "❄️ Powder": {
    title: "> 4in overnight",
    days: [
      { description: "Thursday", info: "4-8 in overnight" },
      { description: "Next Monday", info: "4-8 in overnight" },
    ],
  },
  "⛷️ Rope drops and backcountry*": {
    title: ">12in storm totals with minimal new snow",
    days: [
      { description: "Friday and Saturday", info: "22in storm total" },
      { description: "Next Tuesday and Wednesday", info: "20in storm total" },
    ],
  },
  "🥷 Sneaky pow": {
    title: "Potential surprise powder",
    days: [
      {
        description: "Next Tuesday",
        info: "Up to 15in Mon night thru Tues, if storm arrives late",
      },
    ],
  },
};
