'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13859<T> = T extends (infer U)[]
  ? DeepReadonlyArray13859<U>
  : T extends object
  ? DeepReadonlyObject13859<T>
  : T;

interface DeepReadonlyArray13859<T> extends ReadonlyArray<DeepReadonly13859<T>> {}

type DeepReadonlyObject13859<T> = {
  readonly [P in keyof T]: DeepReadonly13859<T[P]>;
};

type UnionToIntersection13859<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13859<T> = UnionToIntersection13859<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13859<T extends unknown[], V> = [...T, V];

type TuplifyUnion13859<T, L = LastOf13859<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13859<TuplifyUnion13859<Exclude<T, L>>, L>;

type DeepPartial13859<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13859<T[P]> }
  : T;

type Paths13859<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13859<K, Paths13859<T[K], Prev13859[D]>> : never }[keyof T]
  : never;

type Prev13859 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13859<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13859 {
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

type ConfigPaths13859 = Paths13859<NestedConfig13859>;

interface HeavyProps13859 {
  config: DeepPartial13859<NestedConfig13859>;
  path?: ConfigPaths13859;
}

const HeavyComponent13859 = memo(function HeavyComponent13859({ config }: HeavyProps13859) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13859) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13859 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13859: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13859.displayName = 'HeavyComponent13859';
export default HeavyComponent13859;
