export class DeviceService {
    private loads: Array<any> = [
        {
            name: 'Load 1',
            deviceName: 'LED light',
            icon: 'bulb',
            state: 'false',
            offState: '0',
            onState: '1',
            topic: 'inTopic'
        },
        {
            name: 'Load 2',
            deviceName: 'Television',
            icon: 'easel',
            state: 'false',
            offState: '2',
            onState: '3',
            topic: 'inTopic'
        },
        {
            name: 'Load 3',
            deviceName: 'Computer',
            icon: 'laptop',
            state: 'false',
            offState: '4',
            onState: '5',
            topic: 'inTopic'
        },
        {
            name: 'Load 4',
            deviceName: 'Fans',
            icon: 'nuclear',
            state: 'false',
            offState: '6',
            onState: '7',
            topic: 'inTopic'
        },
        {
            name: 'Load 5',
            deviceName: 'All Appliances',
            icon: 'outlet',
            state: 'false',
            offState: '8',
            onState: '9',
            topic: 'inTopic'
        },
    ];

    getAllLoads() {
        return this.loads.slice();
    }

    updateData(index: number, state: any) {
        this.loads[index].state = state;
    }


}