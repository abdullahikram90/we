export default function Account() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-bold">John Doe</h3>
          <p className="text-gray-500">john@example.com</p>
        </div>
      </div>

      <ul className="space-y-2">
        <li className="border-b py-2">Open Portals App</li>
        <li className="border-b py-2">Secret Menu</li>
        <li className="border-b py-2">Report a Problem</li>
        <li className="border-b py-2">Help</li>
        <li className="border-b py-2">Logout</li>
        <li className="border-b py-2 text-red-500">Delete Account</li>
      </ul>
    </div>
  );
}
