import { Navbar, SlidingNav } from "@overdog/fn"

new Navbar("#navbar-sticky", {
    behavior: "sticky"
 }).init()

 new SlidingNav("#sidepanel-button-wrapper", {
    overlaySelector: "#overlay"
 }).init()