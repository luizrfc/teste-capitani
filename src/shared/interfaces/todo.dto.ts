export interface TodoDTO {
  id?: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date | null;
  subTasks: SubTaskDTO[] | null;
}

export interface SubTaskDTO {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date | null;
}
