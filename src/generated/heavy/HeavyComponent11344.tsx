'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11344<T> = T extends (infer U)[]
  ? DeepReadonlyArray11344<U>
  : T extends object
  ? DeepReadonlyObject11344<T>
  : T;

interface DeepReadonlyArray11344<T> extends ReadonlyArray<DeepReadonly11344<T>> {}

type DeepReadonlyObject11344<T> = {
  readonly [P in keyof T]: DeepReadonly11344<T[P]>;
};

type UnionToIntersection11344<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11344<T> = UnionToIntersection11344<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11344<T extends unknown[], V> = [...T, V];

type TuplifyUnion11344<T, L = LastOf11344<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11344<TuplifyUnion11344<Exclude<T, L>>, L>;

type DeepPartial11344<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11344<T[P]> }
  : T;

type Paths11344<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11344<K, Paths11344<T[K], Prev11344[D]>> : never }[keyof T]
  : never;

type Prev11344 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11344<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11344 {
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

type ConfigPaths11344 = Paths11344<NestedConfig11344>;

interface HeavyProps11344 {
  config: DeepPartial11344<NestedConfig11344>;
  path?: ConfigPaths11344;
}

const HeavyComponent11344 = memo(function HeavyComponent11344({ config }: HeavyProps11344) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11344) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11344 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11344: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11344.displayName = 'HeavyComponent11344';
export default HeavyComponent11344;
