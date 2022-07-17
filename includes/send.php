
<div class="card card-body">
    <!-- creamosuna tarjeta -->
    <form action="save_task.php" method="POST"><!-- accion le dice donde va a enviar y a traves de que metodo -->
    <!-- agrupamos formularios-->
        <div class="form-group">
            <input type="text" name="title" class="form-control" 
            laceholder=" task title" autofocus></input>
        </div>
        <div class="form-group">
            <textarea name="description"  rows="2" class="form-control" placeholder=" task description"></textarea> 
        </div>
    <input type="submit" class="btn btn-success btn-block" name="save_task" value="save task"></input>
    </form>
 </div>