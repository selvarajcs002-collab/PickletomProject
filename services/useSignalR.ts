import { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { DeviceEventEmitter, LogBox } from 'react-native';
import { BASE_URL } from './api';

// Ignore the harmless SignalR websocket abort error
LogBox.ignoreLogs(['WebSocket closed with status code: 1006']);

export function useSignalR() {
    const [connection, setConnection] = useState<signalR.HubConnection | null>(null);

    useEffect(() => {
        let isMounted = true;
        let hubConnection: signalR.HubConnection | null = null;

        const setupSignalR = async () => {
            const uidStr = await AsyncStorage.getItem("userId");
            if (!uidStr) return; // Not logged in

            // Remove /api from BASE_URL to connect to the root hub endpoint
            const hubUrl = BASE_URL.replace(/\/api\/?$/, '') + '/notificationHub';

            hubConnection = new signalR.HubConnectionBuilder()
                .withUrl(hubUrl)
                .withAutomaticReconnect()
                .configureLogging(signalR.LogLevel.None) // Prevents console spam on reconnects
                .build();

            hubConnection.on("ReceiveNotification", (notification: any) => {
                if (isMounted) {
                    DeviceEventEmitter.emit('NotificationReceived', notification);
                    Toast.show({
                        type: 'info',
                        text1: 'New Notification',
                        text2: notification.Message || 'You have a new alert',
                        position: 'top',
                        visibilityTime: 4000,
                        autoHide: true,
                        topOffset: 60,
                    });
                }
            });

            try {
                await hubConnection.start();
                console.log("SignalR Connected.");
                // Join the group based on user ID
                await hubConnection.invoke("JoinGroup", uidStr);
            } catch (err) {
                console.error("SignalR Connection Error: ", err);
            }

            if (isMounted) {
                setConnection(hubConnection);
            }
        };

        setupSignalR();

        return () => {
            isMounted = false;
            if (hubConnection) {
                AsyncStorage.getItem("userId").then(uidStr => {
                    if (uidStr) {
                        hubConnection?.invoke("LeaveGroup", uidStr).catch(console.error);
                    }
                    hubConnection?.stop();
                });
            }
        };
    }, []);

    return connection;
}
