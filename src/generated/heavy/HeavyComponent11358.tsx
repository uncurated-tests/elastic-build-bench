'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11358<T> = T extends (infer U)[]
  ? DeepReadonlyArray11358<U>
  : T extends object
  ? DeepReadonlyObject11358<T>
  : T;

interface DeepReadonlyArray11358<T> extends ReadonlyArray<DeepReadonly11358<T>> {}

type DeepReadonlyObject11358<T> = {
  readonly [P in keyof T]: DeepReadonly11358<T[P]>;
};

type UnionToIntersection11358<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11358<T> = UnionToIntersection11358<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11358<T extends unknown[], V> = [...T, V];

type TuplifyUnion11358<T, L = LastOf11358<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11358<TuplifyUnion11358<Exclude<T, L>>, L>;

type DeepPartial11358<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11358<T[P]> }
  : T;

type Paths11358<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11358<K, Paths11358<T[K], Prev11358[D]>> : never }[keyof T]
  : never;

type Prev11358 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11358<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11358 {
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

type ConfigPaths11358 = Paths11358<NestedConfig11358>;

interface HeavyProps11358 {
  config: DeepPartial11358<NestedConfig11358>;
  path?: ConfigPaths11358;
}

const HeavyComponent11358 = memo(function HeavyComponent11358({ config }: HeavyProps11358) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11358) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11358 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11358: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11358.displayName = 'HeavyComponent11358';
export default HeavyComponent11358;
