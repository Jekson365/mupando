import React from 'react'
import { Attached } from './Attached'
import { Content } from './Content'
import { Footer } from './Footer'
import { Home } from './Home'

export const Container = () => {
    return (
        <>
            <Home />
            <Content/>
            <Attached/>
            <Footer/>
        </>
    )
}
