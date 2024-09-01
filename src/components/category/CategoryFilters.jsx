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
    <div className="w-full mx-auto px-4">
      <div className=" text-center rounded-2xl bg-white py-4 w-full   ">
        {
          filters.map((filter)=>(
            <Accordion  title={filter.name} content={
              <div className="form-control   gap-[1px]  ">
              {
                filter.items.map((item)=>(
                  <label className="label cursor-pointer  px-6">
                  <input type="checkbox"  className="checkbox   checkbox-md text-4xl  checkbox-info "  />
                  <span className="label-text text- 2xl:text-lg text-gray-600">{item.name}</span>
                </label>
                ))
              }
             
            </div>
            }/>
           
          ))
        }
    
    </div>
    <div className="filter-btn py-6   items-center flex justify-center  ">
        <button className="btn  text-2xl text-gray-600 font-semibold  w-full rounded-xl hover:bg-primary hover:text-white bg-white duration-300 ">فیلتر</button>
      </div>
    </div>
  );
}

export default CategoryFilters;
