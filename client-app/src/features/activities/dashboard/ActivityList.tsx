import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default function ActivityList() {

    const {activityStore} = useStore();
    const {deleteActivity, activitiesByDate, loading} = activityStore;

    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    {activitiesByDate.map(activity => (
                        <Item key={activity.id}>
                            <Item.Content>
                                <Item.Header>{activity.title}</Item.Header>
                                <Item.Meta>{activity.date}</Item.Meta>
                                <Item.Description>
                                    <div>{activity.description}</div>
                                    <div>{activity.city}, {activity.venue}</div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button as={Link} to={`/activities/${activity.id}`} floated='right' content='View' color='blue' />
                                    <Button
                                        name = {activity.id}
                                        loading={loading && target === activity.id}
                                        onClick={(e) => handleActivityDelete(e, activity.id)}
                                        floated='right'
                                        content='Delete'
                                        color='red'
                                    />
                                    <Label basic content={activity.category} />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Segment>
        </Segment.Group>
    )
}