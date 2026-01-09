export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <div className="footerTitle">shoppy</div>
          <div className="muted">
            Static demo storefront (no payments, no real orders).
          </div>
        </div>
        <div className="muted">© {new Date().getFullYear()} shoppy</div>
      </div>
    </footer>
  );
}
