'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13663<T> = T extends (infer U)[]
  ? DeepReadonlyArray13663<U>
  : T extends object
  ? DeepReadonlyObject13663<T>
  : T;

interface DeepReadonlyArray13663<T> extends ReadonlyArray<DeepReadonly13663<T>> {}

type DeepReadonlyObject13663<T> = {
  readonly [P in keyof T]: DeepReadonly13663<T[P]>;
};

type UnionToIntersection13663<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13663<T> = UnionToIntersection13663<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13663<T extends unknown[], V> = [...T, V];

type TuplifyUnion13663<T, L = LastOf13663<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13663<TuplifyUnion13663<Exclude<T, L>>, L>;

type DeepPartial13663<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13663<T[P]> }
  : T;

type Paths13663<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13663<K, Paths13663<T[K], Prev13663[D]>> : never }[keyof T]
  : never;

type Prev13663 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13663<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13663 {
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

type ConfigPaths13663 = Paths13663<NestedConfig13663>;

interface HeavyProps13663 {
  config: DeepPartial13663<NestedConfig13663>;
  path?: ConfigPaths13663;
}

const HeavyComponent13663 = memo(function HeavyComponent13663({ config }: HeavyProps13663) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13663) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13663 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13663: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13663.displayName = 'HeavyComponent13663';
export default HeavyComponent13663;
