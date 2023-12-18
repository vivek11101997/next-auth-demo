import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

function UserProfile() {
  const { data: session, status } = useSession()
  // Redirect away if NOT auth

  useEffect(() => {
    if (!session) {
      window.location.href = "/auth"
    }
  }, [])

  return (
    <section className={classes.profile}>
      {status === "loading" && <p>...Loading</p>}
      {!status === "loading" && (
        <>
          <h1>Your User Profile</h1>
          <ProfileForm />
        </>)
      }
    </section>
  );
}

export default UserProfile;
