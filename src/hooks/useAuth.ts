import { useState, useEffect } from 'react';
import { auth } from '../utils/firebase';
import { 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User 
} from 'firebase/auth';
import { trackEvent } from '../utils/analytics';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        trackEvent('user_authenticated', { userId: user.uid });
      }
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      trackEvent('user_login_success');
      return result.user;
    } catch (error) {
      trackEvent('user_login_error', { error: error.message });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      trackEvent('user_logout');
    } catch (error) {
      trackEvent('user_logout_error', { error: error.message });
      throw error;
    }
  };

  return {
    user,
    loading,
    signIn,
    signOut
  };
}