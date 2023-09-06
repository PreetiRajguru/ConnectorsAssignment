import logoImage2 from '../Assets/Images/msd.png';
import logoImage3 from '../Assets/Images/another.png';
import logoImage4 from '../Assets/Images/plugin.png';



export const SidebarData = [
    {
      title: "PERSONAL",
      items: [
        { item1: "My Profile" },
        { item2: "Notifications" }
      ]
    },
    {
      title: "ORGANIZATION",
      items: [
        { item1: "General" },
        { item2: "Roles & Permissions" },
        { item3: "Teams" },
        { item4: "Users" }]
    },
    {
      title: "COMMUNICATIONS",
      items: [
        { item1: "Channels" },
        { item2: "Quick Replies" },
        { item3: "Templates" }]
    },
    {
      title: "KNOWLEDGE",
      items: [
        { item1: "Approval Process" },
        { item2: "Libraries" },
        { item3: "Templates" }]
    },
    {
      title: "OBJECT MANAGEMENT",
      items: [
        { item1: "Bulk Imports" },
        { item2: "Card Layouts" },
        { item3: "Custom Fields" }]
    }
  ]

export const GeneralDetailsData = [{
    desc: "Microsoft Dynamics is a line of enterprise Resource Planning and customer relationship management software applications. Microsoft markets Dynamics applications through a network of reselling partners who provide specialized services. ",
    learnMoreLink: '#',
    helpLink: '#',
}]

export const AccountData = [{
    url: "https://ovationcxm.msdynamics.com",
    acc: 'jmith@ovationcxm.com',
    apikey: '2xo4jdajh5541as3',
    apisecret: '**********',
}]

export const newConnectorsData = [{
    cardicon: { logoImage2 },
    cardtitle: 'Microsoft Dynamics'
  },
  {
    cardicon: { logoImage4 },
    cardtitle: 'Custom Connector  '
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector'
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector'
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector'
  }]

  export  const connectorsData = [{
    cardicon: { logoImage2 },
    cardtitle: 'Microsoft Dynamics',
    name: 'Connector Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isEnabled: false,
    dropdown: false,
    link: "https://example.com"
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: 'Lorem ipsum.',
    isEnabled: false,
    dropdown: false,
    link: "https://example.com"
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    isEnabled: false,
    dropdown: false,
    link: "https://example.com"
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isEnabled: false,
    dropdown: false,
    link: "https://example.com"
  },
  {
    cardicon: { logoImage3 },
    cardtitle: 'Another Connector',
    name: 'Connector Name',
    description: '',
    isEnabled: false,
    dropdown: false,
    link: "https://example.com"
  }]