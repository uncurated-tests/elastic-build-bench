'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11406<T> = T extends (infer U)[]
  ? DeepReadonlyArray11406<U>
  : T extends object
  ? DeepReadonlyObject11406<T>
  : T;

interface DeepReadonlyArray11406<T> extends ReadonlyArray<DeepReadonly11406<T>> {}

type DeepReadonlyObject11406<T> = {
  readonly [P in keyof T]: DeepReadonly11406<T[P]>;
};

type UnionToIntersection11406<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11406<T> = UnionToIntersection11406<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11406<T extends unknown[], V> = [...T, V];

type TuplifyUnion11406<T, L = LastOf11406<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11406<TuplifyUnion11406<Exclude<T, L>>, L>;

type DeepPartial11406<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11406<T[P]> }
  : T;

type Paths11406<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11406<K, Paths11406<T[K], Prev11406[D]>> : never }[keyof T]
  : never;

type Prev11406 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11406<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11406 {
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

type ConfigPaths11406 = Paths11406<NestedConfig11406>;

interface HeavyProps11406 {
  config: DeepPartial11406<NestedConfig11406>;
  path?: ConfigPaths11406;
}

const HeavyComponent11406 = memo(function HeavyComponent11406({ config }: HeavyProps11406) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11406) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11406 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11406: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11406.displayName = 'HeavyComponent11406';
export default HeavyComponent11406;
