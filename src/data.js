import {
  EmojiFoodBeverageRounded,
  LocalBarRounded,
  HotelRounded,
  BrushRounded,
  CodeRounded,
  DirectionsBikeRounded,
  DirectionsRunRounded,
} from "@material-ui/icons";

export function getIcon(name) {
  return {
    Eating: <EmojiFoodBeverageRounded fontSize="large" />,
    Drinking: <LocalBarRounded fontSize="large" />,
    Sleeping: <HotelRounded fontSize="large" />,
    Designing: <BrushRounded fontSize="large" />,
    Coding: <CodeRounded fontSize="large" />,
    Cycling: <DirectionsBikeRounded fontSize="large" />,
    Running: <DirectionsRunRounded fontSize="large" />,
  }[name];
}

export const labels = [
  { name: "Eating", icon: "" },
  { name: "Drinking", icon: "" },
  { name: "Sleeping", icon: "" },
  { name: "Designing", icon: "" },
  { name: "Coding", icon: "" },
  { name: "Cycling", icon: "" },
  { name: "Running", icon: "" },
];

export const dataSet1 = [80, 23, 90, 12, 67, 37, 90];
export const dataSet2 = [42, 10, 42, 37, 92, 40, 78];

export const data = {
  labels: labels.map((label) => label.name),
  datasets: [
    {
      label: "Day 1 dataset",
      data: dataSet1,
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 0.8)"],
      borderWidth: 2,
    },
    {
      label: "Day 2 dataset",
      data: dataSet2,
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 0.2)"],
      borderWidth: 2,
    },
  ],
};

export const radarOptions = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "My Health Data",
    },
  },
  scales: {
    r: {
      grid: {
        color: "rgba(89, 89, 90, 0.5)",
      },
      angleLines: {
        color: "rgba(181, 181, 182, 0.3)",
      },
      pointLabels: {
        color: "rgba(181, 181, 182, 1)",
      },
      ticks: {
        color: "black",
      },
    },
  },
};
