import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>This is a non-commercial app made for educational purposes. Illustrations by <a href="https://dribbble.com/illiyinstudio">@illiyinstudio</a>.</p>
      <div className="link-container">
        <div className="link-item">
          <img src="/icons/dribble-icon.svg" alt="Dribbble" />
          <span className="link-name">Dribbble</span>
          <p className="link-url" style={{ backgroundColor: 'pink' }}>
            <a href="https://dribbble.com/illiyinstudio" target="_blank" rel="noopener noreferrer">https://dribbble.com/illiyinstudio</a>
          </p>
        </div>

        <div className="link-item">
          <img src="/icons/behance-icon.svg" alt="Behance" />
          <span className="link-name">Behance</span>
          <p className="link-url" style={{ backgroundColor: 'lightblue'}}>
            <a href="https://www.behance.net/illiyin" target="_blank" rel="noopener noreferrer">https://www.behance.net/illiyin</a>
          </p>
        </div>

        <div className="link-item">
          <img src="/icons/gmail-icon.svg" alt="Gmail" />
          <span className="link-name">Gmail</span>
          <p className="link-url" style={{ backgroundColor: 'lightgreen'}}>
            <a href="mailto:illustralydesign@gmail.com" target="_blank" rel="noopener noreferrer">mailto:illustralydesign@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;