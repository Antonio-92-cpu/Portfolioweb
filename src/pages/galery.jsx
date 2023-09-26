---
import "../components/reset.css"
import Navbar from '../components/Navbar';
import { Image } from 'astro:assets';
import myImage from "../fondo.jpg";
import Footer from "../components/Footer.astro";
---
<body>
<Navbar client:load/>
<Image src={myImage} alt="Un pájaro sentado sobre un nido de huevos." width="1050"/>
<Footer/>
</body>
