SELECT teachers.name,cohorts.name,count(assistance_requests) as tota_assitance
FROM teachers
JOIN assistance_requests ON teacher_id= teachers.id
JOIN students ON student_id =students.id
JOIN cohorts ON cohort_id=cohorts.id
WHERE cohorts.name= 'JUL02'
GROUP BY teachers.name,cohorts.name
ORDER BY teachers.name;