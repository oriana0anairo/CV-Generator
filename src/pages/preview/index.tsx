import { useEffect, useState } from "react";
import "./styles.css";
import { curriculumService } from "../../services";
import { useParams } from "react-router-dom";
import type { GetByIdResponse } from "../../types";

export const PreviewPage = () => {
  const [details, setDetails] = useState<GetByIdResponse>();
  const { id } = useParams();

  const fetchDetails = async () => {
    if (!id) return;
    try {
      const response = await curriculumService.getById(id);
      console.log(response);
      setDetails(response);
    } catch {
      //Manejo de error
    }
  };

  useEffect(() => {
    if (!details) fetchDetails();
  }, [id]);

  return (
    <div>
      <div className="cv-preview">
        <h1 className="cv-title">{details?.title}</h1>
        <p className="cv-subtitle">{details?.data.professional}</p>

        <section className="cv-section">
          <h2>Información de Contacto</h2>
          <ul>
            <li>
              <strong>Correo:</strong> {details?.data.email}
            </li>
            <li>
              <strong>Ubicación:</strong> {details?.data.location}
            </li>
          </ul>
          <h2>Resumen Profesional</h2>
          <p>{details?.data.professional}</p>
        </section>
      </div>
    </div>
  );
};
