import {Sub} from '../types';

interface Props {
  subs: Array<Sub>
}

export default function List ({subs}: Props) {
  return (
    <ul>
        {
          subs.map((sub) => (
            <li key={sub.name}>
              <img src={sub.avatar} alt="something" />
              <h4>{sub.name} (<small>months {sub.subscript}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </li>
          ))
        }
      </ul>
  )
}