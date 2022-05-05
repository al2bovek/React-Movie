import '../components-css/forma.css';
import { useState } from "react"

export default function AddNumber() {
const [num, setNum] = useState([0]);
const plus = () =>
{setNum(num => [++num]);}
const minus =() =>
{setNum(num => [--num]);}
const reset =() =>
{setNum(num => [0]);}

return(
<>

<div>
<button onClick={plus}>add</button>
<button onClick={minus}>remove</button>
<button onClick={reset}>reset</button>

</div>
<div className='num'>
{num.map((n, i) => <h3 className="h3" key={i}>{n}</h3>)}

</div>

</>
  );
}