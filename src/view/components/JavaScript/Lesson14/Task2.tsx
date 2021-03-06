/* eslint-disable max-len */
import React, { FC } from 'react';

class CleanerRobot {
    initialEnergy: number
    energy: number
    constructor(initialEnergy: number = 0) {
        this.initialEnergy = initialEnergy;
        this.energy = initialEnergy;
    }

    MAX_ENERGY_CAPACITY = 100;
    setEnergy(nrg: number) {
        this.energy = nrg;
        if (nrg > this.MAX_ENERGY_CAPACITY) {
            throw new Error('New energy level can not be more than 100.');
        }
        if (nrg < 0) {
            throw new Error('New energy level can not be less than 0.');
        }
    }

    getEnergy() {
        return this.energy;
    }
}

const cleanerRobot = new CleanerRobot(22);

export const Task2: FC = () => {
    /* Текущий заряд батареи: 22 */
    console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

    cleanerRobot.setEnergy(55);

    /* Текущий заряд батареи: 55 */
    console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

    try {
    // eslint-disable-next-line no-new
        new CleanerRobot(-1);
    } catch (error) {
        if (error instanceof Error) {
        /* Error: New energy level can not be less than 0. */
            console.log(`${error.name}: ${error.message}`);
        }
    }

    try {
        cleanerRobot.setEnergy(-22);
    } catch (error) {
        if (error instanceof Error) {
        /* Error: New energy level can not be less than 0. */
            console.log(`${error.name}: ${error.message}`);
        }
    }

    try {
        cleanerRobot.setEnergy(101);
    } catch (error) {
        if (error instanceof Error) {
        /* Error: New energy level can not be less than 0. */
            console.log(`${error.name}: ${error.message}`);
        }
    }

    // function CleanerRobot(initialEnergy = 0 /* Изначальный заряд батареи */) {
    //     this.getEnergy = getEnergy;
    //     this.setEnergy = setEnergy;

    //     const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
    //     let energy = null;

    //     this.setEnergy(initialEnergy);
    //     function getEnergy() {
    //         // Решение
    //         return energy;
    //     }
    //     function setEnergy() {
    //         // Решение

    //         let arg = arguments[ 0 ];

    //         energy = arg;
    //         if (arg > MAX_ENERGY_CAPACITY) {
    //             throw new Error('New energy level can not be more than 100.');
    //         }
    //         if (arg < 0) {
    //             throw new Error('New energy level can not be less than 0.');
    //         }
    //     }
    // }


    return (
        <div>
            <h1>Задача 2.</h1>
            <div>
                * Добавьте роботу геттер и сеттер для приватного свойства energy.
                * Нужно, чтобы внешний код мог узнать заряд батареи робота.
                *
                * Условия:
                * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять.
                *
                * Генерировать ошибки если:
                * - новый заряд батареи устанавливается в значении меньшем, чем 0;
                * - новый заряд батареи устанавливается в значении большем, чем значение MAX_ENERGY_CAPACITY;
                * - при создании экземпляра CleanerRobot изначальный уровень энергии зада в не рамок допустимого диапазона.
                */
            </div>
        </div>
    );
};

