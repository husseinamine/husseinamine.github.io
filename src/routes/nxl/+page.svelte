<script lang="ts">
    import notionxl from '$lib/images/thumbnails/notionxl.png';
    import { Col, Image, Row } from '@sveltestrap/sveltestrap';
</script>

<Row>
    <Col lg={6}>
        <h1>NotionXL</h1>
        <div>
            <p>An easy to use extension that allows you to convert a notion table/database you are viewing into CSV format. </p>
            
            <h4>Instructions</h4>
            <ul>
                <li>wait for the page containing the table/database to fully load.</li>
                <li>click on the extension icon in the top right corner.</li>
                <li>done! if there were any tables in the page it will save them into an csv file.</li>
            </ul>
            <p>More features to come soon, maybe?</p>
            <p>For support contact me at: <a href="mailto:contact@husseinamine.com">contact@husseinamine.com</a></p>
        </div>
    </Col>
    <Col lg={6}>
        <Image fluid src={notionxl} style="border-radius: 16px"></Image>
    </Col>
</Row>

