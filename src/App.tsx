import './App.css'
import {DecimalSubject} from './Subject.ts';
import {Observer, BinObserver, OctObserver, HexObserver} from './Observer.ts';
import ViewA from './ViewA.tsx';
import ViewB from './ViewB.tsx'

function App() {
  const numberSubject: DecimalSubject = new DecimalSubject();
  const binObserver: Observer = new BinObserver();
  const octObserver: Observer = new OctObserver();
  const hexObserver: Observer = new HexObserver();
  return (
      <>
          {numberSubject.attach(binObserver)}
          <br/>{numberSubject.attach(octObserver)}
          <br/>{numberSubject.attach(hexObserver)}
          {numberSubject.setState(14)}
          <hr/>
          <p>Note that the views show the last setState() on the page!</p>
          <b>View A:</b><ViewA subject={numberSubject}></ViewA>
          <br/><b>View B:</b><ViewB subject={numberSubject}></ViewB>
          {numberSubject.setState(126)}
          <hr />
          <b>View A:</b><ViewA subject={numberSubject}></ViewA>
          <br/><b>View B:</b><ViewB subject={numberSubject}></ViewB>

      </>
  )
}

export default App
