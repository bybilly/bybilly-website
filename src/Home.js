import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

// Calculate number of years since my birthday
const birthday = new Date("01 Sep 2002 00:08:00 GMT");
const birthdayDiff = new Date(Date.now() - birthday);
const age = birthdayDiff.getUTCFullYear() - 1970;

const Home = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <About age={age} />
            <Contact />
        </div>
    );
}

export default Home;