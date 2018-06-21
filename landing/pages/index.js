import Background from '../components/background' // eslint-disable-line no-unused-vars
import Footer from '../components/footer' // eslint-disable-line no-unused-vars
import Head from '../components/head' // eslint-disable-line no-unused-vars
import Header from '../components/header' // eslint-disable-line no-unused-vars
import Scripts from '../components/scripts' // eslint-disable-line no-unused-vars
import Section from '../components/section' // eslint-disable-line no-unused-vars

import sections from '../data/sections'

export default () =>
    <div>
        <Head title={'notify'} />

        <div id="wrapper">
            <Header title={'notify'} links={sections.map(section => section.name)}>
                <p>
                    Free service for sending notifications via public API.
                    <br />
                    Use this site or deploy a <a href="https://hub.docker.com/r/igorkamyshev/notify/" target="_blank">Docker container</a> on your server.
                    <br />
                    Sourse code is hosted on <a href="https://github.com/TheNovel/notify" target="_blank">GitHub</a>
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
