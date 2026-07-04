export default function Footer() {
  return (
    <footer className="container-px py-10 border-t border-border">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-xs text-muted">
        <p>Designed &amp; built by Vatsal Kumar</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
