document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('changeButton').addEventListener('click', function() {

        const name = document.getElementById('name').innerText;
        const surname = document.getElementById('surname').innerText;
        const dob = document.getElementById('dob').innerText;
        const gender = document.getElementById('gender').innerText;

     
        document.getElementById('editName').value = name;
        document.getElementById('editSurname').value = surname;
        document.getElementById('editDob').value = dob;
        document.getElementById('editGender').value = gender;

       
        document.getElementById('editForm').style.display = 'flex';
    });

    document.querySelector('.popup__close').addEventListener('click', function() {
        document.getElementById('editForm').style.display = 'none';
    });

    document.getElementById('personalInfoForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        document.getElementById('name').innerText = document.getElementById('editName').value;
        document.getElementById('surname').innerText = document.getElementById('editSurname').value;
        document.getElementById('dob').innerText = document.getElementById('editDob').value;
        document.getElementById('gender').innerText = document.getElementById('editGender').value;

        const avatarInput = document.getElementById('editAvatar');
        const avatarImage = document.getElementById('avatarImage');
        const mainAvatar = document.getElementById('mainAvatar'); 

        if (avatarInput.files && avatarInput.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                avatarImage.src = e.target.result;
                mainAvatar.src = e.target.result;
            };
            
            reader.readAsDataURL(avatarInput.files[0]);  
        }

        document.getElementById('editForm').style.display = 'none';
    });
});
