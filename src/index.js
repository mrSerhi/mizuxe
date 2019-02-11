import "bootstrap";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "./scss/main.scss"; // styles

// JS
import { setDataInFooter, getDataElement } from "./js/data";
import smootScroll from "./js/smooth-scroll";

getDataElement("footer-date", setDataInFooter()); // set up date in to footer section
smootScroll("mainNavBar");
