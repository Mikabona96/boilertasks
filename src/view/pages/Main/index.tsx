// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    return (
        <Container>
            main
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
