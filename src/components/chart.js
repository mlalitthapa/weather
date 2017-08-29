import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(numbers) {

    let total = 0;

    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return (total / numbers.length).toFixed(2);

}

export default (props) => {

    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="mean" />
            </Sparklines>
            <p>
                <strong>
                    {average(props.data)} {props.unit}
                </strong>
            </p>
        </div>
    );

}