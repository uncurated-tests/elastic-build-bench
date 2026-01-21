'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13841<T> = T extends (infer U)[]
  ? DeepReadonlyArray13841<U>
  : T extends object
  ? DeepReadonlyObject13841<T>
  : T;

interface DeepReadonlyArray13841<T> extends ReadonlyArray<DeepReadonly13841<T>> {}

type DeepReadonlyObject13841<T> = {
  readonly [P in keyof T]: DeepReadonly13841<T[P]>;
};

type UnionToIntersection13841<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13841<T> = UnionToIntersection13841<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13841<T extends unknown[], V> = [...T, V];

type TuplifyUnion13841<T, L = LastOf13841<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13841<TuplifyUnion13841<Exclude<T, L>>, L>;

type DeepPartial13841<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13841<T[P]> }
  : T;

type Paths13841<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13841<K, Paths13841<T[K], Prev13841[D]>> : never }[keyof T]
  : never;

type Prev13841 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13841<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13841 {
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

type ConfigPaths13841 = Paths13841<NestedConfig13841>;

interface HeavyProps13841 {
  config: DeepPartial13841<NestedConfig13841>;
  path?: ConfigPaths13841;
}

const HeavyComponent13841 = memo(function HeavyComponent13841({ config }: HeavyProps13841) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13841) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13841 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13841: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13841.displayName = 'HeavyComponent13841';
export default HeavyComponent13841;
