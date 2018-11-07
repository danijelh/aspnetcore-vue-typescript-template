namespace AspNetCore.VueJs.Models
{
    public class CharacterResponse
    {
        public string Url { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Culture { get; set; }
        public string Born { get; set; }
        public string Died { get; set; }
        public string[] Titles { get; set; }
        public string[] Aliases { get; set; }
        public string Father { get; set; }
        public string Mother { get; set; }
        public string Spouse { get; set; }
        public string[] Allegiances { get; set; }
        public string[] Books { get; set; }
        public string[] PovBooks { get; set; }
        public string[] TvSeries { get; set; }
        public string[] PlayedBy { get; set; }
    }
}