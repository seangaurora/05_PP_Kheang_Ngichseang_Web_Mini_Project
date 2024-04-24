export const loginService = async (userInfo) => {
    const result = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await result.json();
    return data;
};

export const registerService = async (userInfo) => {
    const result = await fetch('http://110.74.194.123:8989/api/todo/v1/auth/sign-up', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await result.json();
    return data;
};

