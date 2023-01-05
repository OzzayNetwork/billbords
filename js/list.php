<section class="content custom-table-container">
        
                <header class="content__title px-0 border-0">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <span class="rev-title-container">
               <h1 class="text-capitalize stream_name m-0">Registered Plots</h1>
              </span>
              <div class="">
                <ol class="breadcrumb border-0">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Plot Transactions</a></li>
                  <li class="breadcrumb-item active">Registered Plots</li>
                  
                </ol>
              </div>
            </div>
                        
          </div>
        </header>
        
        <div class="row">
          <?php if( $this->session->flashdata('error') != "" ) : ?>
                       <div class="row"><div class="col-xs-12"><div class="alert alert-danger"><?php echo $this->session->flashdata('error'); ?></div></div></div>
                    <?php endif; ?>
                    <?php if( $this->session->flashdata('success') != "" ) : ?>
                       <div class="row"><div class="col-xs-12"><div class="alert alert-success"><?php echo $this->session->flashdata('success'); ?></div></div></div>
                    <?php endif; ?>
              
                
          <div class="col-12 p-0">
            <div class="card">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover table-custom spacing8" id="data-table">
                    <thead>
                      <tr> 
                           <th>#</th>
                           <th>Plot Number</th>
                           <th>Plot Owner</th>
                           <th>UPN</th>
                           <th>Nature Of Interest</th>
                           <th>Land Type</th>
                           <th>Area In Ha</th>
                           <th>Site Value</th>
                           <th>Annual Amount</th>
                           <th>current Balance</th>
                           


                      </tr>
                    </thead>
                    <tbody>
                             <?php  for( $i=0; $i<count( $records ); $i++ ) : ?>
                              <?php $record = &$records[$i]; ?>
                            <tr>
                                <td><?php echo $i + 1; ?></td>
                                <td><?php echo $record->plotNumber;?></td>
                                <td><?php echo ucfirst(strtolower($record->ownerName));?></td>
                                <td><?php echo $record->upn;?></td>
                                 <td><?php echo $record->natureOfInterest;?></td>
                                <td><?php echo $record->landType;?></td>
                                <td><?php echo $record->areaInHa;?></td>
                                <td><?php echo number_format($record->siteValue,2);?></td>
                                <td><?php echo number_format($record->totalAnnualAmount,2);?></td>
                                <td><?php echo $record->currentBalance;?></td>
                               
                              </tr>
                            <?php endfor; ?>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
                