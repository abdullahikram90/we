export default function Account() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-600 p-5 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
        {/* Profile Section */}
        <div className="flex items-center space-x-4 pb-4 border-b border-white/20">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-cyan-400 shadow-lg"
          />
          <div>
            <h3 className="text-xl font-bold text-white">John Doe</h3>
            <p className="text-gray-300">john@example.com</p>
          </div>
        </div>

        {/* Menu Section */}
        <ul className="space-y-2 mt-6">
          <li className="p-3 rounded-lg bg-white/10 text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 transition-all duration-200 cursor-pointer">
            Open Portals App
          </li>
          <li className="p-3 rounded-lg bg-white/10 text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 transition-all duration-200 cursor-pointer">
            Secret Menu
          </li>
          <li className="p-3 rounded-lg bg-white/10 text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 transition-all duration-200 cursor-pointer">
            Report a Problem
          </li>
          <li className="p-3 rounded-lg bg-white/10 text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 transition-all duration-200 cursor-pointer">
            Help
          </li>
          <li className="p-3 rounded-lg bg-white/10 text-white hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 transition-all duration-200 cursor-pointer">
            Logout
          </li>
          <li className="p-3 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer">
            Delete Account
          </li>
        </ul>
      </div>
    </div>
  );
}
