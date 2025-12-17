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
};

export type CreateBody = {
  title: string;
  data: {
    email: string;
    location: string;
    summary: string;
  };
};
