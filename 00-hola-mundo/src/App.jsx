import './App.css'

import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUser = (userName => `@${userName}`)
    return (
        <section className='App'>
            <TwitterFollowCard
                formatUserName={formatUser}
                userName="bellesdani"
                name="Dani pruebaaaaaaaaaaaaa" />
            <TwitterFollowCard formatUserName={formatUser}
                userName="danicer"
                name="Dani prueba 2" />
            <TwitterFollowCard
                formatUserName={formatUser}
                userName="Elonmusk"
                name="Dani prueba 3" />
        </section>
    )
}