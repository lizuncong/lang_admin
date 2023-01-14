module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Language = app.model.define('language', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    projectId: INTEGER,
    status: INTEGER,
    key: STRING(200),
    countryKey: STRING(20),
    translate: STRING(500),
    lastTranslate: STRING(500),
    createTime: DATE,
    updateTime: DATE,
  });
  return Language;
};

