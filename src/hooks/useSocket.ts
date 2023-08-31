import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';

const useSocket = () => {
    const token = useSelector(({ auth }) => auth.accessToken);

    const socket = useMemo(
        () =>
            // io("http://localhost:5050/thief-sonminsu", {
            io("http://146.56.143.108/thief-sonminsu", {
                extraHeaders: {
                    Authorization: token,
                },
                autoConnect: false,
            }),
            [token]
    );

    useEffect(() => {
        if (token) {
            socket.connect();
        }
    }, [socket, token]);

    return socket;
}

export default useSocket;