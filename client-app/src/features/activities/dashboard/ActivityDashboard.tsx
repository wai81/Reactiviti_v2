import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";


export default observer(function ActivityDasboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegestry} = activityStore;

    useEffect(() => {
        if (activityRegestry.size <= 1) loadActivities();
    }, [activityRegestry.size, loadActivities])

    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity filter</h2>
            </Grid.Column>
        </Grid>
    )
})