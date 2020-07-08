import React from './node_modules/react'
import sinon from './node_modules/sinon'
import faker from './node_modules/faker'
import {
    render,
    cleanup,
    fireEvent,
} from './node_modules/@testing-library/react'
import { Button } from '../index'
import { ThemeProvider } from './node_modules/@material-ui/core/styles'
import { theme } from '../../../theme'
import MuiButton from './node_modules/@material-ui/core/Button'

const sandbox = sinon.createSandbox()
const {
    random: { number },
    lorem: { word, words },
} = faker

describe('Button Unit Tests', () => {
    afterEach(() => {
        sandbox.verifyAndRestore()
        cleanup()
    })

    it('should render', () => {
        // Arrange
        sandbox.spy(React, 'createElement')

        // Act
        const { container, debug } = render(
            <ThemeProvider theme={theme}>
                <Button color="primary" name={word()} />
            </ThemeProvider>
        )

        // Assert
        expect(container.querySelector('button')).toBeInTheDocument()
        expect((React.createElement as any).calledWith(MuiButton)).toBe(true)
    })
})
