import React from "react";
import signIn from "../firebase/auth/signin";
import { useRouter } from "next/navigation";
import styles from "@/styles/Home.module.css";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };

  const redirectToSignUp = () => {
    return router.push("/signup");
  };

  return (
    <div className={styles.main}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleForm} className={styles.form}>
          <div className={styles.formHeading}>
            Want to check out this file? Log in or sign up
          </div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className={styles.input}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Sign in
          </button>
          <div className={styles.footer}>
            <p>{`Don't have an account?`}</p>
            <a onClick={redirectToSignUp} className={styles.signInSignUp}>
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
