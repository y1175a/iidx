import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chartsActions } from '../reducers/charts';
import { Link } from "react-router-dom";

const iidxVersionEnum = ['1st/substream', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
                         'RED', 'HAPPY SKY', 'DistorteD', 'GOLD', 'DJ TROOPERS', 'EMPRESS', 'SIRIUS',
                         'Resort Anthem', 'Lincle', 'tricoro', 'SPADA', 'PENDUAL', 'copula', 'SINOBUZ',
                         'CANNON BALLERS', 'Rootage', 'HEROIC VERSE', 'BISTROVER'];

const iidxVersionContractionEnum = ['1st/sub', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
                         'RED', 'SKY', 'DD', 'GOLD', 'DJT', 'EMP', 'SIR',
                         'RA', 'LC', 'tri', 'SPA', 'PEN', 'cop', 'SINO',
                         'CAN', 'Root', 'HERO', 'BIS'];    
                         
const iidxDifficultyEnum = ['BEGINNER', 'NORMAL', 'HYPER', 'ANOTHER', 'LEGGENDARIA'];

const iidxLevel = [...Array(12).keys()].map(value => value + 1);

const Filter = () => {
    const [ versionChecked, setVersionChecked ] = useState({});
    const [ levelChecked, setLevelChecked ] = useState({});
    const [ difficultyChecked, setDifficultyChecked ] = useState({});

    useEffect(() => {
        const versionCheckedStateInit = {};
        const levelCheckedStateInit = {};
        const difficultyCheckedStateInit = {};

        iidxVersionContractionEnum.forEach(value => {
            versionCheckedStateInit[`${value}`] = false;
        });

        iidxLevel.forEach(value => {
            levelCheckedStateInit[`${value}`] = false;
        });

        iidxDifficultyEnum.forEach(value => {
            difficultyCheckedStateInit[`${value}`] = false;
        })

        setVersionChecked(versionCheckedStateInit);
        setLevelChecked(levelCheckedStateInit);
        setDifficultyChecked(difficultyCheckedStateInit);
    }, []);

    useEffect(() => {
        console.log(versionChecked);
    }, [versionChecked]);

    const onVersionCheckBoxHandler = (e) => {
        setVersionChecked({...versionChecked, [e.target.value]: e.target.checked})
    };

    const onLevelCheckBoxHandler = (e) => {
        setLevelChecked({...levelChecked, [e.target.value]: e.target.checked})
    };

    const onDifficultyCheckBoxHandler = (e) => {
        setDifficultyChecked({...difficultyChecked, [e.target.value]: e.target.checked})
    };

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>시리즈별 구분</td>
                        {iidxVersionContractionEnum.slice(0, 14).map(version => {
                            return (
                                <td>
                                    <input type='checkbox'
                                    name='version' 
                                    value={version}
                                    checked={versionChecked[version]} onClick={onVersionCheckBoxHandler} />
                                    {versionChecked[version] ? <b>{version}</b> : version}
                                </td>
                            );
                        })}
                    </tr>
                    <tr>
                        <td></td>
                        {iidxVersionContractionEnum.slice(14).map(version => 
                                <td>
                                    <input type='checkbox'
                                    name='version' 
                                    value={version}
                                    checked={versionChecked[version]} onClick={onVersionCheckBoxHandler} />
                                    {versionChecked[version] ? <b>{version}</b> : version}
                                </td>
                        )}
                    </tr>
                    <tr>
                        <td>레벨별 구분</td>
                        {iidxLevel.map(level => 
                            <td>
                                <input type='checkbox'
                                    name='level' 
                                    value={level}
                                    checked={levelChecked[level]} onClick={onLevelCheckBoxHandler} />
                                    {levelChecked[level] ? <b>{level}</b> : level}
                            </td>
                        )}
                    </tr>
                    <tr>
                        <td>난이도별 구분</td>
                        {iidxDifficultyEnum.map(diff => 
                            <td>
                                <input type='checkbox'
                                    name='difficulty' 
                                    value={diff}
                                    checked={difficultyChecked[diff]} onClick={onDifficultyCheckBoxHandler} />
                                    {difficultyChecked[diff] ? <b>{diff}</b> : diff}
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
        </>
    );
}

// const ChartList = () => {

// }

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
            <Filter />
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