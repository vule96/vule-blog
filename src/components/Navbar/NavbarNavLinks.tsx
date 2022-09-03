import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { menuItems } from 'src/lib/config/menu';
import { GradientOption } from 'src/lib/stitches/utils/gradient';
import type { FC } from 'src/types/fc';
import { NavbarLink, NavbarLinksContainer } from './NavbarLink';

export interface NavbarLinkItem {
  title: string;
  href: string;
  gradient: GradientOption;
}

export const NavbarNavLinks: FC<{ expanded?: boolean }> = (props) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(-1);

  useEffect(() => {
    if (!router || !router.isReady) return;
    const { asPath: pathname } = router;
    if (pathname.includes('/about')) setActiveLink(0);
    else if (pathname.includes('/blog')) setActiveLink(1);
    else if (pathname.includes('/projects')) setActiveLink(2);
    else if (pathname.includes('/contact')) setActiveLink(3);
    else setActiveLink(-1);
  }, [router]);

  return (
    <NavbarLinksContainer links expanded={props.expanded}>
      {menuItems.map((link, index) => {
        return (
          <li key={index}>
            <NavbarLink
              underline={false}
              gradient={link.gradient}
              title={`${link.title} page`}
              href={link.href}
              aria-current={activeLink === index ? 'page' : undefined}
            >
              <span>{link.title}</span>
            </NavbarLink>
          </li>
        );
      })}
    </NavbarLinksContainer>
  );
};
