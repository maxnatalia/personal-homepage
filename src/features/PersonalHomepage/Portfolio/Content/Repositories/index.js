import { List, Tile, Name, Description, Links, LinksRow, LinksValue, Link } from "./styled";

const Repositories = ({ repositories }) => {

    return (
        <List>
            {repositories.map(({ id, name, description, homepage, html_url }) => (
                name !== "maxnatalia" && (
                    <Tile key={id}>
                        <Name>{name.toUpperCase()}</Name>
                        <Description>{description}</Description>
                        <Links>
                            {!!homepage && (
                                <LinksRow>
                                    <dt>Demo:</dt>
                                    <LinksValue>
                                        <Link target="_blank" rel="noreferrer" href={homepage}>{homepage}</Link>
                                    </LinksValue>
                                </LinksRow>
                            )}
                            <LinksRow>
                                <dt>Code:</dt>
                                <LinksValue>
                                    <Link target="_blank" rel="noreferrer" href={html_url}>{html_url}</Link>
                                </LinksValue>
                            </LinksRow>
                        </Links>
                    </Tile>)
            ))}
        </List>
    )
};

export default Repositories;