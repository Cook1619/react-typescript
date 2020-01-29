import React from 'react';

type User = {
  name: string;
};

type Props = {
  title: string;
  isActive?: boolean;
  thing: number;
  thing2: string[]; //array of strings
  status: 'loading' | 'loaded'; //this will only accept one of these 2 strings as props for 'status'
  thing3: {
    name: string; //can define what the object would accept
    age: number;
  };
  func: () => void;
  user: User; //as listed above
};

export const Head = ({ title = 'Hello', isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};
