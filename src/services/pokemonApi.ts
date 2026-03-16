export default async function fetchData(url: string) {
  const data = await fetch(`${url}`);

  if (!data.ok) {
    throw new Error(`Thrown error ${data.status}`);
  }
  const json = await data.json();

  return json;
}
