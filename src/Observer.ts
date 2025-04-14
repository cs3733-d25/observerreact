/**
 * Observer interface and concrete observers - BinaryObserver, OctalObserver, and HexObserver
 */
import {Subject, DecimalSubject} from "./Subject.ts";

export interface Observer {
    update(subject: Subject): string;
}

// Concrete Observers react to updates sent by the Subject they are attached to
export class BinObserver implements Observer {
    public update(subject: DecimalSubject): string {
        const newState: number = subject.state;
        return (`Binary: ${newState.toString(2)}`);
    }
}

export class OctObserver implements Observer {
    public update(subject: DecimalSubject): string {
        const newState: number = subject.state;
        return (`Octal: ${newState.toString(8)}`);
    }
}

export class HexObserver implements Observer {
    public update(subject: DecimalSubject): string {
        const newState: number = subject.state;
        return (`Hexadecimal: ${newState.toString(16)}`);
    }
}

