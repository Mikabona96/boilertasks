import React, { FC, useEffect } from 'react';

export const Task1: FC = () => {
    useEffect(() => {
        const a = 2;
        const b = 1;
        let result: boolean | null = null;

        a + b < 4 ? result = true : result = false;

        console.log(result);
    }, []);

    return (
        <h1>
            Task 1 result in console
        </h1>
    );
};
