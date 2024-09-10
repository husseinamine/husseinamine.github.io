<script lang="ts">
    import { Card, CardBody, CardTitle, CardText, Button } from '@sveltestrap/sveltestrap';

    export let title: string;
    export let description: string;
    export let imageUrl: string;
    export let projectUrl: string;
</script>

<Card class="project-card mb-4">
    <img src={imageUrl} class="card-img-top" alt={title} />
    <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <Button block outline href={projectUrl} target="_blank" color="primary">Learn More</Button>
    </CardBody>
</Card>

<style>
    .card-img-top {
        height: 200px;
        object-fit: cover;
    }
</style>