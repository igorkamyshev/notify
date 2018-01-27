import Background from '../components/background'
import Footer from '../components/footer'
import Head from '../components/head'
import Header from '../components/header'
import Scripts from '../components/scripts'
import Section from '../components/section'

import sections from '../data/sections'


export default () =>
    <div>
        <Head title={'notify'} />

        <div id="wrapper">
            <Header title={'notify'} links={sections.map(section => section.name)}>
                <p>
                    Free service for sending notifications by public API.
                    <br />
                    Use this site or deploy <a href="https://hub.docker.com/r/igorkamyshev/notify/" target="_blank">Docker container</a> on your server.
                    <br />
                    Code of this project hosted on <a href="https://github.com/TheNovel/notify" target="_blank">GitHub</a>
                </p>
            </Header>

            <div id="main">
                {sections.map((section, index) =>
                    <Section key={index} name={section.name} cover={section.cover}>
                        {section.description}
                        <pre>{JSON.stringify(section.request, null, 4)}</pre>
                    </Section>
                )}
            </div>

            <Footer name={'notify'} />
        </div>

        <Background />

        <Scripts />
    </div>
