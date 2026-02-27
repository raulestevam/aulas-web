let profile: string = "user";

switch(profile){
    case "admin":
        console.log("Acesso total ao sistema");
        break;
    case "user":
        console.log("Acesso Limitado");
        break;
    case "outsider":
        console.log("Apenas leitura");
        break;
    default:
        console.log("perfil nao reconhecido");
}