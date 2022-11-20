const Class = require('./class');
const Student = require('./student');

Class.hasMany(Student);
Student.belongsTo(Class);