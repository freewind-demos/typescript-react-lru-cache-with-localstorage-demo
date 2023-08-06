import React, {FC, useCallback, useState} from 'react';
import './Hello.pcss';
import {fetchSlowData} from "./fetchSlowData";
import {cache} from "./cache";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [data, setData] = useState<string>('');
    const fetchData = useCallback(async (key: string) => {
        setData('');
        if (cache.has(key)) {
            setData(cache.get(key) as string)
        } else {
            const value = await fetchSlowData(key)
            cache.set(key, value);
            setData(value);
        }
    }, [])
    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <div>
            Fetch Data:
            <button onClick={() => fetchData('aaa')}>aaa</button>
            <button onClick={() => fetchData('bbb')}>bbb</button>
            <button onClick={() => fetchData('ccc')}>ccc</button>
            <button onClick={() => fetchData('ddd')}>ddd</button>
            <button onClick={() => fetchData('eee')}>eee</button>
        </div>

        <div>Date: {data}</div>
    </div>;
}
