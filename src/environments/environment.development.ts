export const environment = {
  production: false,
  baseUrl: 'http://localhost:8082/api',
  apiVersion: 'v1',
  endPoint: {
    // endPoint Students
    students: {
      getAll: 'students',
      getOne: 'students',
      getOneBySlug: 'students/slug',
      create: 'students',
      delete: 'students',
    },

    // endPoint Users
    users: {
      getAll: 'users',
      getOne: 'users',
      getOneBySlug: 'users/slug',
      create: 'users',
      delete: 'users',
    },

        // endPoint Teachers
        teachers: {
            getAll: 'teachers',
            getOne: 'teachers',
            getOneBySlug: 'teachers/slug',
            create: 'teachers',
            delete: 'teachers',
          },
  },
};
