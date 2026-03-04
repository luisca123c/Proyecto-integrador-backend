export const getUsers = (req, res) => {
  res.json({ message: 'Se listaran los usuarios' })
}
export const postUser = (req, res) => {
    res.json({ message: 'Se creara un nuevo usuario' })
}
