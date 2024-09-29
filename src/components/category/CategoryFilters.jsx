import React from "react";
import "./categoryFilters.css";
import Accordion from "./Accordion";



const filters=[

  {
    id:1,
    name:"مدل کارت گرافیک",
    items:[
      {
        id:1,
        name:"rtx 3080",
        checked:false
      },
      {
        id:2,
        name:"rtx 3090",
        checked:false
      },
      {
        id:3,
        name:"rtx 2060",
        checked:false
      },
      {
        id:4,
        name:"rtx 2070",
        checked:false
      },
      {
        id:5,
        name:"rtx 3070",
        checked:false
      },
    ]
  },
  {
    id:2,
    name:"مدل پردازنده",
    items:[
      {
        id:1,
        name:"intel 13900H",
        checked:false
      },
      {
        id:2,
        name:"intel 14900k"
      },
      {
        id:3,
        name:"amd radeon"
      },
      {
        id:4,
        name:"ryzen 5400h"
      }
    ]
  },
  {
    id:3,
    name:"برند ",
    items:[
      {
        id:1,
        name:"intel 13900H",
        checked:false
      },
      {
        id:2,
        name:"intel 14900k"
      },
      {
        id:3,
        name:"amd radeon"
      },
      {
        id:4,
        name:"ryzen 5400h"
      }
    ]
  },
  {
    id:4,
    name:"مدل پردازنده",
    items:[
      {
        id:1,
        name:"intel 13900H",
        checked:false
      },
      {
        id:2,
        name:"intel 14900k"
      },
      {
        id:3,
        name:"amd radeon"
      },
      {
        id:4,
        name:"ryzen 5400h"
      }
    ]
  }
]

 function openAc() {
  document.querySelectorAll(".accordion-button").forEach((button) => {
    button.addEventListener("click", () => {
      const accordionItem = button.parentElement;
      accordionItem.classList.toggle("active");
    });
  });
}


function CategoryFilters() {

  return (
    <div className="w-full mx-auto px-2 mt-2">
      <div className=" text-center rounded-2xl   w-[18rem] translate-x-14 ">
        {
          filters.map((filter)=>(
            <Accordion  title={filter.name} content={
              <div className="form-control   gap-[1px]  ">
              {
                filter.items.map((item)=>(
                  <label className="label cursor-pointer  px-6">
                  <input type="checkbox"  className="checkbox   checkbox-md text-4xl  checkbox-info "  />
                  <span className="label-text text-xs 2xl:text-lg text-gray-600">{item.name}</span>
                </label>
                ))
              }
             
            </div>
            }/>
           
          ))
        }
    
    </div>
    <div className="filter-btn py-2   items-center flex justify-center   translate-x-8">
        <button className="btn   text-xl hover:text-primary font-semibold  w-[18rem] rounded-lg bg-primary text-white hover:bg-white duration-300 ">فیلتر</button>
      </div>
    </div>
  );
}

export default CategoryFilters;
