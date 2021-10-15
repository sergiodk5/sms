import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

const initialSearchData = {
    name: "",
    last: "",
    guardian: "",
    phone: "",
    mobile: "",
    email: "",
    address: "",
    datefrom: "",
    dateto: "",
    gender: "",
};

export default function Index(props) {
    const [swimmers, setSwimmers] = useState([]);
    const { data, setData, get } = useForm(initialSearchData);

    useEffect(() => {
        setSwimmers(props.swimmers);
        setData({
            name: props.name ? props.name : '',
            last: props.last ? props.last : '',
            guardian: props.guardian ? props.guardian : '',
            phone: props.phone ? props.phone : '',
            mobile: props.mobile ? props.mobile : '',
            email: props.email ? props.email : '',
            address: props.address ? props.address : '',
            datefrom: props.datefrom ? props.datefrom : '',
            dateto: props.dateto ? props.dateto : '',
            gender: props.gender ? props.gender : '',
        });

        return () => {
            setSwimmers([])
        }
    }, [props.swimmers]);

    useEffect(() => {
        setData({
            name: props.name ? props.name : "",
            last: props.last ? props.last : "",
            guardian: props.guardian ? props.guardian : "",
            phone: props.phone ? props.phone : "",
            mobile: props.mobile ? props.mobile : "",
            email: props.email ? props.email : "",
            address: props.address ? props.address : "",
            datefrom: props.datefrom ? props.datefrom : "",
            dateto: props.dateto ? props.dateto : "",
            gender: props.gender ? props.gender : "",
        });

        return () => {
            setData(initialSearchData);
        };
    }, [props]);

    function getYears(bd) {
        let dob = new Date(bd);
        let today = new Date();
        let ageDifMs = today - dob;
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();

        get(route("dashboard.swimmers"), data);
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Swimmers
                </h2>
            }
        >
            <Head title="Swimmers" />

            {props.status && (
                <div className="my-12 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex items-center justify-center w-12 bg-green-500">
                        <svg
                            className="w-6 h-6 text-white fill-current"
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                        </svg>
                    </div>

                    <div className="px-4 py-2 -mx-3">
                        <div className="mx-3">
                            <span className="font-semibold text-green-500 dark:text-green-400">
                                Success
                            </span>
                            <p className="text-sm text-gray-600 dark:text-gray-200">
                                {props.status}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl pt-12 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center px-4 py-5 sm:p-6">
                                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                                    List of Swimmers
                                </h2>
                                <Link
                                    href={route("dashboard.swimmers.create")}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add New Swimmer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <form
                onSubmit={handleSearch}
                className="max-w-7xl py-4 mx-auto sm:px-6 lg:px-8"
            >
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden bg-white border-b border-gray-200 sm:rounded-lg">
                                <h3 className="px-4 py-5 sm:p-6 font-semibold text-xl text-gray-800 leading-tight">
                                    Search
                                </h3>
                                <div className="grid grid-cols-12 gap-6 px-4 py-5 sm:p-6">
                                    <div className="col-span-12 sm:col-span-4">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            onChange={handleOnChange}
                                            value={data.name}
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <label
                                            htmlFor="last"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Last
                                        </label>
                                        <input
                                            type="text"
                                            id="last"
                                            name="last"
                                            onChange={handleOnChange}
                                            value={data.last}
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <label
                                            htmlFor="gender"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Gender
                                        </label>
                                        <select
                                            id="gender"
                                            name="gender"
                                            onChange={handleOnChange}
                                            value={data.gender}
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                        >
                                            <option>Select Gender</option>
                                            <option value="1">Male</option>
                                            <option value="0">Female</option>
                                        </select>
                                    </div>

                                    <div className="col-span-12 sm:col-span-6">
                                        <label
                                            htmlFor="guardian"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Guardian
                                        </label>
                                        <input
                                            id="guardian"
                                            name="guardian"
                                            onChange={handleOnChange}
                                            value={data.guardian}
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Guardian's name"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-6">
                                        <label
                                            htmlFor="address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Address
                                        </label>
                                        <input
                                            id="address"
                                            name="address"
                                            onChange={handleOnChange}
                                            value={data.address}
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Address"
                                        />
                                    </div>

                                    <div className="col-span-12 sm:col-span-4">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            onChange={handleOnChange}
                                            value={data.phone}
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <label
                                            htmlFor="mobile"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Mobile
                                        </label>
                                        <input
                                            id="mobile"
                                            name="mobile"
                                            onChange={handleOnChange}
                                            value={data.mobile}
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Mobile"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            onChange={handleOnChange}
                                            value={data.email}
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="col-span-12 sm:col-span-2">
                                        <label
                                            htmlFor="datefrom"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Year From
                                        </label>
                                        <input
                                            id="datefrom"
                                            name="datefrom"
                                            onChange={handleOnChange}
                                            value={data.datefrom}
                                            type="number"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Year from"
                                            min="1970"
                                            max={new Date().getFullYear()}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-2">
                                        <label
                                            htmlFor="dateto"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Year To
                                        </label>
                                        <input
                                            id="dateto"
                                            name="dateto"
                                            onChange={handleOnChange}
                                            value={data.dateto}
                                            type="number"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Year to"
                                            min="1970"
                                            max={new Date().getFullYear()}
                                        />
                                    </div>

                                    <div className="col-span-12 text-right">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div className="pt-4 pb-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    {0 < swimmers.length && (
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Age
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Gender
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Contact
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Address
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="relative px-6 py-3"
                                                    >
                                                        <span className="sr-only">
                                                            Edit
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {swimmers.map(
                                                    (swimmer, index) => (
                                                        <tr key={index}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="flex items-center">
                                                                    <div className="ml-4">
                                                                        <div className="text-sm font-medium text-gray-900">
                                                                            {
                                                                                swimmer.name
                                                                            }{" "}
                                                                            {
                                                                                swimmer.last
                                                                            }
                                                                        </div>
                                                                        <div className="text-sm text-gray-500">
                                                                            {
                                                                                swimmer.guardian
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {getYears(
                                                                    swimmer.dob
                                                                )}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <span
                                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                                        swimmer.gender
                                                                            ? "bg-blue-100 text-blue-800"
                                                                            : "bg-pink-100 text-pink-800"
                                                                    }`}
                                                                >
                                                                    {swimmer.gender
                                                                        ? "male"
                                                                        : "female"}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-900">
                                                                    {
                                                                        swimmer.land
                                                                    }
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    {
                                                                        swimmer.mobile
                                                                    }
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {
                                                                    swimmer.address
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <Link
                                                                    href={route(
                                                                        "dashboard.swimmers.edit",
                                                                        swimmer.id
                                                                    )}
                                                                    className="text-indigo-600 hover:text-indigo-900"
                                                                >
                                                                    Edit
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
