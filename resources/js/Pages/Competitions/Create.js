import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import CompetitionsForm from "@/Components/CompetitionsForm";

const Create = (props) => {
    const { data, setData, post, errors } = useForm({
        title: "",
        date_start: "",
        date_end: "",
        location: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.competitions.store"));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add New Competition
                </h2>
            }
        >
            <Head title="Create Competition" />

            <ValidationErrors errors={errors} />

            <CompetitionsForm
                title={data.title}
                date_start={data.date_start}
                date_end={data.date_end}
                location={data.location}
                submit={submit}
                setData={setData}
                buttonName="Create"
                hasDelete={false}
                handleDelete={() => {}}
            />
        </Authenticated>
    );
};

export default Create;
