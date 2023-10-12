import { IMarkData, IStudentsMarksData } from "@api/StudentService";

const defaultData = new Array(5).fill(0);

const getAverageMarks = (sessionData: IStudentsMarksData[] | undefined): number[] => {
    
    if(!sessionData) return defaultData;

    const averageMarks = new Array(sessionData.length);

    sessionData.forEach(session => {
        let sumOfMarks = 0;
        let numOfMarks = 0;

        session.marks.forEach((mark: IMarkData) => {
            if (typeof mark.result === 'number') {
                numOfMarks += 1;
                sumOfMarks += mark.result;
            }
        });
        averageMarks[session.sessionNumber - 1] = parseFloat((sumOfMarks / numOfMarks).toFixed(1));
    });

    return averageMarks;
}

export default getAverageMarks;