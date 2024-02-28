//tạo ba đối tượng sinh viên (student, student1, student2) và thêm vào mảng arr
let student = new Student('01', "Nguyễn Tất Quân", '30/11/2001', 'Nam','UDTS24.01','https://i.pinimg.com/564x/6f/3b/8f/6f3b8f2937e5c326da3f327112cf819f.jpg' );
let student1 = new Student('02','Phan Thanh Thảo','01/08/1999','Nữ', 'UDTS24.02','https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg');
let student2 = new Student('03','Trần Ngọc Duy','18/09/1995','Nam','UDTS24.03','https://i.pinimg.com/564x/bf/84/39/bf8439fe825fff289c6472d34b3b7f77.jpg');
let arr =[student, student1, student2];
//tạo đối tượng quản lý sinh viên manage từ lớp StudentManagement với danh sách sinh viên arr.
let manage = new StudentManagement(arr);

//lấy thông tin từ các trường nhập liệu trên giao diện,
// tạo một đối tượng sinh viên mới,
// thêm vào danh sách quản lý,
// và hiển thị lại danh sách sinh viên.
function addStudent(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let grade = document.getElementById('grade').value;
    let img = document.getElementById('img').value;

    let student = new Student(id,name,date,gender,grade,img);
    manage.addStudent(student);
    manage.showList();


}
//để xóa nội dung sau khi thêm sinh viên thành công.
function clear(){
    document.getElementById('id').value = '';
    document.getElementById('fullname').value = '';
    document.getElementById('date').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('img').value= '';
}
clear();
//xóa sinh viên theo id và sau đó hiển thị lại danh sách sinh viên.
function deleteStudent(id) {
    manage.delete(id);
    manage.showList();
}

let studentId = 0;

// lấy thông tin cần chỉnh sửa, hiển thị lên các trường nhập liệu để  có thể chỉnh sửa.
function editStudent(id){
    let student = manage.findStudentById(id);
    document.getElementById('id').value = student.id;
    document.getElementById('fullname').value = student.fullname;
    document.getElementById('date').value = student.date;
    document.getElementById('gender').value = student.gender;
    document.getElementById('grade').value = student.grade;
    document.getElementById('img').value = student.img;

    studentId = id;
}

//lấy thông tin mới từ các trường nhập liệu, cập nhật và hiển thị lại danh sách sinh viên.
function updateStudent(){
    let id = document.getElementById('id').value;
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let grade = document.getElementById('grade').value;
    let img = document.getElementById('img').value;

    let student = manage.findStudentById(studentId);
    manage.edit(student,id,name,date,gender,grade, img);
    manage.showList();
    clear();
}
//hiển thị danh sách sinh viên ban đầu khi trang web được tải.
manage.showList();