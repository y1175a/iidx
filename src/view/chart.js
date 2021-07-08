import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chartActions } from '../reducers/chart'
import { playdataActions } from '../reducers/playdata';

const Chart = ({ match }) => {
    const { user, chart, loading, playdata } = useSelector(({ user, chart, loading, playdata }) => ({ user: user.user, chart: chart.chart, loading: loading.loading, playdata: playdata.playdata}));

    const chartId = match.params.id;

    const { LOAD_CHART } = chartActions;

    const { LOAD_PLAYDATA } = playdataActions;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LOAD_CHART(chartId));
        dispatch(LOAD_PLAYDATA(chartId, user.id));
        return () => {
            console.log("뒤로가기");
        }
    }, []);

    return (
        <>
            {loading && <div>now loading...</div>}
            {!loading && chart &&
            <div>
                <div>
                    <h1>{chart.title} ({chart.difficulty})</h1>
                    <h4>{chart.artist}</h4>
                </div>
                <h2>User Playdata</h2>
                {playdata ? <div>
                    <p>score: {playdata.score} / {chart.notes * 2} ({(playdata.score / (chart.notes * 2) * 100).toFixed(2)}%)</p>
                    <p>rank: {playdata.rank}
                    ({playdata.score > parseInt(chart.notes * 2 * (17/18)) ? `MAX-${chart.notes * 2 - playdata.score}` : 
                    playdata.score > parseInt(chart.notes * 2 * (16/18)) ? `AAA+${parseInt(chart.notes * 2 * (16/18)) - playdata.score}` : 
                    playdata.score > parseInt(chart.notes * 2 * (15/18)) ? `AAA-${playdata.score - parseInt(chart.notes * 2 * (15/18))}` : ''}) </p>
                    <p>cleartype: {playdata.cleartype}</p>
                    <p>pgreat/great: {playdata.pgreat} / {playdata.great}</p>
                    <p>skillpoint: {playdata.skillpoint} </p>
                    <p>last updated: {playdata.updatedAt.replace("T", " ").replace(".000Z", "")}</p>
                </div> : <div>no data</div>}
            </div>}
        </>
    );
}

export default Chart;