import ReactECharts from 'echarts-for-react';
import IAverageMarksChartProps from './types';

const getListOfNumbers = (count: number) => {
    const list = new Array(count);
    for (let i = 0; i < count; i += 1) {
        list[i] = i + 1;
    }
    return list;
};

function AverageMarksChart({ averageMarks }: IAverageMarksChartProps) {
    return (
        <ReactECharts option={{
            darkMode: true,
            title: {
                show: false,
            },
            tooltip: {
                trigger: 'axis',
                formatter: "{a} <b>{b}</b>: <br> <i>Средний балл:</i> <b>{c}</b>"
            },
            feature: {
                saveAsImage: {}
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: getListOfNumbers(averageMarks.length).map((i) => `Семестр ${i}`)
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                }
            ],
            series: [
                {
                    name: '',
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 7,
                    areaStyle: { normal: {} },
                    data: averageMarks,
                    label: {
                        show: true,
                        fontSize: 10,
                        textBorderColor: 'transparent',
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        padding: 5,
                        color: '#242529',
                        fontWeight: 'bold',
                    }
                }
            ]
          }} style={{ width: '275px' }} />
    );
}

export default AverageMarksChart;