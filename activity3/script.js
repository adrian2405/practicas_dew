
        let send = document.getElementById('send');
        send.addEventListener("click", load);

        function load(){

        let content = document.getElementById('container');
        content.innerHTML = '';
        let table = document.createElement('table');
        content.appendChild(table);

        let tr = document.createElement('tr');

        let td;

        tr.textContent = '#';

        table.appendChild(tr);

        let cols = document.getElementById('col').value;
        let rows = document.getElementById('row').value;

        colums = parseInt(cols);
        rows = parseInt(rows);

        for (i = 0; i < colums; i++) {

            tr.innerHTML += `
                                                          
            <th>Columns </th>
                                                          
            `
        }

        for (i = 0; i < rows; i++) {

            tr = document.createElement('tr');

            for (let j = 0; j < colums + 1; j++) {

                td = document.createElement('td');

                tr.appendChild(td);

                if (j == 0) {

                    td.innerHTML += `
                                                                          
                    <th>Rows </th>
                                                                      
                     `
                } else {
                    td.innerHTML += `
                                                                          
                    Row: ${i+1}, Col: ${j}
                                                                          
                    `
                }

            }

            table.appendChild(tr);

        }

        }