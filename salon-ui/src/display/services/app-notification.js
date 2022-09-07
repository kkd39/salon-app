import { Subject } from "rxjs";

const subject = new Subject();
const appNotification={
    showSuccess: (message,title="Information") => subject.next( {title,message,"variant":'success'}),
    showError: (message) => subject.next( {title:"Error ",message,"variant":'danger'}),
    onChange: () => subject.asObservable()
}
export default appNotification;