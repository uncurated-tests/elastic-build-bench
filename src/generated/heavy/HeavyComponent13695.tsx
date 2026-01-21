'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13695<T> = T extends (infer U)[]
  ? DeepReadonlyArray13695<U>
  : T extends object
  ? DeepReadonlyObject13695<T>
  : T;

interface DeepReadonlyArray13695<T> extends ReadonlyArray<DeepReadonly13695<T>> {}

type DeepReadonlyObject13695<T> = {
  readonly [P in keyof T]: DeepReadonly13695<T[P]>;
};

type UnionToIntersection13695<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13695<T> = UnionToIntersection13695<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13695<T extends unknown[], V> = [...T, V];

type TuplifyUnion13695<T, L = LastOf13695<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13695<TuplifyUnion13695<Exclude<T, L>>, L>;

type DeepPartial13695<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13695<T[P]> }
  : T;

type Paths13695<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13695<K, Paths13695<T[K], Prev13695[D]>> : never }[keyof T]
  : never;

type Prev13695 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13695<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13695 {
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

type ConfigPaths13695 = Paths13695<NestedConfig13695>;

interface HeavyProps13695 {
  config: DeepPartial13695<NestedConfig13695>;
  path?: ConfigPaths13695;
}

const HeavyComponent13695 = memo(function HeavyComponent13695({ config }: HeavyProps13695) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13695) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13695 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13695: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13695.displayName = 'HeavyComponent13695';
export default HeavyComponent13695;
