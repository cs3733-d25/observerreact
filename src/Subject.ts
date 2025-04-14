import {Observer} from "./Observer.ts";
import parse from 'html-react-parser';


// A concrete subject contains state and notifies observers when that state changes
export class DecimalSubject {
    public constructor() {
    }
    private observers: Observer[] = [];

    // Attaching and detaching observers to this subject
    public attach(observer: Observer): string {
        const exists = this.observers.includes(observer);
        if (!exists) {
            this.observers.push(observer);
            return ("Subject: An observer has been attached");
        } else {
            return ("Subject: Observer is already attached");
        }
    }

    public detach(observer: Observer): string {
        const NOT_FOUND = -1;
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == NOT_FOUND) {
            return ("Subject: The observer does not exist");
        } else {
            this.observers.splice(observerIndex, 1);
            return ("Subject: Observer has been detached");
        }
    }

    // Notify observers of a change in state, so they can update themselves
    public notify(): string {
        let changeMsg: string = ``;
        for (const observer of this.observers) {
            changeMsg += `<br />${observer.update(this)}`;
        }
        return (`Subject: Notifying observers of a change in state, so they can update themselves ${changeMsg}`);
    }

    private _state: number = 0;

    get state(): number {
        return this._state;
    }

    // Changes in state result in Observers being notified to update themselves
    public setState(newState: number): string | JSX.Element | JSX.Element[] {
        this._state = newState;
        const notifyMsg: string = `<hr />Decimal value changed to ${this._state} <br /> ${this.notify()}`;
        return parse(notifyMsg);
    }
    // Additional Subject methods would appear below
}

