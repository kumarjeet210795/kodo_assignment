module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '^axios$': require.resolve('axios'),
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: 'jsdom',
};