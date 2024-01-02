import { Module } from "@nestjs/common";
import { ConfigProvider } from "./config.service";

@Module({
    providers: [ConfigProvider],
    exports: [ConfigProvider],
})
export class ConfigModule {}
