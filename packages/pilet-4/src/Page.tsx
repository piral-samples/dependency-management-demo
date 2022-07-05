import * as React from "react";
import useSWR from "swr";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => new Promise<any>(resolve => setTimeout(() => resolve(res.json()), 4000)));

export default () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) {
    return <div>Failed to load!</div>;
  }

  if (!data) {
    return <div>Loading posts...</div>;
  }

  return (
    <div>
      <h1>Received Posts (Pilet 4)</h1>
      <ul>
        {data.map((e) => (
          <li key={e.id}>
            <strong>{e.title}</strong>
            <p>{e.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
