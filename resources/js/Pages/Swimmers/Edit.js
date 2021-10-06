import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function Edit(props) {
    const { data, setData, put, errors } = useForm({
        name: props.swimmer.name || '',
        last: props.swimmer.last || '',
        dob: props.swimmer.dob || '',
        gender: props.swimmer.gender || '',
        guardian: props.swimmer.guardian || '',
        email: props.swimmer.email || '',
        land: props.swimmer.land || '',
        mobile: props.swimmer.mobile || '',
        address: props.swimmer.address || '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        put(route("dashboard.swimmers.update", props.swimmer.id));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add New Swimmer
                </h2>
            }
        >
            <Head title="Add New Swimmer" />

            <ValidationErrors errors={errors} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <form onSubmit={submit}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="col-span-12 sm:col-span-6">
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    autoComplete="given-name"
                                                    value={data.name}
                                                    onChange={onHandleChange}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-12 sm:col-span-6">
                                                <label
                                                    htmlFor="last"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="last"
                                                    id="last"
                                                    autoComplete="family-name"
                                                    value={data.last}
                                                    onChange={onHandleChange}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-12 sm:col-span-8">
                                                <label
                                                    htmlFor="dob"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Date of Birth
                                                </label>
                                                <input
                                                    type="date"
                                                    name="dob"
                                                    id="dob"
                                                    autoComplete="dob"
                                                    value={data.dob}
                                                    onChange={onHandleChange}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                                                    autoComplete="gender"
                                                    value={data.gender}
                                                    onChange={onHandleChange}
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value="0">
                                                        Female
                                                    </option>
                                                    <option value="1">
                                                        Male
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-span-12">
                                                <label
                                                    htmlFor="guardian"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Guardian
                                                </label>
                                                <input
                                                    type="text"
                                                    name="guardian"
                                                    id="guardian"
                                                    value={data.guardian}
                                                    onChange={onHandleChange}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-12 sm:col-span-4">
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    value={data.email}
                                                    onChange={onHandleChange}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-12 sm:col-span-4">
                                                <label
                                                    htmlFor="land"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Land Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    name="land"
                                                    id="land"
                                                    autoComplete="phone"
                                                    value={data.land}
                                                    onChange={onHandleChange}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-12 sm:col-span-4">
                                                <label
                                                    htmlFor="mobile"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Mobile Phone
                                                </label>
                                                <input
                                                    type="text"
                                                    name="mobile"
                                                    id="mobile"
                                                    autoComplete="mobile"
                                                    value={data.mobile}
                                                    onChange={onHandleChange}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-12">
                                                <label
                                                    htmlFor="address"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Street address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    id="address"
                                                    autoComplete="address"
                                                    value={data.address}
                                                    onChange={onHandleChange}
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
