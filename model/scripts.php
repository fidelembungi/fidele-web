<?php
//connexion à la base des données
try {
    $db = new PDO("mysql:dbname=prototype;host=localhost;", "root", "");
    $db->exec("SET NAMES UTF8");
    $db->SETAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    // echo "la connexion ça marche";
}
//gestion des erreurs
catch (PDOException $e) {
    die('erreur:' . $e->getMessage());
}
//conditions avec la methode switch-case
if (isset($_POST["ent"])) {
    $ent = $_POST["ent"];
    $resultat = array();

    //methode switch-case
    switch ($ent) {

        //commentaires vers bdd

        case 'commentaires_ajout':

            $nom = addslashes($_POST["nom"]);
            $email = addslashes($_POST["email"]);
            $commentaire = addslashes($_POST["commentaire"]);

            if ($requete = $db->query("insert into commentaires(noms, email, commentaires) values('$nom', '$email', '$commentaire')")) {
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }
            break;
        //messages vers bdd

        case 'messages_ajout':

            $nom = addslashes($_POST["nom"]);
            $email = addslashes($_POST["email"]);
            $tel = addslashes($_POST["tel"]);
            $message = addslashes($_POST["message"]);

            if ($requete = $db->query("insert into messages(noms, email, telephone, messages) values('$nom', '$email', '$tel', '$message')")) {
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }
            break;

        // entete de connexion
        case 'connexion':
            $nom_utilisateur = addslashes($_POST["username"]);
            $mot_de_passe = addslashes($_POST["mdp"]);
            $sql = "select * from users where username='$nom_utilisateur' and mdp='$mot_de_passe'";
            $requete = $db->query($sql);
            $data = $requete->fetchAll();
            $n = $requete->rowcount();
            if ($n == 1) {
                //$resultat = array(1);
                $resultat = array(1, $data[0]["username"], $data[0]["statut"], $data[0]["img"]);
            } else {
                $resultat = array(0);
            }
            break;

        // Ajout des services dans la base des données

        case 'table_commentaires':
            $sql = "select * from commentaires";
            $requete = $db->query($sql);
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            $n = $requete->rowcount();
            if ($n > 0) {
                foreach ($data as $ligne) {
                    $resultat[] = $ligne;
                }
            }
            break;

        case 'table_messages':
            $sql = "select * from messages";
            $requete = $db->query($sql);
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            $n = $requete->rowcount();
            if ($n > 0) {
                foreach ($data as $ligne) {
                    $resultat[] = $ligne;
                }
            }
            break;

        case 'Afficher_services':
            $sql = "select * from services";
            $requete = $db->query($sql);
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            $n = $requete->rowcount();
            if ($n > 0) {
                foreach ($data as $ligne) {
                    $resultat[] = $ligne;
                }
            }
            break;
        // Ajout des paragraphes dans la base des données

        case 'Afficher_paragraphes':
            $sql = "select * from paragraphes";
            $requete = $db->query($sql);
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            $n = $requete->rowcount();
            if ($n > 0) {
                foreach ($data as $ligne) {
                    $resultat[] = $ligne;
                }
            }
            break;

        case 'Afficher_commentaires':
            $sql = "select *, date_format(date_creee, '%d.%m.%Y') as date from commentaires";
            $requete = $db->query($sql);
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            $n = $requete->rowcount();
            if ($n > 0) {
                foreach ($data as $ligne) {
                    $resultat[] = $ligne;
                }
            }
            break;

        case 'Afficher_messages':
            $sql = "select *, date_format(date_creee, '%d.%m.%Y') as date from messages";

            $requete = $db->query($sql);
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            $n = $requete->rowcount();
            if ($n > 0) {
                foreach ($data as $ligne) {
                    $resultat[] = $ligne;
                }
            }
            break;
        // Ajout des cards dans la base des données

        case 'Afficher_cards':
            $sql = "select * from cards";
            $requete = $db->query($sql);
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            $n = $requete->rowcount();
            if ($n > 0) {
                foreach ($data as $ligne) {
                    $resultat[] = $ligne;
                }
            }
            break;
        case 'table_services':
            $sql = "select * from services";
            $requete = $db->query($sql);
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            $n = $requete->rowcount();
            if ($n > 0) {
                foreach ($data as $ligne) {
                    $resultat[] = $ligne;
                }
            }
            break;
        case 'table_cards':
            $sql = "select * from cards";
            $requete = $db->query($sql);
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            $n = $requete->rowcount();
            if ($n > 0) {
                foreach ($data as $ligne) {
                    $resultat[] = $ligne;
                }
            }
            break;
        case 'table_paragraphes':
            $sql = "select * from paragraphes";
            $requete = $db->query($sql);
            $data = $requete->fetchAll(PDO::FETCH_ASSOC);
            $n = $requete->rowcount();
            if ($n > 0) {
                foreach ($data as $ligne) {
                    $resultat[] = $ligne;
                }
            }
            break;
        case 'supprime':

            $id = addslashes($_POST["id"]);
            $sql = "delete from paragraphes where id='$id'";
            $requete = $db->query($sql);
            if ($requete = $db->query($sql)) {
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }

            break;

        case 'suppressions':

            $id = addslashes($_POST["id"]);
            $sql = "delete from commentaires where id='$id'";
            $requete = $db->query($sql);
            if ($requete = $db->query($sql)) {
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }

            break;

        case 'suppression':

            $id = addslashes($_POST["id"]);
            $sql = "delete from messages where id='$id'";
            $requete = $db->query($sql);
            if ($requete = $db->query($sql)) {
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }

            break;

        case 'supprimers':

            $id = addslashes($_POST["id"]);
            $sql = "delete from cards where id='$id'";
            $requete = $db->query($sql);
            if ($requete = $db->query($sql)) {
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }

            break;

        case 'supprimer':
            $id = addslashes($_POST["id"]);
            $fichier = "";
            $sql1 = "select images from cards where id='$id'";
            $requete1 = $db->query($sql1);
            $data1 = $requete1->fetchall();
            $n1 = $requete1->rowcount();
            if ($n1 == 1) {

                $fichier = "../media/card_acceuil/Card_img_accueil_" . $data1[0]["images"];
            }

            $sql = "delete from cards where id='$id'";
            $requete = $db->query($sql);

            if ($requete = $db->query("delete from cards where id='$id'")) {
                unlink($fichier);
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }
            break;
        case 'suppr':
            $id = addslashes($_POST["id"]);
            $fichier = "";
            $sql1 = "select images from services where id='$id'";
            $requete1 = $db->query($sql1);
            $data1 = $requete1->fetchall();
            $n1 = $requete1->rowcount();
            if ($n1 == 1) {

                $fichier = "../media/services/" . $data1[0]["images"];
            }

            $sql = "delete from services where id='$id'";
            $requete = $db->query($sql);

            if ($requete = $db->query("delete from services where id='$id'")) {
                unlink($fichier);
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }
            break;
        case 'supprs':

            $id = addslashes($_POST["id"]);
            $sql = "delete from services where id='$id'";
            $requete = $db->query($sql);
            if ($requete = $db->query($sql)) {
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }

            break;
        case 'selectionner':
            $id = addslashes($_POST["id"]);
            $sql = "select * from services where id='$id'";
            $requete = $db->query($sql);
            $data = $requete->fetchAll();
            $n = $requete->rowcount();
            if ($n == 1) {
                //$resultat = array(1);
                $resultat = array(
                    1,
                    $data[0]["id"],
                    $data[0]["grand_titre"],
                    $data[0]["petit_titre"],
                    $data[0]["span"],
                    $data[0]["details"],
                    $data[0]["images"]
                );
            } else {
                $resultat = array(0);
            }
            break;
        case 'selectionner1':
            $id = addslashes($_POST["id"]);
            $sql = "select * from paragraphes where id='$id'";
            $requete = $db->query($sql);
            $data = $requete->fetchAll();
            $n = $requete->rowcount();
            if ($n == 1) {
                //$resultat = array(1);
                $resultat = array(
                    1,
                    $data[0]["id"],
                    $data[0]["titre"],
                    $data[0]["details"]
                );
            } else {
                $resultat = array(0);
            }
            break;
        case 'selectionner2':
            $id = addslashes($_POST["id"]);
            $sql = "select * from cards where id='$id'";
            $requete = $db->query($sql);
            $data = $requete->fetchAll();
            $n = $requete->rowcount();
            if ($n == 1) {
                //$resultat = array(1);
                $resultat = array(
                    1,
                    $data[0]["id"],
                    $data[0]["titre"],
                    $data[0]["details"]
                );
            } else {
                $resultat = array(0);
            }
            break;

        case 'Ajout_service':

            $photo = "";
            $g_titre = addslashes($_POST["g_titre"]);
            $p_titre = addslashes($_POST["p_titre"]);
            $span = addslashes($_POST["span"]);
            $detail = addslashes($_POST["detail"]);
            $nom_image =  $g_titre . "_" . $p_titre . "_" . $span;
            //$nom_image = str_replace('/', '_',$nom_image);
            if (isset($_FILES['photo']['name'])) {
                $avatarExploded = explode('.', $_FILES['photo']['name']);
                $image_ext = strtolower(end($avatarExploded));

                if (!in_array($image_ext, array('jpg', 'jpeg', 'png', 'gif', 'pdf'))) {
                    echo "<script>alert('Fichier invalide');</script>";
                } else {
                    $name_file = $nom_image  . "." .  $image_ext;  //recuperation du nom du fichier pour enregistrer un nouveau a la destination $_POST['pseudouser']"CE-2011"
                    //$name_file =$_FILES['file']['name'];				
                    // on copie le fichier dans le dossier de destination
                    move_uploaded_file($_FILES['photo']['tmp_name'], "../media/services/" . $name_file);
                }
                $photo = $name_file;
            }
            if ($requete = $db->query("insert into services(grand_titre, petit_titre, images, span, details) values('$g_titre', '$p_titre', '$photo', '$span', '$detail')")) {
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }
            break;
        case 'Ajout_card':

            $photo = "";
            $titre = addslashes($_POST["titre"]);
            $details = addslashes($_POST["details"]);
            $nom_image = $titre;
            //$nom_image = str_replace('/', '_',$nom_image);
            if (isset($_FILES['photo']['name'])) {
                $avatarExploded = explode('.', $_FILES['photo']['name']);
                $image_ext = strtolower(end($avatarExploded));

                if (!in_array($image_ext, array('jpg', 'jpeg', 'png', 'gif', 'pdf'))) {
                    echo "<script>alert('Fichier invalide');</script>";
                } else {
                    $name_file = $nom_image  . "." .  $image_ext;  //recuperation du nom du fichier pour enregistrer un nouveau a la destination $_POST['pseudouser']"CE-2011"
                    //$name_file =$_FILES['file']['name'];				
                    // on copie le fichier dans le dossier de destination
                    move_uploaded_file($_FILES['photo']['tmp_name'], "../media/card_acceuil/Card_img_accueil_" . $name_file);
                }
                $photo = $name_file;
            }
            if ($requete = $db->query("insert into  cards(titre, images, details) values('$titre', '$photo', '$details')")) {
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }
            break;
        case 'Ajout_paragraphe':

            $titre = addslashes($_POST["titre"]);
            $details = addslashes($_POST["details"]);

            if ($requete = $db->query("insert into paragraphes(titre, details) values('$titre', '$details')")) {
                $resultat = array(1);
            } else {
                $resultat = array(0);
            }
            break;
    }
    echo (json_encode($resultat));
} else {
    $resultat = array("n" => 500);
    echo (json_encode($resultat));
}
