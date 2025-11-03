export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('Полученные данные:', body)
  return { success: true }
})
