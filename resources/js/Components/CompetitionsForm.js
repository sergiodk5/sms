import React from "react";

const CompetitionsForm = ({
    title,
    date_start,
    date_end,
    location,
    submit,
    setData,
    buttonName,
    hasDelete,
    shouldDelete,
}) => {
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        submit(e);
    };

    const handleDelete = (e) => {
        e.preventDefault();

        shouldDelete(e);
    };

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <form onSubmit={handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="col-span-12">
                                            <label
                                                htmlFor="title"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Competition
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                autoComplete="competition-name"
                                                value={title}
                                                onChange={onHandleChange}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-12 sm:col-span-4">
                                            <label
                                                htmlFor="location"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                name="location"
                                                id="location"
                                                autoComplete="competition-location"
                                                value={location}
                                                onChange={onHandleChange}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-12 sm:col-span-4">
                                            <label
                                                htmlFor="date_start"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Starts
                                            </label>
                                            <input
                                                type="date"
                                                name="date_start"
                                                id="date_start"
                                                autoComplete="competition-date_start"
                                                value={date_start}
                                                onChange={onHandleChange}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-12 sm:col-span-4">
                                            <label
                                                htmlFor="date_end"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Ends
                                            </label>
                                            <input
                                                type="date"
                                                name="date_end"
                                                id="date_end"
                                                autoComplete="competition-date_end"
                                                value={date_end}
                                                onChange={onHandleChange}
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`px-4 py-3 bg-gray-50 sm:px-6 ${
                                        hasDelete
                                            ? "flex justify-between"
                                            : "text-right"
                                    }`}
                                >
                                    {hasDelete && (
                                        <button
                                            onClick={handleDelete}
                                            type="button"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        >
                                            Delete
                                        </button>
                                    )}

                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        {buttonName}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompetitionsForm;
