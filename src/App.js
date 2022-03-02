const data1 = {
  id:0,
  name: "Cenk",
  surname: "Berry",
  position: "Frontend Developer"
}
const data2 = {
  id:1,
  name: "Rana",
  surname: "Berry",
  position: "Backend Developer"
}

export default function App() {
  return (
    <>
      <div className="container-sm">
           <div className="row">
              <div className="col-12 col-sm-6 bg-warning"key={data1.id}>
                    <h1>Hellos!</h1>
                    <h3>My name is {data1.name} {data1.surname}</h3>
                    <h3 className="">My Position is {data1.position}</h3>
              </div>
              <div className="col-12 col-sm-6 bg-info"key={data2.id}>
                    <h1>Hello!</h1>
                    <h3>My name is {data2.name} {data2.surname}</h3>
                    <h3 className="">My Position is {data2.position}</h3>
              </div>
        </div>
    </div>
   </>
  );
}
