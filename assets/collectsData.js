globalData = [
    {
      key: "1",
      status: "1",
      title: "Plástico em Pici",
      description: "Descrição da coleta 1",
      distance: "1.5 Km",
      locations: [
        {
          id: 1,
          latitude: -3.7327,
          longitude: -38.5270,
          title: "Local 1",
          description: "Primeira localização",
        },
      ],
      collects: { Plástico: "2kg" },
      favorite: false,
    },
    {key: '2', status: '2', title: 'Metal em Parquelândia', description: 'Descrição da coleta 2', distance: '1.3 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Metal": "2kg" },favorite: false },
    {key: '3', status: '2', title: 'Diversos em Castelão', description: 'Descrição da coleta 3', distance: '1.8 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg", "Metal": "12Kg"},favorite: false  },
    {key: '4', status: '4', title: 'Coleta arquivada Plástico', description: 'Descrição da coleta 1', distance: 'há 3min', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg" },favorite: false  },
    {key: '5', status: '4', title: 'Coleta arquivada Metal', description: 'Descrição da coleta 2', distance: 'há 2d', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Metal": "2kg" },favorite: false  },
    {key: '6', status: '4', title: 'Coleta arquivada 3', description: 'Descrição da coleta 3', distance: 'há 11m', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Metal": "2kg" },favorite: false  },
    {key: '7', status: '4', title: 'Coleta arquivada Múltiplos', description: 'Descrição da coleta 3', distance: 'há 3a', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg", "Metal": "12Kg"}, favorite: false  },
    {key: '8', status: '1', title: 'Coleta 1', description: 'Descrição da coleta 1', distance: '1.5 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg", "Metal": "12Kg"}, favorite: false },
    {key: '9', status: '1', title: 'Coleta favoritada', description: 'Descrição da coleta 2', distance: '1.3 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg", "Metal": "12Kg"}, favorite: true },
    {key: '10', status: '1',  title: 'Coleta 3', description: 'Descrição da coleta 3', distance: '1.8 Km', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg", "Metal": "12Kg"}, favorite: false },
    {key: '11', status: '3',  title: 'Coleta atrasada', description: 'Descrição da coleta 3', distance: 'há 2d', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg", "Metal": "12Kg"}, favorite: false },
    {key: '12', status: '3',  title: 'Coleta atrasada favoritada', description: 'Descrição da coleta 3', distance: 'há 3M', locations: [{ id: 1, latitude: -3.7327, longitude: -38.5270, title: "Local 1", description: "Primeira localização" }], collects: { "Plástico": "2kg", "Metal": "12Kg"}, favorite: true },
  ];

  export default globalData;

  // status:
  // 1: aberta (coleta solicitada)
  // 2: nova
  // 3: atrasado
  // 4: arquivado