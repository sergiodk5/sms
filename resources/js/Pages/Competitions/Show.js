import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { TabList, TabContent } from "@/Components/Tabs";
import Events from "@/Components/competitions/Events";
import Information from "@/Components/competitions/Information";
import PageModal from "@/Components/PageModal";
import EventCreate from "@/Components/competitions/events/EventCreate";

const Show = (props) => {
    const [activeTab, setActiveTab] = useState("info");
    const [newEventModal, setNewEventModal] = useState(false);

    const handleModalNewEvent = () => {
        setNewEventModal(!newEventModal);
    };

    // console.log(props.competition)

    const dateString = (d) => {
        const ev = new Date(d);

        return ev.toLocaleString;
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {props.competition.title}
                </h2>
            }
        >
            <Head title={props.competition.title} />

            <div className="max-w-7xl pt-12 mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="relative px-4 py-5 sm:p-6">
                                <div className="absolute top-5 right-6">
                                    {"info" === activeTab && (
                                        <Link
                                            href={route(
                                                "dashboard.competitions.edit",
                                                props.competition.id
                                            )}
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 leading-6 cursor-pointer"
                                        >
                                            <span className="mr-2">Edit</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Link>
                                    )}

                                    {"events" === activeTab && (
                                        <button
                                            onClick={handleModalNewEvent}
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        >
                                            <span className="mr-2">
                                                Add Event
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                <ul className="list-reset flex border-b">
                                    <TabList
                                        name="info"
                                        setActive={setActiveTab}
                                        title="Information"
                                        active={activeTab}
                                    />
                                    <TabList
                                        name="events"
                                        setActive={setActiveTab}
                                        title="Events"
                                        active={activeTab}
                                    />
                                </ul>
                                <TabContent active={activeTab} tab="info">
                                    <Information cmp={props.competition} />
                                </TabContent>
                                <TabContent active={activeTab} tab="events">
                                    <Events events={props.competition.events} />
                                    {newEventModal && (
                                        <PageModal
                                            closeModal={handleModalNewEvent}
                                        >
                                            <EventCreate
                                                competition={props.competition}
                                                races={props.races}
                                            />
                                        </PageModal>
                                    )}
                                </TabContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;
