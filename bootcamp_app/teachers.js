const { Pool } = require('pg');

const pool = new Pool({
  user: 'jenobpj',
  password: '',
  host: 'localhost',
  database: 'bootcampx'
});
const queryString=`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher`;
const month=process.argv[2];

pool.query(queryString,[month])
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});