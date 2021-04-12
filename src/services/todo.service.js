export const todoService = {
    allItem,
    addtodo,
    showcomplete,
    showincomplete,
    showalltask,
    edittodo,
    deleteitem,
    donetask
};
function allItem() {
    let token = localStorage.getItem("user");
    const requestOptionss = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    return fetch("http://api.mytodo.ir/api/TodoItems", requestOptionss)
        .then(async (res) => {
            if (res.ok) {
                return await res.json();
            }
        })
        .then((data) => {
            return data
        })
        .catch((err) => {
            throw new Error(err);
        });
}



function addtodo(data) {
    let token = localStorage.getItem("user");
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
    };
    return fetch("http://api.mytodo.ir/api/TodoItems", requestOptions)
        .then(async (response) => {
            if (response.ok) {
                return await response.json();
            }
        })
        .then((Data) => {
            return Data;
        })
        .catch((error) => {
            console.log("error");
        });
}
function showcomplete() {
    let token = localStorage.getItem("user");
    const requestOptionss = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    return fetch("http://api.mytodo.ir/api/TodoItems/complete", requestOptionss)
        .then(async (response) => {
            if (response.ok) {
                return await response.json();
            }
        })
        .then((data) => {
            console.log(data)
            return data
        })
        .catch((err) => {
            console.log("err");
        });
}
function showincomplete() {
    let token = localStorage.getItem("user");
    const requestOptionss = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    return fetch("http://api.mytodo.ir/api/TodoItems/incomplete", requestOptionss)
        .then(async (res) => {
            if (res.ok) {
                return await res.json();
            }
        })
        .then((data) => {
            if (data) {
                return data
            }
        })
        .catch((err) => {
            console.log("err");
        });
}
function showalltask() {
    let token = localStorage.getItem("user");
    const requestOptionss = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    return fetch("http://api.mytodo.ir/api/TodoItems", requestOptionss)
        .then(async (res) => {
            if (res.ok) {
                return await res.json();
            }
        })
        .then((data) => {
            if (data) {
                return data
            }
        })
        .catch((err) => {
            console.log("err");
        });
}

function edittodo(data, id) {
    let Token = localStorage.getItem("user");
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Token,
        },
        body: JSON.stringify(data),
    };
    return fetch(`http://api.mytodo.ir/api/TodoItems/${id}`, requestOptions)
        .then((response) => {
            if (response.ok) {
                return response
            }
        })
        .catch(() => {
            console.log("error");
        });
}

function deleteitem(id) {
    let token = localStorage.getItem("user");
    const requestOptionss = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    };
    return fetch(`http://api.mytodo.ir/api/TodoItems/${id}`, requestOptionss)
        .then((res) => {
            if (res.ok) {
                return res
            }
        })
        .catch((err) => {
            throw new Error(err);
        });
}
function donetask(data, id) {
    let Token = localStorage.getItem("user");
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Token,
        },
        body: JSON.stringify(data),
    };
    return fetch(`http://api.mytodo.ir/api/TodoItems/${id}`, requestOptions)
        .then((response) => {
            if (response.ok) {
                return response
            }
        })
        .catch((err) => {
            console.log(err);
        });
}