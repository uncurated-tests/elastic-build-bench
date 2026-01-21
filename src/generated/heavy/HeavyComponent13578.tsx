'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13578<T> = T extends (infer U)[]
  ? DeepReadonlyArray13578<U>
  : T extends object
  ? DeepReadonlyObject13578<T>
  : T;

interface DeepReadonlyArray13578<T> extends ReadonlyArray<DeepReadonly13578<T>> {}

type DeepReadonlyObject13578<T> = {
  readonly [P in keyof T]: DeepReadonly13578<T[P]>;
};

type UnionToIntersection13578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13578<T> = UnionToIntersection13578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13578<T extends unknown[], V> = [...T, V];

type TuplifyUnion13578<T, L = LastOf13578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13578<TuplifyUnion13578<Exclude<T, L>>, L>;

type DeepPartial13578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13578<T[P]> }
  : T;

type Paths13578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13578<K, Paths13578<T[K], Prev13578[D]>> : never }[keyof T]
  : never;

type Prev13578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13578 {
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

type ConfigPaths13578 = Paths13578<NestedConfig13578>;

interface HeavyProps13578 {
  config: DeepPartial13578<NestedConfig13578>;
  path?: ConfigPaths13578;
}

const HeavyComponent13578 = memo(function HeavyComponent13578({ config }: HeavyProps13578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13578.displayName = 'HeavyComponent13578';
export default HeavyComponent13578;
