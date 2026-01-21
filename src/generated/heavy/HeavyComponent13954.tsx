'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13954<T> = T extends (infer U)[]
  ? DeepReadonlyArray13954<U>
  : T extends object
  ? DeepReadonlyObject13954<T>
  : T;

interface DeepReadonlyArray13954<T> extends ReadonlyArray<DeepReadonly13954<T>> {}

type DeepReadonlyObject13954<T> = {
  readonly [P in keyof T]: DeepReadonly13954<T[P]>;
};

type UnionToIntersection13954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13954<T> = UnionToIntersection13954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13954<T extends unknown[], V> = [...T, V];

type TuplifyUnion13954<T, L = LastOf13954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13954<TuplifyUnion13954<Exclude<T, L>>, L>;

type DeepPartial13954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13954<T[P]> }
  : T;

type Paths13954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13954<K, Paths13954<T[K], Prev13954[D]>> : never }[keyof T]
  : never;

type Prev13954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13954 {
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

type ConfigPaths13954 = Paths13954<NestedConfig13954>;

interface HeavyProps13954 {
  config: DeepPartial13954<NestedConfig13954>;
  path?: ConfigPaths13954;
}

const HeavyComponent13954 = memo(function HeavyComponent13954({ config }: HeavyProps13954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13954.displayName = 'HeavyComponent13954';
export default HeavyComponent13954;
