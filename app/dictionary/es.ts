const welcomeOnBoarding = {
    slide_one_message: "Descubre las noticias que realmente te importan. Personaliza tu experiencia y mantente al día con los temas que te apasionan.",
    slide_one_title_1: "News",
    slide_one_title_2: "Board",
    subtitle_1: "Busca,",
    subtitle_2: "elige,",
    subtitle_3: "lee",

    slide_two_message: "Elige 5 temas para comenzar a navegar. Disfruta de tu feed personalizado y mantente al tanto de lo que más te importa.",
    slide_two_title_1: "Personaliza",
    slide_two_title_2: "tu",
    slide_two_title_3: "Feed",

    slide_three_message: "Configura filtros de búsqueda avanzados para recibir las noticias más relevantes sobre tus temas favoritos.",
    slide_three_title_1: "Crea",
    slide_three_title_2: "filtros",

    slide_four_message: "Regístrate para personalizar tu experiencia y acceder a todas las funcionalidades de News Board. Guarda tus filtros, recibe notificaciones y disfruta de un feed a tu medida.",
    slide_four_title_1: "Comienza",
    slide_four_title_2: "ya",
    slide_four_option_1: "Nueva cuenta",
    slide_four_option_2: "Ya tengo cuenta",
}
const auth = {
    //Register
    register_title: "Registrate",
    username_label: "Ingresa tu nombre",
    email_label: "Email",
    password_label: "Contraseña",
    confirm_pass_label: "Confirmar contraseña",
    register_button: "Registrarme",
    already_has_account: "¿ Ya tienes cuenta ? ",
    log_in_option: "Iniciar Sesión",
    register_using_google: "Registrate usando tu cuenta de google",
    //Login
    login_title: "Iniciar sesión",
    login_using_google: "Inicia usando tu cuenta de google",
    login_button: "Ingresar",
    not_has_account: "¿ Aun no tienes cuenta ?"
}

const errors = {
    alert_generic_title: "Atención",
    generic_error: "Verificar campo.",
    invalid_email: "El email ingresado no es válido.",
    short_pass: "La contraseña debe tener al menos 8 caracteres.",
    missing_upper_char: "La contraseña debe contener al menos una letra mayúscula.",
    repeat_pass_not_match:  "Las contraseñas no coinciden.",
    empty_field: "Campo vacío.",
    email_already_in_use: "La dirección de correo electrónico ya está en uso por otra cuenta.",
    invalid_credential: "Las credenciales de autenticación proporcionadas son incorrectas, están mal formadas o han expirado."
}
export type ErrorsTx = keyof typeof errors

const loading = {
    general: "Procesando solicitud...",
    loading_article: "Loading..."
}
export type LoadingTx = keyof typeof loading

const interestsOnBoarding = {
    title: "Personaliza tu feed",
    message: "Elige al menos 4 temas para continuar y comenzar a navegar.",
    button: "Continuar"
}
const editInterests = {
    title: "Añade intereses",
    message: "Utiliza intereses para seguir temas específicos y obtener la información que buscas.",
    error: "Agrega al menos un interés para guardar los cambios y personalizar tu experiencia."
}
const interests = [
    {id: "International", keyword: "Internacional", label: "Internacional"},
    {id: "BreakingNews", keyword: "Última Hora", label: "Última Hora"},
    {id: "Economy", keyword: "Economía", label: "Economía"},
    {id: "Politics", keyword: "Política", label: "Política"},
    {id: "Sports", keyword: "Deportes", label: "Deportes"},
    {id: "Technology", keyword: "Tecnología", label: "Tecnología"},
    {id: "Science", keyword: "Ciencia", label: "Ciencia"},
    {id: "Health", keyword: "Salud", label: "Salud"},
    {id: "Entertainment", keyword: "Entretenimiento", label: "Entretenimiento"},
    {id: "Culture", keyword: "Cultura", label: "Cultura"},
    {id: "Environment", keyword: "Medio Ambiente", label: "Medio Ambiente"},
    {id: "Education", keyword: "Educación", label: "Educación"},
    {id: "Lifestyle", keyword: "Estilo de Vida", label: "Estilo de Vida"},
    {id: "Travel", keyword: "Viajes", label: "Viajes"},
    {id: "Opinion", keyword: "Opinión", label: "Opinión"},
    {id: "Business", keyword: "Negocios", label: "Negocios"},
    {id: "History", keyword: "Historia", label: "Historia"},
    {id: "Art", keyword: "Arte", label: "Arte"},
    {id: "Food", keyword: "Gastronomía", label: "Gastronomía"},
    {id: "Fashion", keyword: "Moda", label: "Moda"},
    {id: "RealEstate", keyword: "Bienes Raíces", label: "Bienes Raíces"},
    {id: "Automotive", keyword: "Automóviles", label: "Automóviles"},
    {id: "PersonalFinance", keyword: "Finanzas Personales", label: "Finanzas Personales"},
    {id: "Cinema", keyword: "Cine", label: "Cine"},
    {id: "Music", keyword: "Musica", label: "Musica"}
]
const homeFilter = {
    search: "Buscar..."
}
const homeFeed = {
    your_interests: "Tus Intereses",
    world_news: "Mundo"
}
const article = {
    by: "Por:" 
}


export default {
    welcomeOnBoarding,
    auth,
    errors,
    loading,
    interests,
    interestsOnBoarding,
    homeFilter,
    article,
    homeFeed,
    editInterests
}