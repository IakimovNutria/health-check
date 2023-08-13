import {Text} from "react-native";
import BgImageScreen from "../components/BgImageScreen";
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory';
import { useEffect, useState } from 'react';
import { StorageKeys } from "../constants/enums";
import {getItem} from "../storage/storage";
import {getDate, getDateKey} from "../tools/func";

function Statistic() {
    const [graphs, setGraphs] = useState([]);
    const [a, setA] = useState('');
    useEffect(() => {
        const currentDate = getDate(new Date());
        getItem(StorageKeys.DATE_START)
            .then((dateStart) => {
                setA(dateStart);
                const f = (date, data, callBack) => {
                    if (date > currentDate) {
                        callBack(data);
                    }
                    getItem(getDateKey(StorageKeys.HEART_RATE, new Date(date))).then((rate) => {
                        data.push({x: new Date(date), y: rate});
                        f(new Date(date.getDate() + 1), data);
                    });
                };
                f(dateStart, [], (res) =>
                    setGraphs((graphs) => graphs + [{
                        name: 'Утренняя чсс',
                        data: res,
                    }])
                );
            });
    }, []);

    return (
        <BgImageScreen>
            <Text>hi</Text>
            <Text>{a}</Text>
            <VictoryChart>
                <VictoryArea data={[{x: 1, y: 1}, {x: 2, y: 2}]}/>
                <VictoryAxis/>
            </VictoryChart>
            <VictoryChart>
                <VictoryArea data={[{x: 1, y: 1}]}/>
                <VictoryAxis/>
            </VictoryChart>
            {
                graphs.map((graph) => (
                    <>
                        <Text>{graph.name}</Text>
                        <VictoryChart>
                            <VictoryArea data={graph.data}/>
                            <VictoryAxis/>
                        </VictoryChart>
                    </>
                ))
            }
        </BgImageScreen>
    );
}

export default Statistic;
