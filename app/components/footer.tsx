export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Logo, Tagline, Copyright, Links */}
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold">S1</span>
            </div>
            <p className="mt-2 text-lg font-semibold">
              A better way to take your LLMs online.
            </p>
            <p className="mt-1 text-sm">
              © Nen Labs • Inc. 2025.
            </p>
            <div className="mt-2 flex space-x-4">
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Right Section: Community Links */}
          <div>
            <h3 className="text-lg font-semibold">Join the Community</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="https://twitter.com" className="hover:text-green-400">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com" className="hover:text-green-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.com" className="hover:text-green-400">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-6 flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 transform rotate-45"></div>
          <span className="text-green-500 text-sm font-medium">
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}