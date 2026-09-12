export function Footer({
  copy,
}: {
  copy: { role: string; socials: readonly string[]; copyright: string };
}) {
  return (
    <footer className="site-footer section-grid">
      <div>
        <a className="brand" href="#top">
          RUSTAM
        </a>
        <p>{copy.role}</p>
      </div>
      <div className="footer-links">
        {copy.socials.map((social) => (
          <a href="#contact" key={social}>
            {social}
          </a>
        ))}
      </div>
      <p className="copyright">{copy.copyright}</p>
    </footer>
  );
}
