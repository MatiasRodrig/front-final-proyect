import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import '../styles/about.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function About() {
    return <>
        <Navbar />
        <section className='about-sectiona'>
            <div className="about-introduction">
                <h1 className="about-title">
                    Más información sobre nuestros miembros
                </h1>
                <p className="about-p">
                    Conoce más sobre nuestros 5 miembros del staff técnico
                </p>
            </div>
            <div className="profile">
                <div className="picture-container">
                    <Link>
                        <img src="https://avatars.githubusercontent.com/u/126116308?v=4" alt="matias" className='picture' />
                    </Link>
                </div>
                <h2 className="name">Matias Rodriguez</h2>


                <div className="media">
                    <Link to={'mailto:mayutefracran@gmail.com'}>
                        <div className="email">
                            <EmailIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>

                    <Link to={"www.linkedin.com/in/matias-rodriguez-5b0877238"}>
                        <div className="github">
                            <GitHubIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>

                    <Link to={'www.linkedin.com/in/matias-rodriguez-5b0877238'}>
                        <div className="linkedin">
                            <LinkedInIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="profile">
                <div className="picture-container">
                    <Link>
                        <img src="https://avatars.githubusercontent.com/u/126520747?v=4" alt="nahum" className='picture' />
                    </Link>
                </div>
                <h2 className="name">Nahum Monsalve</h2>

                <div className="media">
                    <Link to={"mailto:nahummonsalve@gmail.com"}>
                        <div className="email">
                            <EmailIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>

                    <Link to={'https://github.com/Nahumam'}>
                        <div className="github">
                            <GitHubIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>

                    <Link to={'https://www.linkedin.com/in/nahum-monsalve-82165a1a1/'}>
                        <div className="linkedin">
                            <LinkedInIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="profile">
                <div className="picture-container">
                    <Link>
                        <img src="https://avatars.githubusercontent.com/u/24574536?v=4" alt="augusto" className='picture' />
                    </Link>
                </div>
                <h2 className="name">Augusto Alegre</h2>


                <div className="media">
                    <Link to={'mailto:augustogermanalegre@gmail.com'}>
                        <div className="email">
                            <EmailIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>

                    <Link to={'https://github.com/AlegreAugustoGerman'}>
                        <div className="github">
                            <GitHubIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>

                    <Link to={'https://www.linkedin.com/in/alegreaugusto'}>
                        <div className="linkedin">
                            <LinkedInIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="profile">
                <div className="picture-container">
                    <Link>
                        <img src="https://avatars.githubusercontent.com/u/98102850?v=4" alt="catherena" className='picture' />
                    </Link>
                </div>
                <h2 className="name">Catherena</h2>


                <div className="media">
                    <Link to={'mailto:beresovskyc@gmail.com '}>
                        <div className="email">
                            <EmailIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>

                    <Link to={'github.com/icatherena'}>
                        <div className="github">
                            <GitHubIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>

                    <Link to={'https://www.linkedin.com/in/catherena-beresovsky'}>
                        <div className="linkedin">
                            <LinkedInIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="profile">
                <div className="picture-container">
                    <Link>
                        <img src="https://avatars.githubusercontent.com/u/126628867?v=4" alt="julian" className='picture' />
                    </Link>
                </div>
                <h2 className="name">Julián Velasques</h2>


                <div className="media">
                    <Link to={'mailto:julirodriguesvelasques@gmail.com'}>
                        <div className="email">
                            <EmailIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>

                    <Link to={'https://github.com/JuliVelasques'}>
                        <div className="github">
                            <GitHubIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>

                    <Link to={'https://www.linkedin.com/in/julian-rodrigues-velasques-bb4376279 '}>
                        <div className="linkedin">
                            <LinkedInIcon sx={{ fontSize: 50, color: '#333' }} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        <Footer />
    </>;
}

export default About;
