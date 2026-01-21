'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13070<T> = T extends (infer U)[]
  ? DeepReadonlyArray13070<U>
  : T extends object
  ? DeepReadonlyObject13070<T>
  : T;

interface DeepReadonlyArray13070<T> extends ReadonlyArray<DeepReadonly13070<T>> {}

type DeepReadonlyObject13070<T> = {
  readonly [P in keyof T]: DeepReadonly13070<T[P]>;
};

type UnionToIntersection13070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13070<T> = UnionToIntersection13070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13070<T extends unknown[], V> = [...T, V];

type TuplifyUnion13070<T, L = LastOf13070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13070<TuplifyUnion13070<Exclude<T, L>>, L>;

type DeepPartial13070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13070<T[P]> }
  : T;

type Paths13070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13070<K, Paths13070<T[K], Prev13070[D]>> : never }[keyof T]
  : never;

type Prev13070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13070 {
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

type ConfigPaths13070 = Paths13070<NestedConfig13070>;

interface HeavyProps13070 {
  config: DeepPartial13070<NestedConfig13070>;
  path?: ConfigPaths13070;
}

const HeavyComponent13070 = memo(function HeavyComponent13070({ config }: HeavyProps13070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13070.displayName = 'HeavyComponent13070';
export default HeavyComponent13070;
