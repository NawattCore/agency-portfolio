
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { postSubscriber } from '../utils/api'

const Schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})

export default function Footer(){
  const submit = async (values, { setSubmitting, setStatus, resetForm }) => {
    setStatus(null)
    // local duplicate prevention
    const stored = JSON.parse(localStorage.getItem('subscribed_emails') || '[]')
    if (stored.includes(values.email)) {
      setStatus({ error: 'Email already subscribed (local).' })
      setSubmitting(false)
      return
    }
    try {
      await postSubscriber(values)
      stored.push(values.email)
      localStorage.setItem('subscribed_emails', JSON.stringify(stored))
      setStatus({ success: 'Subscribed!' })
      resetForm()
    } catch (err) {
      // If server returns 400 duplicate, show message
      const msg = err.response?.data?.error?.message || err.message
      setStatus({ error: 'Subscription failed: ' + msg })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <footer className="bg-[#4B2615] text-white mt-12">
      <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="font-bold text-xl">Subscribe</h4>
          <p className="text-sm opacity-80">Get updates and services</p>
        </div>
        <div className="mt-4 md:mt-0 w-full md:w-1/2">
          <Formik initialValues={{ email: '' }} validationSchema={Schema} onSubmit={submit}>
            {({ isSubmitting, status, errors, touched }) => (
              <Form className="flex flex-col sm:flex-row gap-2">
                <Field name="email" placeholder="Email" className="p-2 rounded text-black w-full" />
                <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-white text-black rounded">Subscribe</button>
                <div className="w-full">
                  {status?.success && <p className="text-green-400 mt-2">{status.success}</p>}
                  {status?.error && <p className="text-red-400 mt-2">{status.error}</p>}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="text-center p-4 text-sm opacity-80">© 2025 Agency. All rights reserved.</div>
    </footer>
  )
}
