import React, { FunctionComponent } from 'react';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

interface Props extends ButtonProps {
    color: 'primary' | 'secondary';
}

const Button: FunctionComponent<Props> = ({ color, children }) => {
    const theme = useTheme();

    return (
        <MuiButton
            variant="contained"
            color={color}
            style={{ backgroundColor: theme.palette.secondary.main }}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
