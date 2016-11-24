import { loadNg1Module, ngmodule } from '../bootstrap/ngmodule';

import students from './students.component';
import studentsList from './components/students-list.component';
import studentListItem from './components/student-list-item.component';

import studentsState from './students.states';

const studentsModule = {
  components: { students, studentsList, studentListItem },
  states: [ studentsState ]
};

loadNg1Module(ngmodule, studentsModule);
