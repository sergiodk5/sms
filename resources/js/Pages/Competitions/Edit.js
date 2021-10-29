import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import CompetitionsForm from "@/Components/CompetitionsForm";

const Edit = (props) => {
    const {
        data,
        setData,
        put,
        delete: destroy,
        errors,
    } = useForm({
        title: props.competition.title || "",
        date_start: props.competition.date_start || "",
        date_end: props.competition.date_end || "",
        location: props.competition.location || "",
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("dashboard.competitions.update", props.competition.id));
    };

    const shouldDelete = (e) => {
        e.preventDefault();

        if (confirm("Are you sure that you want to delete this competition?")) {
            destroy(
                route("dashboard.competitions.destroy", props.competition.id)
            );
        }
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Competition
                </h2>
            }
        >
            <Head title="Edit Competition" />

            <ValidationErrors errors={errors} />

            <CompetitionsForm
                title={data.title}
                date_start={data.date_start}
                date_end={data.date_end}
                location={data.location}
                submit={submit}
                setData={setData}
                buttonName="Update"
                hasDelete={true}
                shouldDelete={shouldDelete}
            />
        </Authenticated>
    );
};

export default Edit;
