<script>
	import Menu from './Menu.svelte';
    import TopAppBar, { 
        Row, 
        Section, 
        Title
    } from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';

    let opendrawer = false;

</script>
<TopAppBar variant="fixed">
    <Row>
        <Section>
            <IconButton class="material-icons" on:click={ () => opendrawer = !opendrawer }>menu</IconButton>
            <Title>Grocery List A2R2</Title>
        </Section>
    </Row>
</TopAppBar>
<Menu open={ opendrawer } />