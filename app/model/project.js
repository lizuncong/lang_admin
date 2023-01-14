module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Project = app.model.define('project', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(50),
    description: STRING(150),
    createUser: INTEGER,
    createTime: DATE,
    updateTime: DATE,
  });
  return Project;
};

