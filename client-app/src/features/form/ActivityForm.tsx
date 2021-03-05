import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useStore } from "../../app/stores/store";
import { v4 as uuid } from 'uuid';


export default observer( function ActivityDetails() {
    const history = useHistory();
    const {activityStore} = useStore();
    const {createActivity, updateActivity, 
        loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    
    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);

    function handelSubmit() {
       if (activity.id.length === 0) {
           let newActivity = {
             ...activity,
             id: uuid()
           };
           createActivity(newActivity).then(()=> history.push(`/activities/${newActivity.id}`))
       } else {
            updateActivity(activity).then(()=> history.push(`/activities/${activity.id}`))
       }
    }

    function handleInutChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

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
                <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})