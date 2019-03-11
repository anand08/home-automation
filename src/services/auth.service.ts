import firebase from 'firebase';

export class AuthService {
    constructor() { }

    onSignUp(email: string, password: string): any {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    onSignIn(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    onLogout() {
        firebase.auth().signOut();
    }
}