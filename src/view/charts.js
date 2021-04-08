import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chartsActions } from '../reducers/charts';
import queryString from 'query-string'; 
import { Link } from "react-router-dom";

const Charts = ({ match, location }) => {
    const { charts } = useSelector(({ charts }) => ({ charts }));

    const [ page, setPage ] = useState(1);

    const dispatch = useDispatch();

    const { LOAD_CHARTS } = chartsActions;

    useEffect(() => {
        dispatch(LOAD_CHARTS(page));
    }, [page])

    const onMoveToBackPage = () => {
        setPage((page > 1) ? (page - 1) : page)
    }

    const onMoveToFrontPage = () => {
        setPage((page < charts.last) ? (page + 1) : page)
    }

    return (
        <>
            {!charts.loading && <div>
                <table>
                    <thead>
                        <tr>
                            <th>Version</th>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Difficulty</th>
                            <th>Level</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                    {charts.list && charts.list.map((chart) => {
                            return (<tr className="chart">
                                <td className='attr1'>{chart.version}</td>
                                <td className='attr2'>
                                    <Link to={`/chart/${chart.id}`}>{chart.title}</Link>
                                </td>
                                <td className='attr3'>{chart.artist}</td>
                                <td className='attr4'>{chart.diff}</td>
                                <td className='attr5'>{chart.lv}</td>
                                <td className='attr6'>{chart.notes}</td>
                            </tr>)
                        }
                    )
                    }
                    </tbody>
                </table>
                <div>
                    {page > 1 && <button onClick={onMoveToBackPage}>뒤로</button>}
                    {page} / {charts.last}
                    {page < charts.last && <button onClick={onMoveToFrontPage}>앞으로</button>}
                </div>
            </div>}
        </>
    )
}

export default Charts;