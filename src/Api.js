export function getJsonData() {
    return {
        data: [
            {
                id: 0,
                address: '192.168.154.2',
                host_name: 'Microsoft',
                os: 'Windows',
                comment: 'Hello world',
                created: '2019-07-9 15:59',
                modified: '2019-07-10 20:00',
                service: [
                    {
                        id: 0,
                        host_id: 0,
                        proto: 'udp',
                        port: 666,
                        state: 'active',
                        name: 'samba',
                        info: 'samba old ver',
                        commnet: 'need update',
                    },
                    {
                        id: 1,
                        host_id: 0,
                        proto: 'tcp',
                        port: 23,
                        state: 'active',
                        name: 'ssh',
                        info: 'active ssh tunel',
                        commnet: 'try admin admin',
                    },
                    {
                        id: 2,
                        host_id: 0,
                        proto: 'tcp',
                        port: 80,
                        state: 'deactivate',
                        name: 'http',
                        info: 'not secure internet connection',
                        commnet: 'try https',
                    },
                ],
            },
            {
                id: 1,
                address: '49.200.154.200',
                host_name: 'Sony',
                os: 'Ubuntu',
                comment: 'What the hack',
                created: '2019-07-10 16:59',
                modified: '2019-07-10 18:41',
                service: [
                    {
                        id: 0,
                        host_id: 1,
                        proto: 'udp',
                        port: 443,
                        state: 'active',
                        name: 'https',
                        info: 'secure',
                        commnet: 'i like it',
                    },
                    {
                        id: 1,
                        host_id: 1,
                        proto: 'tcp',
                        port: 20,
                        state: 'active',
                        name: 'ftp',
                        info: 'file transfare protocol',
                        commnet: 'try paswd 123456789',
                    },
                    {
                        id: 2,
                        host_id: 1,
                        proto: 'tcp',
                        port: 53,
                        state: 'deactivate',
                        name: 'dns',
                        info: 'domain name sever',
                        commnet: 'try hack it',
                    },
                ],
            },
            {
                id: 2,
                address: '49.200.154.200',
                host_name: 'NASA',
                os: 'DOS',
                comment: 'Try google how hack Pentagon',
                created: '2019-07-10 14:35',
                modified: '2019-07-13 170:51',
                service: [
                    {
                        id: 0,
                        host_id: 2,
                        proto: 'tcp',
                        port: 443,
                        state: 'active',
                        name: 'https',
                        info: 'secure',
                        commnet: 'i like it',
                    },
                    {
                        id: 1,
                        host_id: 2,
                        proto: 'what that mean',
                        port: 20,
                        state: 'active',
                        name: 'ftp',
                        info: 'file transfare protocol',
                        commnet: 'try paswd 123456789',
                    },
                    {
                        id: 2,
                        host_id: 2,
                        proto: 'i dont know',
                        port: 53,
                        state: 'deactivate',
                        name: 'dns',
                        info: 'domain name sever',
                        commnet: 'try hack it',
                    },
                    {
                        id: 3,
                        host_id: 2,
                        proto: 'tcp',
                        port: 40,
                        state: 'active',
                        name: 'dns',
                        info: 'domain name sever',
                        commnet: 'try hack it',
                    },
                ],
            },
        ],
    };
}
