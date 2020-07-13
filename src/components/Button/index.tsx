import React, { FunctionComponent } from 'react';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';

interface Props extends ButtonProps {
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
