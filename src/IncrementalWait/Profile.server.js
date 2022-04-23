import { useData } from "../libs/use-fetch";

function wait(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

export function getData(id = 1, waitTime = 5000) {
  return wait(waitTime).then((x) => ({ id, waitTime }));
}

export function Profile({ id, waitTime }) {
  const data = useData(`data-${id}`, () => getData(id, waitTime), { revalidate: true });

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
