import Chart from "react-apexcharts";
import { motion } from "framer-motion"
export default function GrapheCharts() {

const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91,88]
      },
    
      {
        name: "series-2",
        data: [70, 45, 21, 12, 29, 30, 10, 21,78]
      },
      {
        name: "series-2",
        data: [50, 65, 21, 22, 89,70, 30, 41,32]
      },
      {
        name: "series-2",
        data: [70, 5, 81, 52, 9,78, 20, 31,42]
      }
    ]
  };

      

    return <div>
      <div>Graphe Evolution CMR</div>
      <div className="">
        <table>
          <tr>
            <td>     
           <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
 
            /></td>
          
                  <td>
         <Chart
          options={state.options}
          series={state.series}
          type="area"
          width="400"

          />
          </td>
          </tr>
        </table>


            
            <motion.div className="bg-rose-400 h-12 w-64 justify-center"
                initial={{opacity: 0 ,}} animate={{opacity:1 , x: 300}}
>
 catechdigital2024@gmail.com
</motion.div>
    </div>
    </div>
}

/*npm install @mui/material @emotion/react @emotion/styled */