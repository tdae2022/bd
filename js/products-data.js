// ===== PRODUCTS DATA =====
const productsData = [
    // === DEMO PRODUCT (Added for demonstration) ===
    {
        id: 999, // Unique ID
        category: 'plc',
        brand: 'Demo Brand',
        name: 'Demo Product Name',
        desc: 'This is a demo product added to show you how adding works. You can delete this.',
        icon: '🆕',
        badge: 'new',
        tags: ['Demo', 'Example', 'New'],
        inStock: true
    },

    // PLC Products
    {
        id: 1, category: 'plc', brand: 'Siemens',
        name: 'Siemens S7-1200 CPU 1214C DC/DC/DC',
        desc: '14DI/10DO/2AI, 24VDC power supply, Ethernet port',
        icon: '🖥️',
        image: 'images/products/siemens-s7-1200.png',
        badge: 'popular',
        tags: ['S7-1200', '6ES7214', '24VDC'],
        inStock: true
    },
    {
        id: 2, category: 'plc', brand: 'Siemens',
        name: 'Siemens S7-300 CPU 314C-2 DP',
        desc: '24DI/16DO/4AI/2AO, MPI/DP interface, 192KB RAM',

        icon: '🖥️', badge: null,
        tags: ['S7-300', '6ES7314', 'MPI'],
        inStock: true
    },
    {
        id: 3, category: 'plc', brand: 'Mitsubishi',
        name: 'Mitsubishi FX3U-32MR/ES',
        desc: '16 Input/16 Output Relay, 220VAC supply, Built-in USB',

        icon: '🖥️', badge: 'sale',
        tags: ['FX3U', 'Relay Output', '220VAC'],
        inStock: true
    },
    {
        id: 4, category: 'plc', brand: 'Allen Bradley',
        name: 'Allen Bradley MicroLogix 1100',
        desc: '10DI/6DO AC/DC/Relay, 4AI, Ethernet port included',

        icon: '🖥️', badge: 'new',
        tags: ['MicroLogix', '1763', 'Ethernet'],
        inStock: false
    },
    {
        id: 5, category: 'plc', brand: 'Siemens',
        name: 'Siemens S7-1500 CPU 1511-1 PN',
        desc: 'High performance CPU with PROFINET, 150KB Work memory',

        icon: '🖥️', badge: null,
        tags: ['S7-1500', 'PROFINET', '6ES7511'],
        inStock: true
    },

    // HMI Products
    {
        id: 6, category: 'hmi', brand: 'Siemens',
        name: 'Siemens KTP700 Basic PN',
        desc: '7" TFT Touch Panel, 800x480 resolution, PROFINET',
        icon: '📺',
        image: 'images/products/siemens-ktp700.png',
        badge: 'popular',
        tags: ['KTP700', 'Touch Panel', '7 inch'],
        inStock: true
    },
    {
        id: 7, category: 'hmi', brand: 'Siemens',
        name: 'Siemens TP900 Comfort Panel',
        desc: '9" Widescreen Touch, 800x480, USB + Ethernet + SD',

        icon: '📺', badge: null,
        tags: ['TP900', 'Comfort', '9 inch'],
        inStock: true
    },
    {
        id: 8, category: 'hmi', brand: 'Weintek',
        name: 'Weintek MT8102iE 10" HMI',
        desc: '10.1" TFT Touch, 1024x600, Ethernet + RS232/485',

        icon: '📺', badge: 'sale',
        tags: ['Weintek', '10 inch', 'EasyBuilder'],
        inStock: true
    },
    {
        id: 9, category: 'hmi', brand: 'Proface',
        name: 'Proface GP4301T 4.3" HMI',
        desc: '4.3" Color Touch Panel, 480x272, USB & Serial',

        icon: '📺', badge: 'new',
        tags: ['Proface', '4.3 inch', 'GP-PRO'],
        inStock: true
    },

    // Inverter Products
    {
        id: 10, category: 'inverter', brand: 'ABB',
        name: 'ABB ACS310 1.5kW 3-Phase VFD',
        desc: 'Variable Frequency Drive, 380-480VAC, IP20, built-in EMC',
        icon: '⚡',
        image: 'images/products/abb-acs310.png',
        badge: 'popular',
        tags: ['ACS310', '1.5kW', '3-Phase'],
        inStock: true
    },
    {
        id: 11, category: 'inverter', brand: 'Siemens',
        name: 'Siemens MICROMASTER 440 7.5kW',
        desc: '7.5kW VFD, 380-480V 3AC, Integrated brake chopper',

        icon: '⚡', badge: null,
        tags: ['MM440', '7.5kW', '6SE6440'],
        inStock: true
    },
    {
        id: 12, category: 'inverter', brand: 'Delta',
        name: 'Delta VFD-E 2.2kW Single Phase',
        desc: '2.2kW, 220VAC 1-Phase input, 3-Phase output, PLC function',

        icon: '⚡', badge: 'sale',
        tags: ['VFD-E', '2.2kW', 'Single Phase'],
        inStock: true
    },
    {
        id: 13, category: 'inverter', brand: 'ABB',
        name: 'ABB ACS550 22kW Industrial VFD',
        desc: '22kW, 380-480V, IP21, Modbus RTU, PID control',

        icon: '⚡', badge: null,
        tags: ['ACS550', '22kW', 'Modbus'],
        inStock: false
    },

    // Analog Cards
    {
        id: 14, category: 'analog', brand: 'Siemens',
        name: 'Siemens SM 331 Analog Input 8CH',
        desc: '8 Analog Inputs, 0-20mA/4-20mA/0-10V, 12-bit resolution',

        icon: '📊', badge: null,
        tags: ['SM331', '8AI', '6ES7331'],
        inStock: true
    },
    {
        id: 15, category: 'analog', brand: 'Siemens',
        name: 'Siemens SM 332 Analog Output 4CH',
        desc: '4 Analog Outputs, 0-20mA/4-20mA, 12-bit resolution',

        icon: '📊', badge: 'popular',
        tags: ['SM332', '4AO', '6ES7332'],
        inStock: true
    },
    {
        id: 16, category: 'analog', brand: 'Mitsubishi',
        name: 'Mitsubishi Q64AD 4CH Analog Input',
        desc: '4 Channel Analog Input, 16-bit, -10V~+10V / 4-20mA',

        icon: '📊', badge: null,
        tags: ['Q64AD', '4AI', 'Q-Series'],
        inStock: true
    },
    {
        id: 17, category: 'analog', brand: 'Siemens',
        name: 'Siemens SM 334 Analog I/O 4AI/2AO',
        desc: '4 Analog Inputs + 2 Analog Outputs combined module',

        icon: '📊', badge: 'sale',
        tags: ['SM334', '4AI/2AO', '6ES7334'],
        inStock: true
    },

    // Input Cards
    {
        id: 18, category: 'input', brand: 'Siemens',
        name: 'Siemens SM 321 Digital Input 32CH',
        desc: '32 Digital Inputs, 24VDC, Isolated, LED indicators',

        icon: '🔌', badge: null,
        tags: ['SM321', '32DI', '6ES7321'],
        inStock: true
    },
    {
        id: 19, category: 'input', brand: 'Siemens',
        name: 'Siemens SM 322 Digital Output 32CH',
        desc: '32 Digital Outputs, 24VDC Transistor, 0.5A per channel',

        icon: '🔌', badge: 'popular',
        tags: ['SM322', '32DO', '6ES7322'],
        inStock: true
    },
    {
        id: 20, category: 'input', brand: 'Mitsubishi',
        name: 'Mitsubishi QX41 32-Point Input',
        desc: '32 Digital Inputs, Sink/Source type, 24VDC, Q-Series',

        icon: '🔌', badge: null,
        tags: ['QX41', '32DI', 'Q-Series'],
        inStock: true
    },
    {
        id: 21, category: 'input', brand: 'Schneider',
        name: 'Schneider TSX DEY 32D2 Input Card',
        desc: '32 Digital Inputs, 24VDC, Premium Series I/O module',

        icon: '🔌', badge: 'new',
        tags: ['TSX DEY', '32DI', 'Premium'],
        inStock: true
    },

    // Modules
    {
        id: 22, category: 'plc', brand: 'Siemens',
        name: 'Siemens S7-1200 SM 1221 8DI',
        desc: '8 Digital Inputs Expansion Module for S7-1200, 24VDC',
        icon: '🔧', badge: null,
        tags: ['SM1221', '8DI', '6ES7221'],
        inStock: true
    },
    {
        id: 23, category: 'plc', brand: 'Siemens',
        name: 'Siemens CM 1241 RS485 Module',
        desc: 'RS485 Communication Module for S7-1200, Modbus RTU',
        icon: '🔧', badge: 'popular',
        tags: ['CM1241', 'RS485', 'Modbus'],
        inStock: true
    },
    {
        id: 24, category: 'plc', brand: 'Mitsubishi',
        name: 'Mitsubishi FX3U-4AD Analog Input',
        desc: '4-Channel Analog Input Module for FX3U series, ±10V/4-20mA',
        icon: '🔧', badge: null,
        tags: ['FX3U-4AD', '4AI', 'FX3U'],
        inStock: true
    },
    {
        id: 25, category: 'plc', brand: 'Siemens',
        name: 'Siemens PS 307 5A Power Supply',
        desc: 'Power Supply Module for S7-300, 24VDC/5A output',
        icon: '🔧', badge: 'sale',
        tags: ['PS307', '5A', '6ES7307'],
        inStock: true
    },
    {
        id: 26, category: 'plc', brand: 'Omron',
        name: 'Omron CJ1W-SCU41-V1 Serial Module',
        desc: '2-Port Serial Communications Unit, RS232C + RS422/485',
        icon: '🔧', badge: null,
        tags: ['CJ1W-SCU41', 'Serial', 'RS232/485'],
        inStock: true
    },
    {
        id: 27, category: 'servo', brand: 'Mitsubishi',
        name: 'Mitsubishi MR-J4-10A Servo Drive',
        desc: 'High-performance AC Servo Amplifier, 100W, 1-Phase 200VAC',
        icon: '⚙️',
        image: 'images/products/mitsubishi-servo.png',
        badge: 'new',
        tags: ['MR-J4', 'Servo Drive', 'Mitsubishi'],
        inStock: true
    },
    {
        id: 28, category: 'temp', brand: 'Autonics',
        name: 'Autonics TCN4S Temperature Controller',
        desc: 'Dual display PID temperature controller, 100-240VAC',
        icon: '🌡️',
        image: 'images/products/autonics-temp.png',
        badge: 'popular',
        tags: ['TCN4', 'Temp Controller', 'PID'],
        inStock: true
    },
    {
        id: 29, category: 'power', brand: 'Mean Well',
        name: 'Mean Well LRS-350-24 Power Supply',
        desc: '350W 24V 14.6A Single Output Switching Power Supply',
        icon: '🔋',
        image: 'images/products/meanwell-psu.png',
        badge: 'sale',
        tags: ['LRS-350', '24VDC', 'Power Supply'],
        inStock: true
    },
    {
        id: 30, category: 'sensor', brand: 'SICK',
        name: 'SICK Inductive Proximity Sensor',
        desc: 'M12, Sn=4mm, Flush, NPN NO, M12 4-pin connector',
        icon: '📡',
        badge: 'new',
        tags: ['SICK', 'Sensor', 'Proximity'],
        inStock: true
    }
];

// Make available globally
window.productsData = productsData;
