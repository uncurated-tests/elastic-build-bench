'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13858<T> = T extends (infer U)[]
  ? DeepReadonlyArray13858<U>
  : T extends object
  ? DeepReadonlyObject13858<T>
  : T;

interface DeepReadonlyArray13858<T> extends ReadonlyArray<DeepReadonly13858<T>> {}

type DeepReadonlyObject13858<T> = {
  readonly [P in keyof T]: DeepReadonly13858<T[P]>;
};

type UnionToIntersection13858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13858<T> = UnionToIntersection13858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13858<T extends unknown[], V> = [...T, V];

type TuplifyUnion13858<T, L = LastOf13858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13858<TuplifyUnion13858<Exclude<T, L>>, L>;

type DeepPartial13858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13858<T[P]> }
  : T;

type Paths13858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13858<K, Paths13858<T[K], Prev13858[D]>> : never }[keyof T]
  : never;

type Prev13858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13858 {
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

type ConfigPaths13858 = Paths13858<NestedConfig13858>;

interface HeavyProps13858 {
  config: DeepPartial13858<NestedConfig13858>;
  path?: ConfigPaths13858;
}

const HeavyComponent13858 = memo(function HeavyComponent13858({ config }: HeavyProps13858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13858.displayName = 'HeavyComponent13858';
export default HeavyComponent13858;
