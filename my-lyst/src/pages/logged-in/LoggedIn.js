import { useEffect } from "react";
import { VscCheckAll} from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import "./logged_in.css";

const LoggedIn = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let id = setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [navigate]);
  return (
    <section className="logged-in_container">
      <section className="logged-in">
        <div className="logged-in__message">
          <VscCheckAll className="logged-in__icon" size={200} />
          <p>Logged In Successfully.</p>
        </div>
      </section>
    </section>
  );
};

export default LoggedIn;
