const Footer = () => {
  return (
    <footer className="bg-genmetal text-white py-6">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} Indian Spice House.</p>
        <div className="space-x-4 mt-2">
          <a href="/privacy" className="hover:text-coral">Privacy Policy</a>
          <a href="/terms" className="hover:text-coral">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;