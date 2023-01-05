<!-- modals -->
    <section class="content">
        <header class="content__title px-0 border-0">
            <div class="row">
                <div class="col-md-6 col-sm-12">
              <span class="rev-title-container">
               <h1 class="text-capitalize stream_name m-0">Amalgamation</h1>
              </span>
                    <div class="">
                        <ol class="breadcrumb border-0">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">New Bill</li>

                        </ol>

                    </div>
                </div>
                <div class="col-md-6 col-sm-12 text-right text-white"></div>
            </div>
        </header>

         <div class="row">
             <?php if( $this->session->flashdata('error') != "" ) : ?>
                       <div class="row"><div class="col-xs-12"><div class="alert alert-danger"><?php echo $this->session->flashdata('error'); ?></div></div></div>
                    <?php endif; ?>
                    <?php if( $this->session->flashdata('success') != "" ) : ?>
                       <div class="row"><div class="col-xs-12"><div class="alert alert-success"><?php echo $this->session->flashdata('success'); ?></div></div></div>
              <?php endif; ?>

        <div class="row with-custom-header">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-12">
                                <div class="bill-details">
                                    <div class="contact-header">
                                        <h4>SEARCH PLOT NUMBER</h4>
                                        <hr>
                                    </div>
                                      <div id="message"></div>
                                   
                                       <form class="with-mpesa animated fade-in" method="POST" action="<?php echo base_url('billing/search');?>" id="myForm3">
                                        <div class="row" >

                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label>
                                                        <strong>Plot Number</strong>  <strong class="text-danger">*</strong>
                                                    </label>
                                                    <div class="form-group">
                                                            <input type="text" class="form-control  pl-3" placeholder="Enter Plot Number" id="Plot_no" name="Plot_no" required>
                                                            <br> <span class="help-block Plot_no create-error"></span>
                                                        </div>
                                                </div>
                                            </div>
                                               <div class="col-md-6">
                                                        <div class="form-group">
                                                            <button type="submit" class="btn btn-primary btn-child">
                                                            <i class="zmdi zmdi-save"></i> Search</button>
                                                            <span class="d-none" id="loader13" >
                                                            <img src="{{ asset('img/loader/loader.gif') }}" style="size: 20px" />
                                                            </span>
                                                        </div>
                                                    </div>

                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div class="col-md-8">
                                <div class="bill-details h-100 bill-checkout">
                                    <div class="contact-header">
                                        <h4>New Customer details</h4>
                                        <hr>
                                    </div>


              

                <form class="animated fade-in blue box" method="POST" action="<?php echo base_url('land/search');?>" id="myForm1">
                    <div class="row">
                        <div class="col-8">
                            <div class="form-group">
                                <!-- <label>Search By ID /Passport/Registration Number  <strong class="text-danger">*</strong></label> -->
                                <input type="text" class="form-control" placeholder=" " name="search_id" id="search_id" value="<?php echo set_value('search_id'); ?>">
                            </div>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary">Search</button>
                        </div>
                    </div>
                         
                  <!--   <div class="col-12 d-none">
                        <div class="form-group"> 
                          <label>Search By ID /Passport/Registration Number  <strong class="text-danger">*</strong></label>
                          <div class="form-inline w-100">
                              <input type="text" class="form-control" placeholder=" " name="search_id" id="search_id" value="<?php echo set_value('search_id'); ?>">
                                    <button class="btn btn-primary mx-3">Search</button>
                          </div>
                         
                        </div>
                        <br> <span class="help-block search_id create-error"></span>
                      </div>
                       <div class="col-lg-4 col-md-12 d-none">

                         
                        <div class="form-group"> <label><br></label>

                        <button type="submit" class="btn btn-success pull-right" > Search</button>
                      </div>
                      </div> -->

                  
                  </form>
                     
                      


                      <form class="animated fade-in blue box" method="POST" action="<?php echo base_url('land/amalgamation');?>" id="">

                           <div class="form-group"> 
                        <div class="col-lg-4 col-md-12">
                        <div class="input_fields_wrap">
                       <!--  <button class="add_field_button btn btn-info">Add More Fields</button> -->
                        <div><input  type="hidden" name="mytext[]"></div>
                         </div>
                     </div>
                    </div> 
                     
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
                          <label>Plot Number <strong class="text-danger">*</strong></label>
                        <input type="text" class="form-control" placeholder="Enter Plot Number " name="plot_no" required  value="<?php echo set_value('plot_no'); ?>">
                                <br><span style="color:red; font-size: 80%"><?php echo form_error('plot_no'); ?></span>
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

                        <button type="submit" class="btn btn-primary pull-right" >Amalgamate the Land</button>
                      </div>
                      
                    </div>
                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </section>
    
    <!-- editing modal end -->

    