//16-12-24
import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
    return (
        <div className="about-us-page-container">
            <div className='text-aboutUs'>
                {/* חלק באנגלית */}
                <h1>Who are we?</h1>
                <p>
                    Imagine a place where all the knowledge, experience, and connections you need to succeed in tech come together with the click of a button. A place where you can ask professional questions, consult with experts, share insights, and get quick, accurate answers – all in Hebrew and at the speed of WhatsApp, for free.
                </p>
                <p>
                    HiTechistim is not just a community – it’s a platform that connects leading professionals in the tech industry, fosters collaboration, and helps advance you, your career, and the organizations you work for.
                </p>
                <p>
                    The initiative was founded in 2017 by the community’s founder, Gabriel Hakimi, who identified the critical need for knowledge sharing in the infinite tech world. What started as a simple idea quickly became one of the most talked-about and popular initiatives in Israel.
                </p>
                <h2>What will you find here?</h2>
                <ul>
                    <li>
                        Professional WhatsApp groups by field – QA, development, DevOps, automation, managers, testers, automation engineers, HR, and more, where you can share knowledge, ask professional questions, consult with experts, and receive quick and efficient answers.
                    </li>
                    <li>
                        High-quality, relevant content, including professional articles, details on meetups and tech events, and enriching, empowering meetups at the highest level in Israel.
                    </li>
                </ul>
                <p>We’ve gathered all the groups in one place!</p>
                <p>
                    Choose the group that fits you, join, and become part of a strong, leading community that is driving Israeli tech forward.
                </p>
                <h2>HiTechistim – the place where knowledge, experience, and connections create meaningful solutions and changes!</h2>
            </div>
        </div>
    );
}
