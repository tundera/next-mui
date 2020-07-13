import React, { FunctionComponent } from 'react';
import { Button as MuiButton } from '@material-ui/core';

interface Props {
    color: 'primary' | 'secondary';
}

const Button: FunctionComponent<Props> = ({ color, children }) => {
    return (
        <MuiButton color={color} variant="contained">
            {children}
        </MuiButton>
    );
};
export default Button;
