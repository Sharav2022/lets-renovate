import { COMPANY_NAME, HeaderItems, SocialLinks } from "../../../globals/mock";
import classes from "./header.module.css";
import LogoIcon from "../../../assets/icons/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "../../../assets/icons/menu.svg";
import { useEffect, useState } from "react";
import Menu from "../Menu";
import useIsMobile from "../../hooks/useIsMobile";
import Dropdown from "../../core/Dropdown";
import Image from "next/image";

const Header = (props) => {
  const router = useRouter();

  const { asPath } = router;

  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useIsMobile({ breakpoint: 992 });

  useEffect(() => {
    if (!isMobile) {
      setShowMenu(false);
    }
  }, [isMobile]);

  const goToHome = () => {
    router.push("/");
  };

  const [hoverIndex, setHoverIndex] = useState();

  const socialLinkHandler = (url) => {
    window.open(url, "blank");
  };

  return (
    <header className={classes.header}>
      <div className={"container " + classes.container}>
        <div className={classes.logo_container} onClick={goToHome}>
          <div className={classes.logo}>
            <LogoIcon />
          </div>
          <span>{COMPANY_NAME}</span>
        </div>
        <div className={classes.right_container}>
          {HeaderItems.map((item, index) => (
            <div
              className={classes.wrapper}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex()}
            >
              <Link key={item.id} passHref href={"/" + item.url} legacyBehavior>
                <a
                  className={classes.item}
                  data-active={asPath === "/" + item.url ? "true" : undefined}
                >
                  {item.title}
                </a>
              </Link>
              {item.child && index === hoverIndex && (
                <Dropdown items={item.child} />
              )}
            </div>
          ))}
           <div
              className={classes.wrapper}
            >
               <a
                  className={classes.item}
                  href="tel:123-456-7890"
                >
                  123-456-7890
                </a>
            </div>
        </div>
        <div className={classes.menu} onClick={() => setShowMenu(true)}>
          <MenuIcon />
        </div>
      </div>
      {isMobile && showMenu && <Menu closeHandler={() => setShowMenu(false)} />}
    </header>
  );
};

export default Header;
