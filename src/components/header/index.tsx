import {FC, useEffect, useState} from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from "next/link";


const Header: FC = () => {
  const [click,setClick]=useState(false)
  const openMenu = ()=>{
    setClick(true)
  }
  const closeMenu = ()=>{
      setClick(false)
    }
  useEffect(() => {
    if (click) {
      document.body.style.overflow = "hidden";
    }else {
      document.body.style.overflow = "initial";

    }
  }, [click]);

  const smallScreen = useMediaQuery('(max-width:1000px)');
  useEffect(()=>{
    if(smallScreen){
      setClick(false)
    }
  },[smallScreen])

  return (
      <header id="header" className="ct-header" data-id="type-1" itemScope itemType="https://schema.org/WPHeader">
        <div data-device="desktop">
          <div data-row="middle" data-column-set="2">
            <div className="ct-container">
              <div data-column="start" data-placements="1">
                <div data-items="primary">
                  <div className="site-branding" data-id="logo" itemScope itemType="https://schema.org/Organization">
                    <a href="" className="site-logo-container" rel="home">
                      <Link href={'/'}>
                        <img width="1000" height="297" src="https://altsdb.com/wp-content/uploads/2022/05/2022-altsdb-logo-color.png" className="default-logo" alt="AltsDb: The Alternative Investment Database"/>
                      </Link>
                      </a>
                  </div>
                </div>
              </div>
              <div data-column="end" data-placements="1">
                <div data-items="primary">
                  <nav id="header-menu-1" className="header-menu-1" data-id="menu" data-interaction="hover"
                       data-menu="type-1" data-dropdown="type-1:simple" data-responsive="yes" itemScope
                       itemType="https://schema.org/SiteNavigationElement" aria-label="Header Menu">
                    <ul id="menu-top-nav-menu-andy" className="menu" role="menubar">
                      <li id="menu-item-34" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34" role="none">
                        <a href="https://altsdb.com/about/" className="ct-menu-link" role="menuitem">About</a>
                      </li>
                      <li id="menu-item-2600" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2600" role="none">
                        <a href="https://altsdb.com/advisors/" className="ct-menu-link" role="menuitem">Advisors</a>
                      </li>
                      <li id="menu-item-355" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-355" role="none">
                        <a href="https://altsdb.com/news/" className="ct-menu-link" role="menuitem">News</a>
                      </li>
                      <li id="menu-item-354" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-354" role="none">
                        <a href="https://altsdb.com/podcast/" className="ct-menu-link" role="menuitem">Podcast</a>
                      </li>
                      <li id="menu-item-1478" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1478" role="none">
                        <a href="https://altsdb.com/webinars/" className="ct-menu-link" role="menuitem">Webinars</a>
                      </li>
                      <li id="menu-item-820" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-820" role="none">
                        <a href="https://altsdb.com/expo/" className="ct-menu-link" role="menuitem">Alts Expo</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-device="mobile">
          <div data-row="middle" data-column-set="2">
            <div className="ct-container">
              <div data-column="start" data-placements="1">
                <div data-items="primary">
                  <div className="site-branding" data-id="logo" itemScope itemType="https://schema.org/Organization">
                    <Link href={'/'}>
                    <a href="" className="site-logo-container" rel="home">
                      <img width="1000" height="297" src="https://altsdb.com/wp-content/uploads/2022/05/2022-altsdb-logo-color.png" className="default-logo" alt="AltsDb: The Alternative Investment Database"/></a>
                    </Link>
                  </div>
                </div>
              </div>
              <div data-column="end" data-placements="1">
                <div data-items="primary">
                  <button data-toggle-panel="#offcanvas" className="ct-header-trigger ct-toggle " data-design="outline"
                          data-label="right" aria-label="Open off canvas" data-id="trigger" onClick={openMenu}>
                    <span className="ct-label ct-hidden-sm ct-hidden-md ct-hidden-lg">Menu</span>
                    <svg className="ct-icon" width="18" height="14" viewBox="0 0 18 14" aria-hidden="true" data-type="type-1">
                      <rect y="0.00" width="18" height="1.7" rx="1"></rect>
                      <rect y="6.15" width="18" height="1.7" rx="1"></rect>
                      <rect y="12.3" width="18" height="1.7" rx="1"></rect>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {click &&
            // <div className="ct-drawer-canvas">
            <div id="offcanvas" className="ct-panel ct-header active" data-behaviour="right-side">
              <div className="ct-panel-inner">
                <div className="ct-panel-actions">
                  <button className="ct-toggle-close" data-type="type-1" aria-label="Close drawer" onClick={closeMenu}>
                    <svg className="ct-icon" width="12" height="12" viewBox="0 0 15 15">
                      <path
                          d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z"></path>
                    </svg>
                  </button>
                </div>
                <div className="ct-panel-content" data-device="desktop"></div>
                <div className="ct-panel-content" data-device="mobile">
                  <nav className="mobile-menu" data-id="mobile-menu" data-interaction="click" data-toggle-type="type-1"
                       aria-label="Off Canvas Menu">
                    <ul id="menu-top-nav-menu-andy-1" role="menubar">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34" role="none">
                        <a href="https://altsdb.com/about/" className="ct-menu-link" role="menuitem">About</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2600"
                          role="none"><a href="https://altsdb.com/advisors/" className="ct-menu-link"
                                         role="menuitem">Advisors</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-355"
                          role="none"><a href="https://altsdb.com/news/" className="ct-menu-link"
                                         role="menuitem">News</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-354"
                          role="none"><a href="https://altsdb.com/podcast/" className="ct-menu-link"
                                         role="menuitem">Podcast</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1478"
                          role="none"><a href="https://altsdb.com/webinars/" className="ct-menu-link"
                                         role="menuitem">Webinars</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-820"
                          role="none"><a href="https://altsdb.com/expo/" className="ct-menu-link" role="menuitem">Alts
                        Expo</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            // </div>
        }
      </header>

  );
};
export default Header;
