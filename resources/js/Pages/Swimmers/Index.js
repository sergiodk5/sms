import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Index(props) {
    const [swimmers, setSwimmers] = useState([]);

    useEffect(() => {
        setSwimmers(props.swimmers);
    }, [props.swimmers]);

    function getYears(bd) {
        let dob = new Date(bd);
        let today = new Date();
        let ageDifMs = today - dob;
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
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

            <div className="max-w-7xl py-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden bg-white border-b border-gray-200 sm:rounded-lg">
                                <div className="grid grid-cols-12 gap-6 px-4 py-5 sm:p-6">
                                    <div className="col-span-12 sm:col-span-4">
                                        <input
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <input
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <input
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Guardian's name"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <input
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <input
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Mobile"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <input
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="col-span-12 sm:col-span-4">
                                        <input
                                            type="text"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <input
                                            type="date"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="dd-mm-yyyy"
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-4">
                                        <input
                                            type="date"
                                            className="w-full px-6 text-left text-xs font-medium text-gray-500 bg-white border border-gray-300 rounded-md focus:border-indigo-400 focus:outline-none"
                                            placeholder="to"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                                                            ? "bg-green-100 text-green-800"
                                                                            : "bg-red-100 text-red-800"
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
