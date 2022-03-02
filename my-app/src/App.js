const datas = {
  id:0,
  name: "Cenk",
  surname: "Berry",
  position: "Frontend Developer"
}
export default function App() {
  return (
    <div key={datas.id}>
      <h1>Hello!</h1>
      <h3>My name is {datas.name} {datas.surname}</h3>
      <h3>My Position is {datas.position}</h3>
    </div>
  );
}
