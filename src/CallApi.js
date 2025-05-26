export async function getData(url) {
  const res = await fetch(url);
  console.log(res);
  return res.json();
}
