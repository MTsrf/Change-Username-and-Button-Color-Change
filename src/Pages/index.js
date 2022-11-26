import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Color from '../component/Color'
import UseRefMethod from '../component/useRefMethod'
const HomePage = () => {
    return (
        <>
            <Color />
            <UseRefMethod />
        </>
    )
}

export default HomePage
