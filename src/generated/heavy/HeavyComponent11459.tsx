'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11459<T> = T extends (infer U)[]
  ? DeepReadonlyArray11459<U>
  : T extends object
  ? DeepReadonlyObject11459<T>
  : T;

interface DeepReadonlyArray11459<T> extends ReadonlyArray<DeepReadonly11459<T>> {}

type DeepReadonlyObject11459<T> = {
  readonly [P in keyof T]: DeepReadonly11459<T[P]>;
};

type UnionToIntersection11459<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11459<T> = UnionToIntersection11459<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11459<T extends unknown[], V> = [...T, V];

type TuplifyUnion11459<T, L = LastOf11459<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11459<TuplifyUnion11459<Exclude<T, L>>, L>;

type DeepPartial11459<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11459<T[P]> }
  : T;

type Paths11459<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11459<K, Paths11459<T[K], Prev11459[D]>> : never }[keyof T]
  : never;

type Prev11459 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11459<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11459 {
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

type ConfigPaths11459 = Paths11459<NestedConfig11459>;

interface HeavyProps11459 {
  config: DeepPartial11459<NestedConfig11459>;
  path?: ConfigPaths11459;
}

const HeavyComponent11459 = memo(function HeavyComponent11459({ config }: HeavyProps11459) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11459) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11459 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11459: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11459.displayName = 'HeavyComponent11459';
export default HeavyComponent11459;
