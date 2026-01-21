'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13163<T> = T extends (infer U)[]
  ? DeepReadonlyArray13163<U>
  : T extends object
  ? DeepReadonlyObject13163<T>
  : T;

interface DeepReadonlyArray13163<T> extends ReadonlyArray<DeepReadonly13163<T>> {}

type DeepReadonlyObject13163<T> = {
  readonly [P in keyof T]: DeepReadonly13163<T[P]>;
};

type UnionToIntersection13163<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13163<T> = UnionToIntersection13163<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13163<T extends unknown[], V> = [...T, V];

type TuplifyUnion13163<T, L = LastOf13163<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13163<TuplifyUnion13163<Exclude<T, L>>, L>;

type DeepPartial13163<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13163<T[P]> }
  : T;

type Paths13163<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13163<K, Paths13163<T[K], Prev13163[D]>> : never }[keyof T]
  : never;

type Prev13163 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13163<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13163 {
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

type ConfigPaths13163 = Paths13163<NestedConfig13163>;

interface HeavyProps13163 {
  config: DeepPartial13163<NestedConfig13163>;
  path?: ConfigPaths13163;
}

const HeavyComponent13163 = memo(function HeavyComponent13163({ config }: HeavyProps13163) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13163) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13163 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13163: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13163.displayName = 'HeavyComponent13163';
export default HeavyComponent13163;
