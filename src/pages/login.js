import React from "react"

const login = () => {
  return (
    <body class="text-center">
      <main class="form-signin">
        <form>
          <div
            class="modal modal-signin position-static d-block bg-secondary py-5"
            tabindex="-1"
            role="dialog"
            id="modalSignin"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content rounded-5 shadow">
                <div class="modal-header p-5 pb-4 border-bottom-0">
                  <h2 class="fw-bold mb-0">Please Log In</h2>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body p-5 pt-0">
                  <form class="">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control rounded-4"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control rounded-4"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3">
                      <label>
                        <input type="checkbox" value="remember-me" /> Remember
                        me
                      </label>
                    </div>
                    <button
                      class="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                      type="submit"
                    >
                      Log In
                    </button>
                  </form>
                </div>
                <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
              </div>
            </div>
          </div>
        </form>
      </main>
    </body>
  )
}
export default login
