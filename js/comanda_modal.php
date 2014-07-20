<?php if($node["has_catering"] == 1): ?>

<div id="foodModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="foodModalLabel" aria-hidden="true">

	<div class="modal-dialog">

    	<div class="modal-content">

    		<div class="modal-header">

        		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

        		<div class="h3_title modal-title"><?php echo l("adauga_la_planner"); ?></div>

      		</div>

      		

      		<div class="modal-body">

      			<?php $food_index = 1; foreach($food_items as $food_item):?>

      				<div food_index = '<?php echo $food_index; ?>' >

      					<div class="col-xs-8">

      						<div class="h4_title"><?php echo $food_item['name']; ?></div>

	      					<p>

								<?php echo $food_item['description']; ?>

							</p>

      					</div>

      					<div class="col-xs-4">

  							<img class = 'food_image img-responsive' src = '<?php echo base_url(); ?>pictures/<?php echo $food_item['image_link']; ?>' />

  						</div>

  						

  						<div class="clearfix"></div>

      				

					<form class = 'form form-horizontal'>

						

						<div class="form-group">

    						<label for="items_number_<?php echo $food_index; ?>" class="col-xs-4"><?php echo l("numar bucati"); ?></label>

    						<div class="col-xs-2 nopading ">

    							<input type="number" min="0" class="form-control" id="items_number_<?php echo $food_index; ?>" price = '<?php echo $food_item['price']; ?>' />

    						</div>

    						<div class="col-xs-5 nopading mancare-item-pret">

    							x <span><?php echo $food_item['price']; ?><sup>lei</sup></span>

    						</div>

						</div>

						<div class="clearfix"></div>

						

						<!--<div class="form-group">

    						<label for="item_observations_<?php echo $food_index; ?>" class="col-xs-4"><?php echo ucfirst(l("observatii")); ?></label>

    						<div class="col-xs-8 nopading">

    							<textarea name = 'observatii' id="item_observations_<?php echo $food_index; ?>" class = 'form-control'></textarea>

    						</div>

						</div>-->

						

						<div class="form-group mancare-item-pret pret-total">

							<div class = 'col-xs-3' ><?php echo l("pret total"); ?></div>

							<div class="col-xs-2"><span>0</span><sup>lei</sup></div>

							<div class="col-xs-7">

								<input class="btn btn-success btn-lg pull-right" type = 'button' value = 'Adauga la comanda' food_item_id = '<?php echo $food_item['id']; ?>'>

								<div class="clearfix"></div>

							</div>

						</div>

						

					</form>

      			</div>

      			<?php $food_index++; endforeach; ?>

      		</div>

      		

    	</div>

  	</div>

</div>

<?php endif; ?>