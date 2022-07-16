<script>
    import Button, {Label} from '@smui/button';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import LayoutGrid, { Cell } from '@smui/layout-grid';

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
            <Textfield variant="filled" bind:value={product} label="Producto" on:change={handleChange}>
                <HelperText slot="helper"></HelperText>
            </Textfield>
        </div>
    </Cell>
    <Cell span={3}>
        <div class="cel">
            <Textfield variant="filled" bind:value={cant} label="Cant." on:change={handleChange}>
                <HelperText slot="helper"></HelperText>
            </Textfield>
        </div>
    </Cell>
    <Cell span={3}>
        <div class="cell">
            <Textfield variant="filled" bind:value={price} label="Precio" on:change={handleChange}>
                <HelperText slot="helper"></HelperText>
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
    
    <pre class="status">Value: {product}</pre>
</LayoutGrid>
  