import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityForm from "../../form/ActivityForm";
import ActivityDetails from "../details/ActivityDetails";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    cerateOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDasboard({ activities, selectedActivity, deleteActivity,
    selectActivity, cancelSelectActivity, editMode, openForm, closeForm, cerateOrEdit, submitting }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList
                    activities = {activities}
                    selectActivity = {selectActivity}
                    deleteActivity = {deleteActivity}
                    submitting = {submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        activity = {selectedActivity}
                        cancelSelectActivity = {cancelSelectActivity}
                        openForm = {openForm}

                    />}
                {editMode &&
                    <ActivityForm
                        closeForm = {closeForm}
                        activity = {selectedActivity}
                        cerateOrEdit = {cerateOrEdit}
                        submitting = {submitting}
                    />}
            </Grid.Column>
        </Grid>
    )
}