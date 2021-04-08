import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chartActions } from '../reducers/chart'

const Chart = ({ match }) => {
    const { chart, loading } = useSelector(({ chart }) => ({ chart: chart.chart, loading: chart.loading }));

    const [ playData, setPlayData ] = useState({});

    const chartId = match.params.id;

    const { LOAD_CHART } = chartActions;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LOAD_CHART(chartId));
        setPlayData({
            playcount: 30,
            score: 1234,
            rank: "AAA",
            cleartype: "EX-HARD",
            misscount: 15
        });
        return () => {
            console.log("뒤로가기");
        }
    }, []);

    return (
        <>
            {loading && <div>now loading...</div>}
            {!loading && chart && playData && 
            <div>
                <div>
                    <h3>{chart.title}</h3>
                    <h4>{chart.artist}</h4>
                </div>
                <h2>User Playdata</h2>
                <div>
                    <p>playcount: {playData.playCount}</p>
                    <p>score: {playData.score} / {chart.notes * 2}</p>
                    <p>rank: {playData.rank} </p>
                    <p>cleartype: {playData.cleartype}</p>
                    <p>misscount: {playData.misscount}</p>
                </div>
            </div>}
        </>
    );
}

export default Chart;