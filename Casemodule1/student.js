    // khai báo lớp
class Student {
    // khởi tạo các thuộc tính tương ứng của đối tượng.
    constructor (id, fullname, date, gender, grade, img) {
        this.id= id;
        this.fullname= fullname;
        this.date= date;
        this.gender= gender;
        this.grade= grade;
        this.img = img;
    }
   
    //nhận các tham số mới và gán chúng cho các thuộc tính tương ứng.
    edit(id, fullname, date,gender, grade, img){
        this.id = id;
        this.fullname = fullname;
        this.date = date;
        this.gender = gender;
        this.grade = grade;
        this.img = img
    }
}