import React, {FC, useCallback, useState} from 'react';
import './Hello.pcss';
import {fetchSlowData} from "./fetchSlowData";
import {LocalStorageCache} from "./LocalStorageCache";

type Props = {};

const cache = new LocalStorageCache();

export const Hello: FC<Props> = ({}) => {
    const [data, setData] = useState<string | undefined>('');
    const fetchData = useCallback(async (key: string) => {
        setData('');
        setData(await cache.getOrFetch(key, () => fetchSlowData(key)))
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
