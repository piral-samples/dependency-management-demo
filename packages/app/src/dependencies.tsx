import * as React from "react";

declare global {
  const System: any;
}

function getDependencyNames() {
  return Object.keys(System.registerRegistry).filter(
    (name) => name.indexOf("@") > 0
  );
}

export const Dependencies = () => {
  const [deps, setDeps] = React.useState(getDependencyNames);

//   React.useEffect(() => {
//     const tid = setInterval(() => {
//       const depNames = getDependencyNames();
//       setDeps((deps) =>
//         deps.join(",") === depNames.join(",") ? deps : depNames
//       );
//     }, 3 * 1000);
//     return () => clearInterval(tid);
//   }, []);

  return (
    <div className="teaser">
      <div><strong>Dependencies</strong></div>
      {deps.map((name) => (
        <div className="badge" key={name}>
          {name}
        </div>
      ))}
    </div>
  );
};
