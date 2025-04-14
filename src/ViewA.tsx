import {DecimalSubject} from "./Subject.ts";

export default function ViewA(props: { subject: DecimalSubject; }) {
    const value: DecimalSubject = props.subject;
    return (
        <>
            {value.state}
            <br />
        </>
    )
}