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
          {event.isPublished && event.isPublished === "false"
            ? "Not Published"
            : "Published"}
        </div>
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-center">
        {event.interestCount}
      </td>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
        {event.session && event.session[0].startDate}
      </td>
      <td className="px-4 py-2 font-medium text-gray-700 whitespace-nowrap">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>
          {event.tickets
            ? `$${event.tickets[event.tickets.length - 1].ticketPrice}`
            : "$0"}
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
