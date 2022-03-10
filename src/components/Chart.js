import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
    labels: ['0~1', '1~3', '3~5', '5~7', '7~10', '10~'],
    // ④실제 차트에 표시할 데이터들(Array), dataset객체들을 담고 있다.
    datasets: [{
        // ⑤dataset의 이름(String)
        // label: '# of Votes',
        // ⑥dataset값(Array)
        data: [12, 19, 3, 5, 2, 3],
        // ⑦dataset의 배경색(rgba값을 String으로 표현)
        backgroundColor: 'rgba(118, 89, 255, 0.2)',
        // ⑧dataset의 선 색(rgba값을 String으로 표현)
        borderColor: 'rgba(118, 89, 255, 1)',
        // ⑨dataset의 선 두께(Number)
        borderWidth: 1
    }]
  };

const options = {
    plugins:{
        legend: {
            display: false
        }
       },
        scales: {
            // ⑫y축에 대한 설정(Object)
            y: {
                // ⑬시작을 0부터 하게끔 설정(최소값이 0보다 크더라도)(boolean)
                beginAtZero: true
            }   
        }
}

const Chart = () => {
    return (
        <Bar type="bar" data={data} options={options}/>
    )
}

export default Chart;