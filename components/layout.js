import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='goldbg mb-8 py-4'>
        <div className='container mx-auto flex'>
          <a href='https://nutasiasociatii.ro/'>
            <img src="/logo.svg" className="logo" alt="Nuță și Asociații"/>
          </a>
          <div className="menu">
            <a href="https://nutasiasociatii.ro/#about">Despre</a>
            <a href="https://nutasiasociatii.ro/#services">Servicii juridice</a>
            <a href="https://nutasiasociatii.ro/#practice-areas">Arii de practică</a>
            <a href="/">Blog</a>
            <a href="https://nutasiasociatii.ro/#contact">Contact</a>
          </div>
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='goldbg mt-8 py-4'>
        <div className='container mx-auto flex justify-space-between'>
          <span>Alexandru Nuță &copy; All rights reserved</span>
          <div className='footerLinks'>
            <a href='https://www.facebook.com/profile.php?id=100090135618439&mibextid=ZbWKwL'>
            </a>
            <a href='https://www.linkedin.com/in/alexandru-nu%C5%A3%C4%83-ba93811ab/?originalSubdomain=ro'>
            </a>
            <a href='tel:+40783109488'>
            </a>
          </div>
        </div>
        <div className='container mx-auto flex justify-center'>
        </div>
      </footer>
    </div>
  );
}
