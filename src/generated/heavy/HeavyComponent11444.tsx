'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11444<T> = T extends (infer U)[]
  ? DeepReadonlyArray11444<U>
  : T extends object
  ? DeepReadonlyObject11444<T>
  : T;

interface DeepReadonlyArray11444<T> extends ReadonlyArray<DeepReadonly11444<T>> {}

type DeepReadonlyObject11444<T> = {
  readonly [P in keyof T]: DeepReadonly11444<T[P]>;
};

type UnionToIntersection11444<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11444<T> = UnionToIntersection11444<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11444<T extends unknown[], V> = [...T, V];

type TuplifyUnion11444<T, L = LastOf11444<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11444<TuplifyUnion11444<Exclude<T, L>>, L>;

type DeepPartial11444<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11444<T[P]> }
  : T;

type Paths11444<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11444<K, Paths11444<T[K], Prev11444[D]>> : never }[keyof T]
  : never;

type Prev11444 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11444<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11444 {
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

type ConfigPaths11444 = Paths11444<NestedConfig11444>;

interface HeavyProps11444 {
  config: DeepPartial11444<NestedConfig11444>;
  path?: ConfigPaths11444;
}

const HeavyComponent11444 = memo(function HeavyComponent11444({ config }: HeavyProps11444) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11444) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11444 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11444: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11444.displayName = 'HeavyComponent11444';
export default HeavyComponent11444;
