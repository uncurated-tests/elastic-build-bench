'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11630<T> = T extends (infer U)[]
  ? DeepReadonlyArray11630<U>
  : T extends object
  ? DeepReadonlyObject11630<T>
  : T;

interface DeepReadonlyArray11630<T> extends ReadonlyArray<DeepReadonly11630<T>> {}

type DeepReadonlyObject11630<T> = {
  readonly [P in keyof T]: DeepReadonly11630<T[P]>;
};

type UnionToIntersection11630<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11630<T> = UnionToIntersection11630<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11630<T extends unknown[], V> = [...T, V];

type TuplifyUnion11630<T, L = LastOf11630<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11630<TuplifyUnion11630<Exclude<T, L>>, L>;

type DeepPartial11630<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11630<T[P]> }
  : T;

type Paths11630<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11630<K, Paths11630<T[K], Prev11630[D]>> : never }[keyof T]
  : never;

type Prev11630 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11630<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11630 {
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

type ConfigPaths11630 = Paths11630<NestedConfig11630>;

interface HeavyProps11630 {
  config: DeepPartial11630<NestedConfig11630>;
  path?: ConfigPaths11630;
}

const HeavyComponent11630 = memo(function HeavyComponent11630({ config }: HeavyProps11630) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11630) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11630 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11630: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11630.displayName = 'HeavyComponent11630';
export default HeavyComponent11630;
