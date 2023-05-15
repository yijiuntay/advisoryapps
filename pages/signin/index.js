import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Signin.module.css";
import NextAuthLogin from "@/components/NextAuthLogin";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hasAccount, setHasAccount] = React.useState(true);
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    const cors_api_host = "cors-anywhere.herokuapp.com";
    var cors_api_url = "https://" + cors_api_host + "/";
    try {
      const uri = `http://interview.advisoryapps.com/index.php/login?email=${email}&password=${password}`;
      const res = await fetch(
        `${cors_api_url}http://interview.advisoryapps.com/index.php/login`,
        {
          method: "POST",
          body: JSON.stringify(encodeURI(uri)),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.ok) {
        const { id, token } = await res.json();
        localStorage.setItem("id", id);
        localStorage.setItem("token", token);
        // Redirect to the dashboard or homepage
        alert(res);
        return router.push("/list");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
  };

  const switchHasAccount = () => {
    setHasAccount(!hasAccount);
  };

  return (
    <div className={styles.main}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleForm} className={styles.form}>
          <div className={styles.formHeading}>
            Want to check out this file? Log in or sign up
          </div>
          {error && <div className={styles.error}>{error}</div>}
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
            {hasAccount ? "Sign in" : "Sign up"}
          </button>
          <NextAuthLogin />
          <div className={styles.footer}>
            <p>
              {hasAccount
                ? `Don't have an account?`
                : "Already have an account?"}
            </p>
            <a onClick={switchHasAccount} className={styles.signInSignUp}>
              {hasAccount ? "Sign up" : "Sign in"}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
