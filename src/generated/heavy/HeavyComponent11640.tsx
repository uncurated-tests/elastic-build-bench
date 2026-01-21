'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11640<T> = T extends (infer U)[]
  ? DeepReadonlyArray11640<U>
  : T extends object
  ? DeepReadonlyObject11640<T>
  : T;

interface DeepReadonlyArray11640<T> extends ReadonlyArray<DeepReadonly11640<T>> {}

type DeepReadonlyObject11640<T> = {
  readonly [P in keyof T]: DeepReadonly11640<T[P]>;
};

type UnionToIntersection11640<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11640<T> = UnionToIntersection11640<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11640<T extends unknown[], V> = [...T, V];

type TuplifyUnion11640<T, L = LastOf11640<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11640<TuplifyUnion11640<Exclude<T, L>>, L>;

type DeepPartial11640<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11640<T[P]> }
  : T;

type Paths11640<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11640<K, Paths11640<T[K], Prev11640[D]>> : never }[keyof T]
  : never;

type Prev11640 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11640<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11640 {
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

type ConfigPaths11640 = Paths11640<NestedConfig11640>;

interface HeavyProps11640 {
  config: DeepPartial11640<NestedConfig11640>;
  path?: ConfigPaths11640;
}

const HeavyComponent11640 = memo(function HeavyComponent11640({ config }: HeavyProps11640) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11640) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11640 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11640: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11640.displayName = 'HeavyComponent11640';
export default HeavyComponent11640;
