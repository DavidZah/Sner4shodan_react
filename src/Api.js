import React from 'react';

export function getJsonData() {
    return({
        data: [
            {
                host_name: 'Microsoft',
                ip: '192.168.154.2',
                servic: [
                    {
                        name: 'Samba',
                        port: '666',
                        type: 'TCP',
                    },
                    {
                        name: 'HTTP',
                        port: '80',
                        type: 'UDP',
                    },
                    {
                        name: 'SSH',
                        port: '23',
                        type: 'TEST1',
                    },
                ],
            },
            {
                host_name: 'Sony',
                ip: '192.136.645.8',
                servic: [
                    {
                        name: 'Telnet',
                        port: '48',
                        type: 'TCP',
                    },
                    {
                        name: 'HTTPS',
                        port: '443',
                        type: 'UDP',
                    },
                    {
                        name: 'SSH',
                        port: '23',
                        type: 'TCP',
                    },
                ],
            },
            {
                host_name: 'Pentagon',
                ip: '88.66.154.9',
                servic: [
                    {
                        name: 'UNKOWN',
                        port: '2864',
                        type: 'TCP',
                    },
                    {
                        name: 'HTTP',
                        port: '80',
                        type: 'UDP',
                    },
                    {
                        name: 'SSH',
                        port: '23',
                        type: 'TEST1',
                    },
                    {
                        port: '6500',
                        type: 'tcp',
                    },
                    {
                        name: 'test',
                        port: '80',
                        type: 'tcp',
                    },
                ],
            },
        ],
    });
}
