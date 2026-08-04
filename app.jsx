/* global React, ReactDOM */
const { useEffect, useState } = React;

function App() {
  const [privacyOpen, setPrivacyOpen] = useState(window.location.hash === '#privacidade');

  useEffect(() => {
    const syncPrivacy = () => setPrivacyOpen(window.location.hash === '#privacidade');
    window.addEventListener('hashchange', syncPrivacy);
    return () => window.removeEventListener('hashchange', syncPrivacy);
  }, []);

  const closePrivacy = () => {
    if (window.location.hash === '#privacidade') {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
    setPrivacyOpen(false);
  };

  const logo = 'assets/zera-logo.png';

  return (
    <>
      <div className="bg-stack">
        <div className="grid-lines"/>
        <div className="glow-a"/>
        <div className="glow-b"/>
        <ParticleNetwork density={32} intensity={1}/>
      </div>

      <CustomCursor/>

      <div className="app">
        <Nav logo={logo}/>
        <Hero/>
        <Services/>
        <Products/>
        <About/>
        <Tech/>
        <Sectors/>
        <FAQ/>
        <Contact/>
        <Footer logo={logo}/>
      </div>

      {privacyOpen && <PrivacyPolicy onClose={closePrivacy}/>}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
