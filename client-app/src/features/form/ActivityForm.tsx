import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    cerateOrEdit: (activity: Activity) => void;
}

export default function ActivityDetails({ activity: selectedActivity, closeForm, cerateOrEdit }: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handelSubmit() {
        cerateOrEdit(activity);
    }

    function handleInutChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit={handelSubmit} autoComlete='off'>
                <Form.Input placeholder='Titel' value={activity.title} name='title' onChange={handleInutChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInutChange}  />
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInutChange} />
                <Form.Input placeholder='Date' value={activity.date} name='date' onChange={handleInutChange} />
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInutChange} />
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInutChange} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}