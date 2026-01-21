'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14487<T> = T extends (infer U)[]
  ? DeepReadonlyArray14487<U>
  : T extends object
  ? DeepReadonlyObject14487<T>
  : T;

interface DeepReadonlyArray14487<T> extends ReadonlyArray<DeepReadonly14487<T>> {}

type DeepReadonlyObject14487<T> = {
  readonly [P in keyof T]: DeepReadonly14487<T[P]>;
};

type UnionToIntersection14487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14487<T> = UnionToIntersection14487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14487<T extends unknown[], V> = [...T, V];

type TuplifyUnion14487<T, L = LastOf14487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14487<TuplifyUnion14487<Exclude<T, L>>, L>;

type DeepPartial14487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14487<T[P]> }
  : T;

type Paths14487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14487<K, Paths14487<T[K], Prev14487[D]>> : never }[keyof T]
  : never;

type Prev14487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14487 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths14487 = Paths14487<NestedConfig14487>;

interface HeavyProps14487 {
  config: DeepPartial14487<NestedConfig14487>;
  path?: ConfigPaths14487;
}

const HeavyComponent14487 = memo(function HeavyComponent14487({ config }: HeavyProps14487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14487.displayName = 'HeavyComponent14487';
export default HeavyComponent14487;
