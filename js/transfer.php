<section class="content custom-table-container">
                <header class="content__title px-0 border-0">
          <div class="row">
            <div class="col-md-8 col-sm-12">
              <span class="rev-title-container">
               <h1 class="text-capitalize stream_name m-0">Land Transfer</h1>
              </span>
              <div class="">
                <ol class="breadcrumb border-0">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Plot Transactions</a></li>
                  <li class="breadcrumb-item active">Land Transfer</li>
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
        
        
          
            
          <div class="col-xl-12 col-lg-12 col-md-12z col-sm-12">
            <div class=create-form>
              <div class="col-12 p-0">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Land Transfer form</h4>
                    <h6 class="card-subtitle">Fill in the form below correctly so as to have the land transfer</h6>
                    <hr>

                      <div id="message"> </div>
                     
                      <form class="with-mpesa animated fade-in" method="POST" action="<?php echo base_url('land/search');?>" id="myForm1">
                          <div class="row clearfix">
                              <div class="col-12">
                                <label><strong>Search By ID /Passport/Registration Number </strong><strong class="text-danger">*</strong></label>
                              </div>
                              <div class="col-lg-4 col-md-12">
                              <div class="form-group"> 
                              
                              <input type="text" class="form-control" placeholder="Enter ID/Passport/Registration Number" name="search_id" id="search_id" value="<?php echo set_value('search_id'); ?>">
                                      <br> <span class="help-block search_id create-error"></span>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                              <button type="submit" class="btn btn-success btn--icon-text" ><i class="zmdi zmdi-search"></i> Search</button>
                            </div>
                            </div>

                          
                  </form>


                      <form class="with-mpesa animated fade-in" method="POST" action="<?php echo base_url('land/transfer');?>" id="">
                     
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
                        
                      </div>
                     
                      <div class="col-12">

                        <button type="submit" class="btn btn-primary pull-right" >Transfer the Land</button>
                      </div>
                      
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>          
          </div>
        </div>
            
                