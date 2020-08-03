import Head from "next/head";
import styles from "../styles/Home.module.css";
import Timer from "../components/Timer/Timer";
import Button from "../components/Button/Button";
import Login from "../components/Login/Login";
import { connect } from "react-redux";

function Home({ popup }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ticktivity | pomodoro timer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Ticktivity</h1>

        <p className={styles.description}>Make sure every tick contributes</p>
        <Timer />
        <div>
          <Button>Start</Button>
          <Button>Stop</Button>
        </div>
      </main>
      {popup ? <Login /> : null}
      <footer className={styles.footer}>
        <a href="/about">About us</a>
      </footer>
    </div>
  );
}
const mapStateToProps = ({ loginReducer: { popup } }) => ({
  popup,
});

export default connect(mapStateToProps)(Home);
