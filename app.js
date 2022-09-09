let data = [
    {
        id: 1,
        companyname: "iphone",
        model:"11 pro"
    },
    {
        id: 2,
        companyname: "samsung",
        model:"S9+"
    },
    {
        id: 3,
        companyname: "oppo",
        model:"A1K",
    },
    {
        id: 4,
        companyname: "iphone",
        model:"12 pro",
    },
    {
        id: 5,
        companyname: "Realme",
        model:"C12",
    },
    {
        id: 6,
        companyname: "samsung",
        model:"S9+"
    },
    {
        id: 7,
        companyname: "iphone",
        model:"13 pro"

    },
]






document.querySelector(".search-model").addEventListener("change", e => {
    let val = e.target.value; //get the value from the form
    console.log(val);
    let searched = data.filter(d => d.model.toLowerCase() === val);
    display(searched);
  });


  function display(data) {
    /** Display the data somehow **/
    console.log(data);
  }


