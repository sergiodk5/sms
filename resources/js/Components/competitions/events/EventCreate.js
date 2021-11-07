import { useForm } from "@inertiajs/inertia-react";

const EventCreate = ({ competition, races }) => {
    const { data, setData, post, errors } = useForm({
        date: "",
        race: 0,
        athletes: [],
    });

    console.log(competition);
    const handleInput = (e) => {
        console.log(e);
    };

    const gender = (genderId) => {
        return 1 === genderId ? "Men" : 2 === genderId ? "Women" : "Mixed";
    };

    return (
        <form>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight mb-4">
                New Event
            </h2>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6 max-h-full">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 sm:col-span-6">
                            <label
                                htmlFor="date"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Date
                            </label>
                            <input
                                type="datetime-local"
                                name="date"
                                id="date"
                                value={data.date}
                                onChange={handleInput}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="col-span-12 sm:col-span-6">
                            <label
                                htmlFor="race"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Race
                            </label>
                            <select
                                id="race"
                                name="race"
                                value={data.race}
                                onChange={handleInput}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="0">Select Race</option>
                                {0 < races.length && (
                                    <>
                                        {races.map((rc) => (
                                            <option key={rc.id} value={rc.id}>
                                                {rc.title} {gender(rc.gender)}
                                            </option>
                                        ))}
                                    </>
                                )}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EventCreate;
