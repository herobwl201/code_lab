
        let list = document.querySelectorAll('.list');
        let itemBox = document.querySelectorAll('.card');

        for (let i = 0; i < list.length; i++) {
            list[i].addEventListener("click", function () {
                for (let j = 0; j < list.length; j++) {
                    list[j].classList.remove("active");
                }
                this.classList.add("active");
                let dataFilter = this.getAttribute('data-filter');

                for (let k = 0; k < itemBox.length; k++) {
                    itemBox[k].classList.remove("active");
                    itemBox[k].classList.add("hide");
                    console.log(dataFilter, itemBox[k].getAttribute("data-item"))
                    if (itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "All") {
                        itemBox[k].classList.remove("hide");
                        itemBox[k].classList.add("active");
                    }
                }
            })
        }
        const buttonsPagination = document.querySelectorAll(".pagination > button");
        for (let i = 0; i < buttonsPagination.length; i++) {
            buttonsPagination[i].addEventListener("click", function () {
                for (let j = 0; j < buttonsPagination.length; j++) {
                    buttonsPagination[j].classList.remove("active");
                }
                this.classList.add("active");
            })
        }
    