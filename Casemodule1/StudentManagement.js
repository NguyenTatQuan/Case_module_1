class StudentManagement {
    //khởi tạo thuộc tính students của đối tượng StudentManagement bằng mảng
    constructor(arr) {
        this.students = arr;
    }
    // hiển thị danh sách sinh viên ra màn hình.
    showList() {
        let table = '';
        for (let i = 0; i < this.students.length; i++) {
        //Duyệt qua mảng để tạo các dòng bảng,hiển thị thông tin của từng sinh viên

            table += '<tr>';
            table += '<td>';
            table += this.students[i].id;
            table += '</td>';

            table += '<td>';
            table += this.students[i].fullname;
            table += '</td>';

            table += '<td>';
            table += this.students[i].date;
            table += '</td>';

            table += '<td>';
            table += this.students[i].gender;
            table += '</td>';

            table += '<td>';
            table += this.students[i].grade;
            table += '</td>';

            table += '<td>';
            table += '<img alt=""  width="100px" height="100px" src=" '+this.students[i].img+'">';
            table += '</td>';

            //tạo nút "Delete" và "Edit" cho mỗi sinh viên để thực hiện xóa hoặc chỉnh sửa thông tin
            table += '<td>' +
                '<button style="background-color: #46ff2c; color: #000000 "  type="button" onclick="deleteStudent('+i+')">Delete</button> ' +
                ' <button  style="background-color: #ffd740 ; color: #000000" type="button" onclick="editStudent('+i+')">Edit</button>' +
                '</td>';
            table += '</tr>';
        }
        document.getElementById('list-student').innerHTML = table;
    }
    //thêm một sinh viên mới vào danh sách
    addStudent(student) {
        this.students.push(student);
    }
    //xóa sinh viên khỏi danh sách dựa trên id.
    delete(id) {
        this.students.splice(id, 1);
    }
    //tìm sinh viên trong danh sách dựa trên id và trả về thông tin của sinh viên đó.
    findStudentById(id){
        return this.students[id];
    }
    //chỉnh sửa và cập nhật thông tin
    edit(student,id, fullname, date, gender, grade, img){
        student.edit( id, fullname, date,gender, grade, img);
    }

}