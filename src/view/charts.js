import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chartsActions } from '../reducers/charts';

const Charts = ({ match, location }) => {
    const { charts } = useSelector(({ charts }) => ({ charts }));

    const [ page, setPage ] = useState(70);

    const dispatch = useDispatch();

    const { LOAD_CHARTS } = chartsActions;

    useEffect(() => {
        dispatch(LOAD_CHARTS(page));
        console.log(match, location)
    }, [page])

    return (
        <div>
            <table>
                <tr>
                    <th>Version</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Difficulty</th>
                    <th>Level</th>
                    <th>Notes</th>
                </tr>
                {charts.list ? charts.list.map(chart => {
                    return (
                        <tr>
                            <td className='attr1'>{chart.version}</td>
                            <td className='attr2'>{chart.title}</td>
                            <td className='attr3'>{chart.artist}</td>
                            <td className='attr4'>{chart.diff}</td>
                            <td className='attr5'>{chart.lv}</td>
                            <td className='attr6'>{chart.notes}</td>
                        </tr>
                    )
                }) : <></>}
            </table>
            
        </div>
    )
}

export default Charts;