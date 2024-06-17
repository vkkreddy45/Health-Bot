import {Demo} from './demo';
import Features from './features';
import Hero from './hero';
import Navbar from './navbar';

export default function Base() {
    return <>
    <Navbar/>
    <Hero videoSrc="./ani_video.mp4"/>
    <Features/>
    <Demo videoSrc="./Promotional.mp4"/>
    </>
}
