<script>
    import Drawer, {
    Scrim,
    Content,
    Header,
    Title,
    Subtitle,
  } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';
  
  export let open;
  let active = 'Listas';

  function setActive(value) {
    active = value;
    open = false;
  }
</script>
<div class="drawer-container">
    <Drawer variant="modal" fixed={false} bind:open>
        <Header>
          <Title>Requeno Reyes App</Title>
          <Subtitle>A Grocery List App.</Subtitle>
        </Header>
        <Content>
          <List>
            <Item
              href="javascript:void(0)"
              on:click={() => setActive('Listas')}
              activated={active === 'Listas'}
            >
              <Text>Listas</Text>
            </Item>
            <Item
              href="javascript:void(0)"
              on:click={() => setActive('Categorias')}
              activated={active === 'Categorias'}
            >
              <Text>Categorias</Text>
            </Item>
            <Item
              href="javascript:void(0)"
              on:click={() => setActive('Productos')}
              activated={active === 'Productos'}
            >
              <Text>Productos</Text>
            </Item>
            
          </List>
        </Content>
      </Drawer>
      <Scrim fixed={false} />
</div>  