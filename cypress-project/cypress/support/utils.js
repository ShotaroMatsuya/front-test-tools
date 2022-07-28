export const visitAPage = path => {
  cy.visit('/' + path);
};

export const checkURL = () => cy.url();

export const loginWithAPI = (user, password) => {
  cy.request({
    method: 'GET',
    url: '/user_token',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(`${user}:${password}`),
    },
  }).then(response => {
    localStorage.setItem('userToken', response.body.token);
    localStorage.setItem('username', response.body.username);
    localStorage.setItem('role', response.body.role);
  });
};
