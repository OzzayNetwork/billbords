<section class="content custom-table-container">
                <header class="content__title px-0 border-0">
          <div class="row">
            <div class="col-md-8 col-sm-12">
              <span class="rev-title-container">
               <h1 class="text-capitalize stream_name m-0">Land Subdivision</h1>
              </span>
              <div class="">
                <ol class="breadcrumb border-0">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Land</a></li>
                  <li class="breadcrumb-item active">Subdivision</li>
                </ol>
              </div>
            </div>
            <!-- <div class="col-4 col-sm-12 col-md-4">
              <div class="section-header">
                <a href="#" class="btn btn-sm btn-primary" title="">Upload multiple Blinkers records</a>
              </div>          
            </div>   -->          
          </div>
        </header>
        <center>
          
          <div class="row">
          <?php if( $this->session->flashdata('error') != "" ) : ?>
                       <div class="row"><div class="col-xs-12"><div class="alert alert-danger"><?php echo $this->session->flashdata('error'); ?></div></div></div>
                    <?php endif; ?>
                    <?php if( $this->session->flashdata('success') != "" ) : ?>
                       <div class="row"><div class="col-xs-12"><div class="alert alert-success"><?php echo $this->session->flashdata('success'); ?></div></div></div>
                    <?php endif; ?>
          </div>                
                
        </center>
        
        
          
            
          <div class="col-xl-12 col-lg-12 col-md-12z col-sm-12 p-0">
            <div class=create-form>
              <div class="col-12 p-0">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Property registration form</h4>
                    <h6 class="card-subtitle">Fill in the form below correctly so as to have the property registered</h6>
                    <hr>

                      <div id="message"> </div>
                     
                      <form class="with-mpesa animated fade-in" method="POST" action="<?php echo base_url('land/search');?>" id="myForm1">
                          <div class="row clearfix pb-5">

                            <div class="col-12">
                              <label><strong>Search by ID/Passport/Registration Number </strong></label>
                            </div>
                            <div class="col-5 pr-0">
                              <input type="text" class="form-control border-radius-0" placeholder="Enter ID/Passport/Registration Number" name="search_id" id="search_id" value="<?php echo set_value('search_id'); ?>">
                            </div>
                            <div class="col-4 pl-0">
                              <button type="submit" class="btn btn-primary btn--icon-text border-radius-0"><i class="zmdi zmdi-search"></i> Search</button>
                            </div>
                            <div class="col-auto">
                              <span class="help-block search_id create-error"></span>
                            </div>
                            <br>
                            
                    </div>
                  </form>


                      <form class="with-mpesa animated fade-in" method="POST" action="<?php echo base_url('land/subdivision');?>" id="">
                     
                    <div class="row clearfix">

                    
                      <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>Plot Owner  <strong class="text-danger">*</strong></label>
                         <input type="text" class="form-control" placeholder=" " name="owner" id="owner" required value="" readonly >
                          <input type="hidden" name="ownerid" id="ownerid">
                                <br><span style="color:red; font-size: 80%"><?php echo form_error('owner'); ?></span>
                        </div>
                      </div>

                       <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>Current Plot Number <strong class="text-danger">*</strong></label>
                        <input type="text" class="form-control" placeholder="Enter Plot Number " name="plot_no" required  value="<?php echo set_value('plot_no'); ?>">
                                <br><span style="color:red; font-size: 80%"><?php echo form_error('plot_no'); ?></span>
                        </div>
                      </div>
                      
                      
                      <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>New Plot Number <strong class="text-danger">*</strong></label>
                        <input type="text" class="form-control" placeholder="Enter Plot Number " name="newplot_no" required  value="<?php echo set_value('newplot_no'); ?>">
                                <br><span style="color:red; font-size: 80%"><?php echo form_error('newplot_no'); ?></span>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>UPN  <strong class="text-danger">*</strong></label>
                          <input type="text" class="form-control" placeholder="Enter UPN " name="upn" required value="<?php echo set_value('upn'); ?>">
                                <br><span style="color:red; font-size: 80%"><?php echo form_error('upn'); ?></span>
                        </div>
                      </div>
                      
                      <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>Area in Hectare   <strong class="text-danger">*</strong></label>
                         <input type="text" class="form-control" placeholder="Enter Area in ha " name="area_in_ha"  required value="<?php echo set_value('area_in_ha'); ?>">
                                <br><span style="color:red; font-size: 80%"><?php echo form_error('area_in_ha'); ?></span>
                        </div>
                      </div>


                      <div class="col-lg-4 col-md-12">
                        <div class="form-group">
                          <label>Select Land Type <strong class="text-danger">*</strong></label>
                          <select class="selectpicker form-control show-tick"  data-live-search="true" name="land_type">
                            <option value="">-- Select land type --</option>
                         
                            <option value="Commercial">Commercial</option>
                             <option value="Residencial ">Residencial </option>
                         
                          </select>
                        </div>
                      </div>

             
                        <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>Nature of Interest <strong class="text-danger">*</strong></label>
                         <input type="text" class="form-control" placeholder="Enter Usage " name="nature_of_interest"  required  value="<?php echo set_value('nature_of_interest'); ?>">
                                <br><span style="color:red; font-size: 80%"><?php echo form_error('nature_of_interest'); ?></span>
                        </div>
                      </div>
                      
                      
                      <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>Value of the Land<strong class="text-danger">*</strong></label>
                        <input type="number" class="form-control" placeholder="Enter site value " name="site_value" value="<?php echo set_value('site_value'); ?>" required>
                                <br><span style="color:red; font-size: 80%"><?php echo form_error('site_value'); ?></span>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>Annua Landrate  <strong class="text-danger">*</strong></label>
                          <input type="number" class="form-control" placeholder="Enter Annual Landrate " name="annual_landrate" value="<?php echo set_value('annual_landrate'); ?>">
                                <br><span style="color:red; font-size: 80%"><?php echo form_error('annual_landrate'); ?></span>
                        </div>
                      </div>
                        <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>Initial Balance  <strong class="text-danger">*</strong></label>
                          <input type="number" class="form-control" placeholder="Enter Initial  Balance " name="initial_balance" value="<?php echo set_value('initial_balance'); ?>">
                                <br><span style="color:red; font-size: 80%"><?php echo form_error('initial_balance'); ?></span>
                        </div>
                      </div>
                      
                       <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>Sub-County <strong class="text-danger">*</strong></label>
                               <select name="sub_county_id" id="SubCounty" class="selectpicker form-control show-tick" data-live-search="true" required>
                                                                            <option data-tokens="select">-- Select sub county --</option>
                                                                              <?php foreach( $subcountys as $subcounty ) : ?>
                                                                                 <option value="<?php echo $subcounty->subCountyId; ?>"><?php echo $subcounty->subCountyName ; ?></option>
                                                                             <?php endforeach; ?>
                                                                     
                                                                            
                                                                          </select>
                                                                          
                            <br><span style="color:red; font-size: 80%"><?php echo form_error('sub_county_id'); ?></span>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-12">
                        <div class="form-group"> 
                          <label>Wards <strong class="text-danger">*</strong></label>
                           <select  name="ward_id" id="WardId" class="selectpicker1 form-control show-tick" data-live-search="true" required>
                                                                           
                                                                            
                                                                          </select>
                            <br><span style="color:red; font-size: 80%"><?php echo form_error('ward_id'); ?></span>
                        </div>
                      </div>
                     
                      <div class="col-12">

                        <button type="submit" class="btn btn-primary pull-right" >Divide the Land</button>
                      </div>
                      
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>          
          </div>
        </div>
            
                