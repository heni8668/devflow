const ROUTES = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    ASK_QUESTION: "/ask-question",
    PROFILE: (id: string) => `/profile/${id}`,
    TAGS: (tag: string) => `/tags/${tag}`,
}

export default ROUTES;