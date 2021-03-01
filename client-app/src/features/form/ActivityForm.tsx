import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";


export default observer(function ActivityDetails() {

    const {activityStore} = useStore();
    const {selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore;

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
       activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInutChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit = {handelSubmit} autoComlete='off'>
                <Form.Input placeholder = 'Titel' value={activity.title} name='title' onChange={handleInutChange} />
                <Form.TextArea placeholder = 'Description' value={activity.description} name='description' onChange={handleInutChange}  />
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInutChange} />
                <Form.Input type = 'date' placeholder='Date' value={activity.date} name='date' onChange={handleInutChange} />
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInutChange} />
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInutChange} />
                <Button loading={loading} floated = 'right' positive type='submit' content='Submit' />
                <Button onClick = {closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})