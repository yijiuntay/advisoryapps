import { useSession, signIn } from "next-auth/react";
import styles from "@/styles/NextAuthLogin.module.css";

const NextAuthLogin = () => {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn();
  };

  return (
    <div className={styles.main}>
      {session ? (
        <p>Facebook Logged in</p>
      ) : (
        <a href="#" onClick={handleSignin} className={styles.button}>
          <button>Sign in with Facebook</button>
        </a>
      )}
    </div>
  );
};

export default NextAuthLogin;
