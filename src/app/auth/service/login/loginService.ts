import { Injectable } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { Auth, browserSessionPersistence, setPersistence,
signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
@Injectable({
providedIn: 'root'
})
export class LoginService {
    private auth = inject(Auth);

    public async login(email: string, password: string): Promise<UserCredential> {
    await setPersistence(this.auth, browserSessionPersistence);
    return await signInWithEmailAndPassword(this.auth, email, password);
    }
    public async logout(): Promise<void> {
    await this.auth.signOut();
    }
}
