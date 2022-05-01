import React from 'react'
import { extendTheme, NativeBaseProvider, Text, Box } from 'native-base'

const newColorTheme = {
    brand: {
        900: '#8287af',
        800: '#7c83db',
        700: '#b3bef6',
    },
}
const theme = extendTheme({ colors: newColorTheme })

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
                <Text>This is React Native App With Native Base</Text>
            </Box>
        </NativeBaseProvider>
    )
}
