import React, { useState, useEffect } from 'react'
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import { TabList, TabContent } from "@/Components/Tabs";
import Events from '@/Components/competitions/Events';
import Information from '@/Components/competitions/Information';



const Show = (props) => {
    const [activeTab, setActiveTab] = useState("info");

    // console.log(props.competition)

    const dateString = (d) => {
        const ev = new Date(d)

        return ev.toLocaleString
    }

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
                            <div className="px-4 py-5 sm:p-6">
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
                                </TabContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default Show
