A three-role web platform where:

=> Patients search doctors, book appointments, view prescriptions & print prescriptions, view their previous history.
=> Doctors see confirm status patients which is take appointment for him, write digital prescriptions, view and print prescription.
=> Admins oversee users, Add doctors, See pending appointment and confirm & reject for doctor.

Tech stack & key versions
Backend:	Java 21 • Spring Boot 3	Reactive Web isn’t needed; standard Spring MVC is fine.
Security: Spring Security 6 + JWT	Stateless, role-based.
Data: Spring Data JPA • Oracle 19c	Flyway.
Frontend:	Angular 19 • Bootstrap 5.
Reporting: JasperReports 6.21, PDF prescriptions.
