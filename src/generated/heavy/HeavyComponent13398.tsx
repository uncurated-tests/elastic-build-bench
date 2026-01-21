'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13398<T> = T extends (infer U)[]
  ? DeepReadonlyArray13398<U>
  : T extends object
  ? DeepReadonlyObject13398<T>
  : T;

interface DeepReadonlyArray13398<T> extends ReadonlyArray<DeepReadonly13398<T>> {}

type DeepReadonlyObject13398<T> = {
  readonly [P in keyof T]: DeepReadonly13398<T[P]>;
};

type UnionToIntersection13398<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13398<T> = UnionToIntersection13398<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13398<T extends unknown[], V> = [...T, V];

type TuplifyUnion13398<T, L = LastOf13398<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13398<TuplifyUnion13398<Exclude<T, L>>, L>;

type DeepPartial13398<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13398<T[P]> }
  : T;

type Paths13398<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13398<K, Paths13398<T[K], Prev13398[D]>> : never }[keyof T]
  : never;

type Prev13398 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13398<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13398 {
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

type ConfigPaths13398 = Paths13398<NestedConfig13398>;

interface HeavyProps13398 {
  config: DeepPartial13398<NestedConfig13398>;
  path?: ConfigPaths13398;
}

const HeavyComponent13398 = memo(function HeavyComponent13398({ config }: HeavyProps13398) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13398) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13398 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13398: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13398.displayName = 'HeavyComponent13398';
export default HeavyComponent13398;
