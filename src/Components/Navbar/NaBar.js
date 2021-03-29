import React from 'react';
import '../../../node_modules/materialize-css/dist/js/materialize';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../../../node_modules/jquery/dist/jquery';

const NavBar = () => {


    const SmoothScroll = () => {
        return(
            <section>
                <div className="navbar-fixed">
                    <nav>
                        <div className="container">
                            <div className="nav-wrapper">
                                <AnchorLink href="!#" className="brand-logo">My Logo</AnchorLink>
                                <AnchorLink href="!#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></AnchorLink>
                                <ul className="right hide-on-med-and-down">
                                    <li><AnchorLink href="">Home</AnchorLink></li>
                                    <li><AnchorLink href="">Blog</AnchorLink></li>
                                    <li><AnchorLink href="">Our Work</AnchorLink></li>
                                    <li><AnchorLink href="">About</AnchorLink></li>
                                    <li><AnchorLink href="">Contact</AnchorLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li><AnchorLink href="#">Home</AnchorLink></li>
                    <li><AnchorLink href="#">Blog</AnchorLink></li>
                    <li><AnchorLink href="#">Our Work</AnchorLink></li>
                    <li><AnchorLink href="#">About</AnchorLink></li>
                    <li><AnchorLink href="#">Contact</AnchorLink></li>
                </ul>
            </section>
        )
    }

    return(
        <>
        <SmoothScroll />
        </>
    );
}

export default NavBar;