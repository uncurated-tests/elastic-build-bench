'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11535<T> = T extends (infer U)[]
  ? DeepReadonlyArray11535<U>
  : T extends object
  ? DeepReadonlyObject11535<T>
  : T;

interface DeepReadonlyArray11535<T> extends ReadonlyArray<DeepReadonly11535<T>> {}

type DeepReadonlyObject11535<T> = {
  readonly [P in keyof T]: DeepReadonly11535<T[P]>;
};

type UnionToIntersection11535<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11535<T> = UnionToIntersection11535<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11535<T extends unknown[], V> = [...T, V];

type TuplifyUnion11535<T, L = LastOf11535<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11535<TuplifyUnion11535<Exclude<T, L>>, L>;

type DeepPartial11535<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11535<T[P]> }
  : T;

type Paths11535<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11535<K, Paths11535<T[K], Prev11535[D]>> : never }[keyof T]
  : never;

type Prev11535 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11535<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11535 {
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

type ConfigPaths11535 = Paths11535<NestedConfig11535>;

interface HeavyProps11535 {
  config: DeepPartial11535<NestedConfig11535>;
  path?: ConfigPaths11535;
}

const HeavyComponent11535 = memo(function HeavyComponent11535({ config }: HeavyProps11535) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11535) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11535 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11535: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11535.displayName = 'HeavyComponent11535';
export default HeavyComponent11535;
