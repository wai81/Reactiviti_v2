import {createContext, useContext} from 'react';
import ActivityStore from "./activityStore";
import CommonStore from './commonStore';
import ModalStore from './modalStore';
import ProfileStotre from './profileStore';
import UserStote from './userStore';

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStote;
    modalStore: ModalStore;
    profileStore: ProfileStotre;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore : new CommonStore(),
    userStore: new UserStote(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStotre()
}

export const StoreContext = createContext(store);

export function  useStore() {
    return useContext(StoreContext);
}