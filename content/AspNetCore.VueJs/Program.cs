var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHttpClient();
builder.Services.Configure<RouteOptions>(options => options.LowercaseUrls = true);
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseStaticFiles();

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "spa-route",
        pattern: "{controller}/{*anything=Index}",
        defaults: new { action = "Index" });

    endpoints.MapControllerRoute(
       name: "app-fallback",
       pattern: "{*anything}/",
       defaults: new { controller = "Template", action = "Index" });
});

app.Run();