import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emploees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'; 

import './app.css';

function App() {
  const data = [
    {name: 'John S.', salary: 800, id: 1},
    {name: 'Alex M.', salary: 3000, id: 2},
    {name: 'Ann L.', salary: 5000, id: 3},
    {name: 'Oleg X.', salary: 1000, id: 4}
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;