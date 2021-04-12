
export const userService = {
  login,
  logout,
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return fetch("http://api.mytodo.ir/api/Accounts/login", requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", user.token);
      return user;
    })
    .catch((err) => {
      throw new Error("Email or Password invalid");
    });
}

function logout() {
  let token = localStorage.getItem("user");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  };
  fetch("https://api.mytodo.ir/api/Accounts/logout", requestOptions).then(
    (res) => {
      localStorage.removeItem("user");
    }
  );
}
function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
