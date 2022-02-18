import { Component, Input, OnInit } from "@angular/core";
import { Card } from "../app.component";


@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
    interpolation: ['[[', ']]']
})
export class CardComponent implements OnInit {

    @Input() card: Card = {
        title: '',
        text: ''
    }

    @Input() index: number = 0;

    title = "My Card Title"
    text = "My simple text";

    cardDate: Date = new Date();

    textColor: string = ''

    disabled: boolean = false;

    number: number = 19;
    array: number[] = [1, 2, 3, 4, 5];

    obj = {name: 'Zhannur', info: {age: 25, job: 'Frontend'}}

    getInfo(): string {
        return 'This is my info';
    }

    imgUrl: string = "https://www.creativefabrica.com/wp-content/uploads/2020/02/10/Monkey-Logo-Graphics-1-2.jpg";

    ngOnInit(): void {
        setTimeout(() => {
            // this.imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jPObGSD5DcsvbQrn-VX5-HbiKhAKz8VSQlgI2sYoEN1nK4IV-lWvXDHKT31XFXp6ghg&usqp=CAU"
            // this.disabled = true
        }, 3000)
    }

    changeTitle() {
        this.card.title = 'Title has been changed'
    }

    inputHandler(value: string) {
        this.card.title = value
    }

    changeHandler() {
        console.log(this.title);
        
    }
}