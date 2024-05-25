import Layout from "@/components/Layout";
import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "1",
  timeToFinish: ""
}

const ResourceCreate = () => {

  const [form, sestForm] = useState(DEFAULT_DATA)

  const submitForm = () => {
    alert(JSON.stringify(form))
  }

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      value={form.title} 
                      className="input" 
                      type="text" 
                      placeholder="Learn Next JS" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea 
                      value={form.description} 
                      className="textarea" 
                      placeholder="Learn these technologies because they are very popular and enable better SEO"></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input 
                      value={form.link} 
                      className="input" 
                      type="text" 
                      placeholder="https://nextjs.org/" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select value={form.priority} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to Finish</label>
                  <div className="control">
                    <input 
                      value={form.timeToFinishs} 
                      className="input" 
                      type="number" 
                      placeholder="60" />
                  </div>
                  <p class="help">Time is in minutes</p>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button 
                      type="button"
                      onClick={submitForm}
                      className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button className="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResourceCreate