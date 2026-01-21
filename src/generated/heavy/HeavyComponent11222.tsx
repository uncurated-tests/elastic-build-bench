'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11222<T> = T extends (infer U)[]
  ? DeepReadonlyArray11222<U>
  : T extends object
  ? DeepReadonlyObject11222<T>
  : T;

interface DeepReadonlyArray11222<T> extends ReadonlyArray<DeepReadonly11222<T>> {}

type DeepReadonlyObject11222<T> = {
  readonly [P in keyof T]: DeepReadonly11222<T[P]>;
};

type UnionToIntersection11222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11222<T> = UnionToIntersection11222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11222<T extends unknown[], V> = [...T, V];

type TuplifyUnion11222<T, L = LastOf11222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11222<TuplifyUnion11222<Exclude<T, L>>, L>;

type DeepPartial11222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11222<T[P]> }
  : T;

type Paths11222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11222<K, Paths11222<T[K], Prev11222[D]>> : never }[keyof T]
  : never;

type Prev11222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11222 {
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

type ConfigPaths11222 = Paths11222<NestedConfig11222>;

interface HeavyProps11222 {
  config: DeepPartial11222<NestedConfig11222>;
  path?: ConfigPaths11222;
}

const HeavyComponent11222 = memo(function HeavyComponent11222({ config }: HeavyProps11222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11222.displayName = 'HeavyComponent11222';
export default HeavyComponent11222;
