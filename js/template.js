const template = `<div id="coverPage" class=" p-5">
    <div align="center" class="">
        <h2 class="headLine" id="test">
            Saic Institute Of Management and Technology
        </h2>
        <span class="sub-tx">Institute Code : 132227</span><br>
        <img src="./img/logo.png" alt="" class="img-fluid logo">
    </div>
    <div class="container mt-3">
        <div class="d-flex">
            <h5>Subject Name : </h5>
            <h5 class="value-name w-n " id="subjectName"> </h5>
        </div>
        <div class="d-flex">
            <h5>Subject Code : </h5>
            <h5 class="value-name w-n" id="subjectCode"> </h5>
        </div>
        <br>
        <h4 class="text-center title font-bold">Submitted To</h4>
        <div class="container mt-3">

            <table class="table table-bordered ">
                <thead>
                    <tr>
                        <th scope="col" class="px-0 bx">Name</th>
                        <th scope="col" class="px-0">:</th>
                        <th scope="col" class="u-data" id="techerName"></th>
                    </tr>
                    <tr>
                        <th scope="col" class=" px-0 bx">Designation</th>
                        <th class="px-0" scope="col">:</th>
                        <th scope="col" class="u-data" id="designation"></th>
                    </tr>
                    <tr>
                        <th scope="col" class=" px-0 bx">Department</th>
                        <th class="px-0" scope="col">:</th>
                        <th scope="col" class="u-data" id="techerDep"></th>
                    </tr>
                </thead>
            </table>
            <h4 class="text-center title font-bold">Submitted By</h4>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" class="px-0 bx">Name</th>
                        <th scope="col" class="px-0">:</th>
                        <th scope="col" class="u-data" id="studentName"></th>
                    </tr>
                    <tr>
                        <th scope="col" class=" px-0 bx">Roll</th>
                        <th class="px-0" scope="col">:</th>
                        <th scope="col" class="u-data" id="displayRoll"></th>
                    </tr>
                    <tr>
                        <th scope="col" class=" px-0 bx">Department</th>
                        <th class="px-0" scope="col">:</th>
                        <th scope="col" class="u-data" id="studentDepartment"></th>
                    </tr>
                    <tr>
                        <th scope="col" class=" px-0 bx">Semester</th>
                        <th class="px-0" scope="col">:</th>
                        <th scope="col" class="u-data" id="displaySemester"></th>
                    </tr>
                
                </thead>
            </table>

            <div class="d-flex justify-content-between">
                <div class="bx1">
                    <h5>Date of submission : </h5>
                </div>
                <div class="bx2">
                    <h5>Signature</h5>
                </div>
            </div>
        </div>
    </div>
</div>`