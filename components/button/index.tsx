import React, { FunctionComponent } from 'react';
import { Button as MuiButton } from '@material-ui/core';

interface Props {
    color: 'primary' | 'secondary';
    name: string;
}

const Button: FunctionComponent<Props> = ({ color, name }) => {
    return (
        <>
            <MuiButton color={color} variant="contained">
                {name}
            </MuiButton>
        </>
    );
};
export { Button };
