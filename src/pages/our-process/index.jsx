import { processes } from "../../utils/processes.jsx";
import "./style.scss";

function OurProcesses() {
  return (
    <section className="processes-container">
      <div className="content">
        <div className="text-container">
          <h2>Como trabalhamos</h2>
          <h3>Nosso processo de atendimento</h3>
        </div>
        <div className="cards-container">
          {processes.map((process) => (
            <div className="card" key={process.id}>
              <div className="top-content">
                <span>0{process.id}</span>
                {process.image}
              </div>
              <div className="bottom-content">
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcesses;