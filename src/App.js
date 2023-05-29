import elements from './router/routerIndex'
import { useRoutes } from 'react-router-dom';
export default function App() {
  const element = useRoutes(elements)
  return (
    <div>
      {element}
    </div>
  );
}
