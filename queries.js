class Queries {
    viewAllEmployees() {
        db.query('SELECT * FROM department', function (err, results) {
            console.log(results)
        })
    }
}