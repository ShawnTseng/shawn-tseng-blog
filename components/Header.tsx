import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <nav>
      <Link href="/">
        <span className='logo'>BLOG</span>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
        .logo {
          color: var(--geist-foreground);
          display: inline-block;
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
};

export default Header;