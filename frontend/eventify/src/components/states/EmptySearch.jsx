const EmptySearch = () => {
  return (
    <>
      <div className="py-12 mx-4 max-w-full max-h-screen grow bg-white">
        <div className="mx-auto">
          <button className="align-center p-12 border-gray-300 border-dashed border-2 rounded-lg w-full h-full relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mx-auto text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <span className="text-grey-900 font-bold block text-sm mt-4">
              Could not find an event matching your search
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default EmptySearch;
