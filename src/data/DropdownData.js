import { Menu } from "antd";

export const Laptop = (
<Menu className="text-center w-[140px]"
items={[
  {
    key: '1',
    label:"MSI"
  },
  {
    key: '2',
    label:"HP",
  },
  {
    key: '3',
    label:"LENOVA" ,
    
  },
  {
    key: '4',
    label: 'RAZER',
  },
  {
    key: '5',
    label: 'ASUS',
  } ,
]}
/>
);


export const Console = (
    <Menu className="text-center w-[140px]"
    items={[
      {
        key: '1',
        label:"XBOX"
      },
      {
        key: '2',
        label:"PS5",
      },
      {
        key: '3',
        label:"ps2" ,
        disabled: true,
      },
      {
        key: '4',
        label: 'PS4',
      },
    ]}
    />
    );


    export const Phone = (
      <Menu className="text-center w-[140px]"
      items={[
        {
          key: '1',
          label:"iphone"
        },
        {
          key: '2',
          label:"samsung",
        },
        {
          key: '3',
          label:"xiamoi" ,
        },
        {
          key: '4',
          label: 'honor',
        },
      ]}
      />
      );
      


      export const Tablet = (
        <Menu className="text-center w-[140px]"
        items={[
          {
            key: '1',
            label:"iphone"
          },
          {
            key: '2',
            label:"samsung",
          },
          {
            key: '3',
            label:"xiamoi" ,
          },
          {
            key: '4',
            label: 'msi',
          },
        ]}
        />
        );


        export const SmartWatch = (
          <Menu className="text-center w-[140px]"
          items={[
            {
              key: '1',
              label:"iphone"
            },
            {
              key: '2',
              label:"samsung",
            },
            {
              key: '3',
              label:"xiamoi" ,
            },
          
          ]}
          />
          );