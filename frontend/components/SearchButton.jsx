

import { SearchIcon } from '@heroicons/react/solid';

export default function SearchButton() {
  return (
    <button className="flex w-3/4 px-3 mt-8 m-2 items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <SearchIcon className="w-5 h-5  text-gray-700" />   Search  
    </button>
  );
}
