import Button from "../components/Button";
import InputField from "../components/InputField";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = [
  {
    id: "0000",
    title: "Sold the computer",
    description: "Got extra income after sold the computer for $50000",
    amount: 4000,
  },
  {
    id: "0001",
    title: "Monthly salary",
    description: "Monthly salary of Champ",
    amount: 4000,
  },
  {
    id: "0002",
    title: "Gift",
    description: "Dad gave it $4000 as gift",
    amount: 4000,
  },
  {
    id: "0003",
    title: "Freelance project",
    description: "Earned $1000 from a freelance project",
    amount: 4000,
  },
  {
    id: "0004",
    title: "Investment dividends",
    description: "Received $200 in dividends from investments",
    amount: 4000,
  },
];

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const Incomes = () => {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-2">
        <div className="flex gap-10">
          <div className="flex-1">
            <CreateIncome />
          </div>

          <div className="flex-1">
            <Line data={chartData} />
          </div>
        </div>

        <hr className="h-px border-0 bg-gray-300 w-3/4 mx-auto my-10" />

        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      Created
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((row) => (
                    <tr key={row.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {row.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {row.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {row.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {row.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          className="text-blue-500 hover:text-blue-700"
                          href="#"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incomes;

function CreateIncome() {
  return (
    <form className="w-full">
      <div className="flex flex-col">
        <InputField
          label="Title"
          type="text"
          placeholder="Ex :- Monthly Salary"
        />
        <InputField
          label="Description"
          type="text"
          placeholder="Ex :- Received new monthly salary slip"
        />
        <InputField label="Amount" type="text" placeholder="Ex :- 3800" />

        <Button title="Submit" />
      </div>
    </form>
  );
}
