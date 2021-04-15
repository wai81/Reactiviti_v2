import {createContext, useContext} from 'react';
import ActivityStore from "./activityStore";
import CommentStore from './commentStore';
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
    commentStore: CommentStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore : new CommonStore(),
    userStore: new UserStote(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStotre(),
    commentStore: new CommentStore()

}

export const StoreContext = createContext(store);

export function  useStore() {
    return useContext(StoreContext);
}