import ReactECharts from 'echarts-for-react';
import IMarksChartProps from './types';

function MarksChart({ marks }: IMarksChartProps) {
    return (
        <ReactECharts option={{
            darkMode: true,
            title: {
                show: false,
            },
            color: [
                '#B21700',
                '#D5591E',
                '#FF593D',
                '#FF737E',
                '#FF9B69',
                '#FFD84B',
                '#D7FF3F',
                '#83FF69',
                '#00FFC2',
                '#00FFFF',
            ].reverse(),
            tooltip: {
                trigger: 'item',
                formatter: "{a} <b>{b}</b> :<br>{c} шт ({d}%)"
            },
            series: [
                {
                    name: 'Отметка',
                    type: 'pie',
                    radius: 65,
                    label: {
                        show: true,
                        fontSize: 10,
                        textBorderColor: 'transparent',
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        padding: 5,
                        color: '#242529',
                        fontWeight: 'bold',
                    },
                    center: ['50%', '50%'],
                    data: marks.map((value, index) => ({
                        value,
                        name: index + 1,
                    })).filter(mark => mark.value > 0).reverse(),
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 15,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        }
                    }
                }
            ]
        }} style={{ width: '275px' }} />
    );
}

export default MarksChart;