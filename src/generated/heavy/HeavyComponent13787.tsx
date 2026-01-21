'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13787<T> = T extends (infer U)[]
  ? DeepReadonlyArray13787<U>
  : T extends object
  ? DeepReadonlyObject13787<T>
  : T;

interface DeepReadonlyArray13787<T> extends ReadonlyArray<DeepReadonly13787<T>> {}

type DeepReadonlyObject13787<T> = {
  readonly [P in keyof T]: DeepReadonly13787<T[P]>;
};

type UnionToIntersection13787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13787<T> = UnionToIntersection13787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13787<T extends unknown[], V> = [...T, V];

type TuplifyUnion13787<T, L = LastOf13787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13787<TuplifyUnion13787<Exclude<T, L>>, L>;

type DeepPartial13787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13787<T[P]> }
  : T;

type Paths13787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13787<K, Paths13787<T[K], Prev13787[D]>> : never }[keyof T]
  : never;

type Prev13787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13787 {
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

type ConfigPaths13787 = Paths13787<NestedConfig13787>;

interface HeavyProps13787 {
  config: DeepPartial13787<NestedConfig13787>;
  path?: ConfigPaths13787;
}

const HeavyComponent13787 = memo(function HeavyComponent13787({ config }: HeavyProps13787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13787.displayName = 'HeavyComponent13787';
export default HeavyComponent13787;
