<!-- modals -->
    <section class="content">
        <header class="content__title px-0 border-0">
          <div class="row">
              <div class="col-md-8 col-sm-12">
                <span class="rev-title-container">
                <h1 class="text-capitalize stream_name m-0">Land Subdivision</h1>
                </span>
                <div class="">
                  <ol class="breadcrumb border-0">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Plot Transactions</a></li>
                    <li class="breadcrumb-item active">Land Subdivision</li>
                  </ol>
                </div>
              </div>
                  
          </div>
        </header>

          <div class="row">
            <center>
             <?php if( $this->session->flashdata('error') != "" ) : ?>
                       <div class="row"><div class="col-xs-12"><div class="alert alert-danger"><?php echo $this->session->flashdata('error'); ?></div></div></div>
                    <?php endif; ?>
                    <?php if( $this->session->flashdata('success') != "" ) : ?>
                       <div class="row"><div class="col-xs-12"><div class="alert alert-success"><?php echo $this->session->flashdata('success'); ?></div></div></div>
              <?php endif; ?>
              </center>
          </div>

          <div class="row with-custom-header">          
            <div class="col-12 h-100">
                <div class="card h-100">
                  <div class="card-body h-100">

                      <div class="contact-header">
                        <div class="row">
                            <div class="col-12">
                              <h4>Plot Details</h4>
                              <!--  <p> the form bellow to search for a plot to be included for amalgamation</p> -->
                              <hr>
                            </div>
                        </div>
                      </div>

                        <div class="row">

                          <div class="col-md-5 col-lg-5 col-sm-12">            
                              <!--       <form class= "animated fade-in" id="the-form"> -->

                            <form class="animated fade-in blue box" method="POST" action="<?php echo base_url('land/plottodivide');?>" id="">
                              <div class="row h-100 position-relative" >                                                   
                                  <div class="form-items w-100">
                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group mb-0"> 
                                          <label>New Plot Number <strong class="text-danger">*</strong></label>
                                          <input type="text" class="form-control" placeholder="Enter Plot Number " name="plot_no" required  value="<?php echo set_value('plot_no'); ?>">
                                                <br><span style="color:red; font-size: 80%"><?php echo form_error('plot_no'); ?></span>
                                        </div>
                                      </div>

                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group mb-0"> 
                                          <label>UPN  <strong class="text-danger">*</strong></label>
                                          <input type="text" class="form-control" placeholder="Enter UPN " name="upn" required value="<?php echo set_value('upn'); ?>">
                                                <br><span style="color:red; font-size: 80%"><?php echo form_error('upn'); ?></span>
                                        </div>
                                      </div>
                                      
                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group mb-0"> 
                                          <label>Area in Hectare   <strong class="text-danger">*</strong></label>
                                          <input type="number" class="form-control" placeholder="Enter Area in ha " name="area_in_ha"  required value="<?php echo set_value('area_in_ha'); ?>" min="0.000">
                                                <br><span style="color:red; font-size: 80%"><?php echo form_error('area_in_ha'); ?></span>
                                        </div>
                                      </div>

                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group mb-0"> 
                                          <label>Value of the Land<strong class="text-danger">*</strong></label>
                                          <input type="number" class="form-control" placeholder="Enter site value " name="site_value" value="<?php echo set_value('site_value'); ?>" required min="0">
                                                <br><span style="color:red; font-size: 80%"><?php echo form_error('site_value'); ?></span>
                                        </div>
                                      </div>

                                      <div class="col-lg-12 col-md-12">
                                        <div class="form-group mb-0"> 
                                          <label>Annual Landrate  <strong class="text-danger">*</strong></label>
                                          <input type="number" class="form-control" placeholder="Enter Annual Landrate " name="annual_landrate" value="<?php echo set_value('annual_landrate'); ?>" min="0">
                                                <br><span style="color:red; font-size: 80%"><?php echo form_error('annual_landrate'); ?></span>
                                        </div>
                                      </div>

                                  </div>
                                                        
                                    <div class="col-12 submit-btn-container mt-4">
                                        <button class="btn btn-success text-capitalize w-100 btn-big  "><span class="font-12px">Submit Details</span><i class="ml-3 zmdi  font-18"></i></button>
                                    </div>
                                </div>
                            </form>
                          </div>

                          <div class="col-sm-12 col-md-7 col-lg-7">
                            <div class="bill-cart" style="height: 327px;">                                        
                                  <table class="table bill-details-table table-hover table-sm mt-2" id="plot-num">
                                      <thead>
                                        <tr>
                                          <th scope="col">#</th>
                                          <th scope="col">Plot Number</th>
                                          <th scope="col">UPN</th>
                                          <th scope="col">Size</th>
                                          <th scope="col">Site Value</th>
                                            <th scope="col">Annual Landrate</th>
                                          <th scope="col">Remove </th>
                                        </tr>
                                      </thead>
                                      <tbody>

                                      <?php $site=0; for( $i=0; $i<count($records ); $i++ ) : ?>
                                          <?php $record = &$records[$i]; ?>
                                        <tr>
                                            <td><?php echo $i + 1; ?></td>

                                            <td><?php echo $record->plot_no;?></td>
                                            <td><?php echo $record->upn;?></td>
                                            <td><?php echo $record->area_in_ha;?></td>
                                              <td><?php echo $record->site_value;?></td>
                                              <td><?php echo $record->annual_landrate;?></td>
                                              <th>
                                              
                                              <a href=" <?php echo base_url('land/removes/'. $record->id )?>">
                                                <span class="table-action action-danger ml-2" data-toggle="tooltip" data-original-title="Remove the plot"><i data-toggle="modal" data-target="#remove-bill-item" class="ti-close"></i> </span>
                                                </a>                                                    

                                              </th>

                                              <?php $site =+ $record->area_in_ha;?>

                                        </tr>
                                        <?php endfor; ?>
                                                  
                                      </tbody>
                                  </table>   
                            </div>

                            <div class="bill-total  py-3">
                                <div class="text-left">
                                    <span class=" font-weight-light font-22"><?php echo $i ?> Section(s)</span>
                                </div>
                                <div class="text-right">
                                    <small class="text-muted-blue bold bold">Total Hectare</small>
                                      <div class=""><h4 class="font-weight-bold"> <?php echo $site; ?> ha</h4></div>
                                </div>
                            </div>

                            <?php echo form_open( 'land/subdivision',array('role'=>'','data-toggle'=>"validator" ,'class'=>"row")) ; ?>
                            
                            
                              <div class="col-12 mt-3">
                                  <div class="row">
                                      <label class="col-12"><strong> Old Plot number</strong></label>
                                      <div class="col-8 pr-1">
                                        <input type="text" class="form-control border-radius-0" placeholder="Enter Old Plot Number"  id="oldplot_no" name="oldplot_no" required >
                                      </div>
                                      <div class="col-4 pl-0">
                                        <button class="btn btn-success btn--icon-text h-100 float-right px-3">Enter to Subdivide <i class="icon-list-add"></i> </button>
                                      </div>
                                      <div class="col-12">
                                        <small></small>
                                      </div>
                                    </div>
                              </div>
                            </form>
                          </div>
                        </div>
                                  
                      </div>

                  </div>
            </div>
          </div>
                    

    </section>
    
    <!-- editing modal end -->

    