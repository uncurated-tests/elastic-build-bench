'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13075<T> = T extends (infer U)[]
  ? DeepReadonlyArray13075<U>
  : T extends object
  ? DeepReadonlyObject13075<T>
  : T;

interface DeepReadonlyArray13075<T> extends ReadonlyArray<DeepReadonly13075<T>> {}

type DeepReadonlyObject13075<T> = {
  readonly [P in keyof T]: DeepReadonly13075<T[P]>;
};

type UnionToIntersection13075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13075<T> = UnionToIntersection13075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13075<T extends unknown[], V> = [...T, V];

type TuplifyUnion13075<T, L = LastOf13075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13075<TuplifyUnion13075<Exclude<T, L>>, L>;

type DeepPartial13075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13075<T[P]> }
  : T;

type Paths13075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13075<K, Paths13075<T[K], Prev13075[D]>> : never }[keyof T]
  : never;

type Prev13075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13075 {
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

type ConfigPaths13075 = Paths13075<NestedConfig13075>;

interface HeavyProps13075 {
  config: DeepPartial13075<NestedConfig13075>;
  path?: ConfigPaths13075;
}

const HeavyComponent13075 = memo(function HeavyComponent13075({ config }: HeavyProps13075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13075.displayName = 'HeavyComponent13075';
export default HeavyComponent13075;
