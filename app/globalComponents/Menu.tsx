import Link from 'next/link';

const Menu = () => {
  return (
    <div className="bg-gray-800 p-4">
      <div className="max-w-2xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Nextjs</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/profile">
              <p className="text-white hover:text-gray-300">Perfil</p>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <p className="text-white hover:text-gray-300">Products</p>
            </Link>
          </li>
          <li>
            <Link href="/tasks">
              <p className="text-white hover:text-gray-300">Tasks</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;