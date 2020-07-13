import React from 'react';
import sinon from 'sinon';
import faker from 'faker';
import { render, cleanup } from '@testing-library/react';
import Button from '../index';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../../theme';
import { Button as MuiButton } from '@material-ui/core';

const sandbox = sinon.createSandbox();
const {
    random: { number },
    lorem: { word, words },
} = faker;

describe('Button Unit Tests', () => {
    afterEach(() => {
        sandbox.verifyAndRestore();
        cleanup();
    });

    it('should render', () => {
        // Arrange
        sandbox.spy(React, 'createElement');

        // Act
        const { container, debug } = render(
            <ThemeProvider theme={theme}>
                <Button color="primary" name={word()} />
            </ThemeProvider>
        );

        // Assert
        expect(container.querySelector('button')).toBeInTheDocument();
        expect((React.createElement as any).calledWith(MuiButton)).toBe(true);
    });
});
