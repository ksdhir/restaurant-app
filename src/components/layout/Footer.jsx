const Footer = () => {
  return (
    <footer className="bg-secondary text-background py-6">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} Indian Spice House.</p>
        <div className="space-x-4 mt-2">
          {/* Todo change to Links */}
          <a href="/privacy" className="hover:text-accent">Privacy Policy</a>
          <a href="/terms" className="hover:text-accent">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;