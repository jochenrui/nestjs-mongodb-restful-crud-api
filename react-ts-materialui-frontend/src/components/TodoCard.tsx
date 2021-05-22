import { Todo } from "../common/types";

export const TodoCard = ({ title, description, createdAt }: Todo) => {
  const getTime = (timeStamp: string) => {
    // get only the time HH:MM:SS from the Timestamp
    return timeStamp.split("T")[1].split(".")[0];
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{getTime(createdAt)}</p>
    </div>
  );
};
