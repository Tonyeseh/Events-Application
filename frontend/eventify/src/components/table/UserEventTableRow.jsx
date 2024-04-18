const UserEventTableRow = ({ event, handleDelete }) => {
  return (
    <tr className="border-b hover:bg-gray-100 ">
      <td className="w-4 px-4 py-3">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            onclick="event.stopPropagation()"
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 "
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
      >
        {event.title}
      </th>
      <td className="px-4 py-2">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded">
          {event.category}
        </span>
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
        <div className="flex items-center">
          <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
          {event.isPublished ? "Published" : "Not Published"}
        </div>
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
        1
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
        day
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewbox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-2 text-gray-400"
            aria-hidden="true"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
          1.6M
        </div>
      </td>
      <td className="px-4 py-2">$3.2M</td>
      <td className="px-4 py-2 font-medium whitespace-nowrap flex space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          onClick={(e) => {
            handleDelete(e, event._id);
          }}
        >
          <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
        </svg>
      </td>
    </tr>
  );
};

export default UserEventTableRow;
