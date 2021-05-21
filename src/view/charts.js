import React, { useCallback, useEffect, useReducer, useState } from 'react';
import produce from 'immer';
import { useDispatch, useSelector } from 'react-redux';
import { chartsActions } from '../reducers/charts';
import { Link } from "react-router-dom";

const iidxVersionSet = ['1st/substream', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
                         'RED', 'HAPPY SKY', 'DistorteD', 'GOLD', 'DJ TROOPERS', 'EMPRESS', 'SIRIUS',
                         'Resort Anthem', 'Lincle', 'tricoro', 'SPADA', 'PENDUAL', 'copula', 'SINOBUZ',
                         'CANNON BALLERS', 'Rootage', 'HEROIC VERSE', 'BISTROVER'];

const iidxCurrentVersion = 'BIS';

const iidxVersionContractionSet = ['1st/sub', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
                         'RED', 'SKY', 'DD', 'GOLD', 'DJT', 'EMP', 'SIR',
                         'RA', 'LC', 'tri', 'SPA', 'PEN', 'cop', 'SINO',
                         'CAN', 'Root', 'HERO', 'BIS'];    
                         
const iidxDifficultySet = ['BEGINNER', 'NORMAL', 'HYPER', 'ANOTHER', 'LEGGENDARIA'];

const iidxLevelSet = [...Array(12).keys()].map(value => value + 1);

const Filter = ({isVersionChecked, isLevelChecked, isDifficultyChecked, onVersionCheckBoxHandler, onLevelCheckBoxHandler, onDifficultyCheckBoxHandler}) => {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>시리즈별 구분</td>
                        {iidxVersionContractionSet.slice(0, 14).map((value, index) => {
                            return (
                                <td>
                                    <input type='checkbox'
                                    name='version' 
                                    value={value}
                                    checked={isVersionChecked[index].checked} onChange={onVersionCheckBoxHandler} />
                                    {isVersionChecked[index].checked ? <b>{value}</b> : value}
                                </td>
                            );
                        })}
                    </tr>
                    <tr>
                        <td></td>
                        {iidxVersionContractionSet.slice(14).map((value, index)=> 
                                <td>
                                    <input type='checkbox'
                                    name='version' 
                                    value={value}
                                    checked={isVersionChecked[index+14].checked} onChange={onVersionCheckBoxHandler} />
                                    {isVersionChecked[index+14].checked ? <b>{value}</b> : value}
                                </td>
                        )}
                    </tr>
                    <tr>
                        <td>레벨별 구분</td>
                        {iidxLevelSet.map((value, index) => 
                                <td>
                                    <input type='checkbox'
                                    name='level' 
                                    value={value}
                                    checked={isLevelChecked[index].checked} onChange={onLevelCheckBoxHandler} />
                                    {isLevelChecked[index].checked ? <b>{value}</b> : value}
                                </td>
                        )}
                    </tr>
                    <tr>
                        <td>난이도별 구분</td>
                        {iidxDifficultySet.map((value, index) => 
                            <td>
                                <input type='checkbox'
                                name='difficulty' 
                                value={value}
                                checked={isDifficultyChecked[index].checked} onChange={onDifficultyCheckBoxHandler} />
                                {isDifficultyChecked[index].checked ? <b>{value}</b> : value}
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
        </>
    );
}

const ChartListItem = ({ chart }) => {
    return (
        <tr className="chart">
            <td className='attr1'>{chart.version}</td>
            <td className='attr2'>
                 <Link to={`/chart/${chart.id}`}>{chart.title}</Link>
            </td>
            <td className='attr3'>{chart.artist}</td>
            <td className='attr4'>{chart.diff}</td>
            <td className='attr5'>{chart.lv}</td>
            <td className='attr6'>{chart.notes}</td>
        </tr>
    );
}

const ChartsList = React.memo(({ list, isVersionChecked, isLevelChecked, isDifficultyChecked }) => {
    const filterList = list => list.filter(item => isVersionChecked.find(element => element.value.match(item.version)).checked &&
                    isLevelChecked.find(element => element.value === item.lv).checked &&
                    isDifficultyChecked.find(element => element.value.match(item.diff)).checked);

    return (
        <div>
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
                    {list && filterList(list).map(chart => <ChartListItem chart={chart} />)}
                </tbody>
            </table>
        </div>
    )
});

const Charts = ({ match, location }) => {

    const [ isVersionChecked, setIsVersionChecked ] = useState(
        iidxVersionContractionSet.map(value => {
            return { value, checked: true };
        })
    );

    const [ isLevelChecked, setIsLevelChecked ] = useState(
        iidxLevelSet.map(value => {
            return { value, checked: true };
        })
    );

    const [ isDifficultyChecked, setIsDifficultyChecked ] = useState(
        iidxDifficultySet.map(value => {
            return { value, checked: true };
        })
    );

    const { charts } = useSelector(({ charts }) => ({ charts }));

    const { list } = charts;

    const dispatch = useDispatch();

    const { LOAD_CHARTS } = chartsActions;

    // componentDidMount

    useEffect(() => {
        dispatch(LOAD_CHARTS());
    }, [])

    const onVersionCheckBoxHandler = event => {
        const selectedValue = event.target.value;
        const newState = isVersionChecked.map(value => 
            value.value.match(selectedValue) ? { ...value, checked: event.target.checked } : value
        );
        setIsVersionChecked(newState);
    };

    const onLevelCheckBoxHandler = event => {
        const selectedValue = parseInt(event.target.value);
        const newState = isLevelChecked.map(value => 
            value.value === selectedValue ? { ...value, checked: event.target.checked } : value
        );
        setIsLevelChecked(newState);
    };

    const onDifficultyCheckBoxHandler = event => {
        const selectedValue = event.target.value;
        const newState = isDifficultyChecked.map(value => 
            value.value.match(selectedValue) ? { ...value, checked: event.target.checked } : value
        );
        setIsDifficultyChecked(newState);
    };

    return (
        <>
            <Filter
                isVersionChecked={isVersionChecked}
                isLevelChecked={isLevelChecked}
                isDifficultyChecked={isDifficultyChecked}
                onVersionCheckBoxHandler={onVersionCheckBoxHandler}
                onLevelCheckBoxHandler={onLevelCheckBoxHandler}
                onDifficultyCheckBoxHandler={onDifficultyCheckBoxHandler}
            />
            {charts && <ChartsList 
                list={list}
                isVersionChecked={isVersionChecked}
                isLevelChecked={isLevelChecked}
                isDifficultyChecked={isDifficultyChecked}
            />}
        </>
    )
}

export default Charts;