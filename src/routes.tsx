import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Memo from './pages/Memo/Memo';
import UseMemo from './pages/UseMemo/UseMemo';
import UseCallback from './pages/UseCallback/UseCallback';
import WithoutMemo from './pages/WithoutMemo/WithoutMemo';
import WithoutUseCallback from './pages/WithoutUseCallback/WithoutUseCallback';
import Concepts from './pages/Concepts/Concepts';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/memo' element={<Memo />} />
      <Route path='/useMemo' element={<UseMemo />} />
      <Route path='/useCallback' element={<UseCallback />} />
      <Route path='/withoutMemo' element={<WithoutMemo />} />
      <Route path='/withoutUseCallback' element={<WithoutUseCallback />} />
      <Route path='/concepts' element={<Concepts />} />
      <Route path='*' element={<h1>Not found</h1>} />
    </Routes>
  )
}