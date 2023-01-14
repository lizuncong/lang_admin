module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  const UserProject = app.model.define('user_project', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    projectId: INTEGER,
    userId: INTEGER,
    role: INTEGER,
    createTime: DATE,
    updateTime: DATE,
  });
  return UserProject;
};

