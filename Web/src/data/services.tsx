interface IServices {
  id: string;
  description: string;
  title: string;
  icon: JSX.Element | React.ReactElement;
  image?: string;
}
const services: IServices[] = [
  {
    id: "464f93a0-786f-4ed8-a54b-8d40785c4bf5",
    title: "Services 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: (
      <img
        alt="card-bg"
        className="image-icon"
        src="/assets/icons/money-plant.png"
        width={50}
      />
    ),
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service5-600x678.jpg",
  },
  {
    id: "df3209af-e03a-4ce7-bb43-4c5883a25367",
    title: "Services 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: (
      <img
        alt="card-bg"
        className="image-icon"
        src="/assets/icons/thinking-icon.png"
        width={50}
      />
    ),
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service8-600x678.jpg",
  },
  {
    id: "a6a29be2-dae9-4fdb-8446-9251e45b351e",
    title: "Services 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: (
      <img
        alt="card-bg"
        className="image-icon"
        src="/assets/icons/money-plant.png"
        width={50}
      />
    ),
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service6-600x678.jpg",
  },
  {
    id: "bf9eee92-1c3f-4315-a035-3de6029a7994",
    title: "Services 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: (
      <img
        alt="card-bg"
        className="image-icon"
        src="/assets/icons/money-plant.png"
        width={50}
      />
    ),
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service7-600x678.jpg",
  },
  {
    id: "c3a023f2-f856-43ba-a84d-eae1943aa85e",
    title: "Services 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: (
      <img
        alt="card-bg"
        className="image-icon"
        src="/assets/icons/money-plant.png"
        width={50}
      />
    ),
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service7-600x678.jpg",
  },
  {
    id: "c3a023f2-f856-43ba-a84d-eae1943aa85e",
    title: "Services 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: (
      <img
        alt="card-bg"
        className="image-icon"
        src="/assets/icons/money-plant.png"
        width={50}
      />
    ),
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service5-600x678.jpg",
  },
  {
    id: "c3a023f2-f856-43ba-a84d-eae1943aa85e",
    title: "Services 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: (
      <img
        alt="card-bg"
        className="image-icon"
        src="/assets/icons/money-plant.png"
        width={50}
      />
    ),
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service8-600x678.jpg",
  },
  {
    id: "c3a023f2-f856-43ba-a84d-eae1943aa85e",
    title: "Services 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: (
      <img
        alt="card-bg"
        className="image-icon"
        src="/assets/icons/money-plant.png"
        width={50}
      />
    ),
    image:
      "https://demo.casethemes.net/itfirm/wp-content/uploads/2021/09/service5-600x678.jpg",
  },
];

export default services;
