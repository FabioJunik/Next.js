import { getData } from '@/data';
import Chart from 'react-apexcharts'


const data = getData();

const amounProductSold = data.map(item => item.amonutProdutsSold)
const month = data.map(item => item.month)
const expected = data.map(item => item.expected)

const state = {
    series: [{
        name: 'Esperado',
        data: expected
    },
    {
        name: 'Total vendido',
        data: amounProductSold
    }
    ],
    options: {
        chart: {
            type: 'bar',
            height: 350
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: month
        },
        yaxis: {
            title: {
                text: 'Produtos'
            }
        },
        fill: {
            opacity: 1,
        },
        colors: ['#9C27B0', '#dd4df7'],
        tooltip: {
            y: {
                formatter: function (val: number) {
                    return "" + val + " produtos"
                }
            }
        }
    },
};


export const ChartComponent = () => {

    return (
        <Chart options={state} series={state.series} type="bar" width={600} height={400} />
    )
}