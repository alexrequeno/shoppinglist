<script>
    import Button, {Label} from '@smui/button';
    import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import IconButton, { Icon } from '@smui/icon-button';

    let product = "";
    let cant = 0;
    let price = 0; 

    function handleChange() {

    }
</script>
<h1>Grocery List A2R2</h1>
<LayoutGrid>
    <Cell span={3}>
        <div class="cell">
            <Textfield 
                variant="filled" 
                bind:value={product} 
                label="Producto" 
                on:change={handleChange}>
                <HelperText slot="helper">Producto a comprar</HelperText>
            </Textfield>
        </div>
    </Cell>
    <Cell span={3}>
        <div class="cel">
            <Textfield 
                type="number"
                variant="filled" 
                bind:value={cant} 
                label="Cant." 
                on:change={handleChange}>
                <HelperText slot="helper">Cantidad</HelperText>
            </Textfield>
        </div>
    </Cell>
    <Cell span={3}>
        <div class="cell">
            <Textfield 
                type="number" 
                variant="filled" 
                bind:value={price} 
                label="Precio" on
                :change={handleChange}>
                <HelperText slot="helper">Precio actual</HelperText>
            </Textfield>
        </div>
    </Cell>
    <Cell span={3}>
        <div class="cell">
            <Button color="secondary"  variant="raised">
                <Label>Agregar</Label>
            </Button>
        </div>
    </Cell>
    
</LayoutGrid>
<div class="card-container">
    <Card>
      <Content>Lista</Content>
      <Actions>
        <ActionButtons>
          <Button>
            <Label>Action</Label>
          </Button>
          <Button>
            <Label>Another</Label>
          </Button>
        </ActionButtons>
        <ActionIcons>
          <IconButton
            toggle
            aria-label="Add to favorites"
            title="Add to favorites"
          >
            <Icon class="material-icons" on>favorite</Icon>
            <Icon class="material-icons">favorite_border</Icon>
          </IconButton>
          <IconButton
            class="material-icons"
            title="Share">share</IconButton
          >
          <IconButton
            class="material-icons"
            title="More options">more_vert</IconButton
          >
        </ActionIcons>
      </Actions>
    </Card>
  </div>
  