'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11371<T> = T extends (infer U)[]
  ? DeepReadonlyArray11371<U>
  : T extends object
  ? DeepReadonlyObject11371<T>
  : T;

interface DeepReadonlyArray11371<T> extends ReadonlyArray<DeepReadonly11371<T>> {}

type DeepReadonlyObject11371<T> = {
  readonly [P in keyof T]: DeepReadonly11371<T[P]>;
};

type UnionToIntersection11371<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11371<T> = UnionToIntersection11371<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11371<T extends unknown[], V> = [...T, V];

type TuplifyUnion11371<T, L = LastOf11371<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11371<TuplifyUnion11371<Exclude<T, L>>, L>;

type DeepPartial11371<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11371<T[P]> }
  : T;

type Paths11371<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11371<K, Paths11371<T[K], Prev11371[D]>> : never }[keyof T]
  : never;

type Prev11371 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11371<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11371 {
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

type ConfigPaths11371 = Paths11371<NestedConfig11371>;

interface HeavyProps11371 {
  config: DeepPartial11371<NestedConfig11371>;
  path?: ConfigPaths11371;
}

const HeavyComponent11371 = memo(function HeavyComponent11371({ config }: HeavyProps11371) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11371) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11371 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11371: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11371.displayName = 'HeavyComponent11371';
export default HeavyComponent11371;
