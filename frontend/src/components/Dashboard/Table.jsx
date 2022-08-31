import React from 'react'

function Table() {
  return (
    <div>
                      <div className="row">
                <div className="col-md-12">
                  <div className="main-card mb-3 card">
                    <div className="card-header">
                      Active Users
                      <div className="btn-actions-pane-right">
                        <div role="group" className="btn-group-sm btn-group">
                          <button className="active btn btn-focus">
                            Last Week
                          </button>
                          <button className="btn btn-focus">All Month</button>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th>Name</th>
                            <th className="text-center">City</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center text-muted">#345</td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <div className="widget-content-left">
                                      <img
                                        width={40}
                                        className="rounded-circle"
                                        src="assets/images/avatars/4.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="widget-content-left flex2">
                                    <div className="widget-heading">
                                      John Doe
                                    </div>
                                    <div className="widget-subheading opacity-7">
                                      Web Developer
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-center">Madrid</td>
                            <td className="text-center">
                              <div className="badge badge-warning">Pending</div>
                            </td>
                            <td className="text-center">
                              <button
                                type="button"
                                id="PopoverCustomT-1"
                                className="btn btn-primary btn-sm"
                              >
                                Details
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-block text-center card-footer">
                      <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                        <i className="pe-7s-trash btn-icon-wrapper"> </i>
                      </button>
                      <button className="btn-wide btn btn-success">Save</button>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Table