export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['Soma', 'Union Square'];

    const self = this;

    this.addNeighborhood = (newNeighborhood) => {
       this.sanFranciscoNeighborhoods.push(newNeighborhood);
        return this.sanFranciscoNeighborhoods;
    };
}