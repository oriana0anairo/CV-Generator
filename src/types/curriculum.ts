export type GetAllResponse = {
  data: Curriculum[];
};

type Curriculum = {
  id: String;
  title: String;
  data: string;
  createdAt: string;
};
export type CreateResponse = {
  data: { message: string };
  id: string;
};

export type CreateBody = {
  title: string;
  data: {
    email: string;
    location: string;
    summary: string;
  };
};

export type GetByIdResponse = {
  id: string;
  title: string;
  data: {
    email: string;
    location: string;
    professional: string;
    summary: string;
  };
  createdAt: string;
};
