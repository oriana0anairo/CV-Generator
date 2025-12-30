import type {
  CreateBody,
  CreateResponse,
  GetAllResponse,
  GetByIdResponse,
} from "../types";
import { http } from "./http";

export const curriculumService = {
  getAll: () => http.get<GetAllResponse[]>("/curriculums"),

  create: (data: Partial<CreateBody>) =>
    http.post<CreateResponse>("/curriculums", data),

  getById: (id: string) => http.get<GetByIdResponse>(`/curriculums/${id}`),
};
