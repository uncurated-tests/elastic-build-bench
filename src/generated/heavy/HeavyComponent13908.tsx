'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13908<T> = T extends (infer U)[]
  ? DeepReadonlyArray13908<U>
  : T extends object
  ? DeepReadonlyObject13908<T>
  : T;

interface DeepReadonlyArray13908<T> extends ReadonlyArray<DeepReadonly13908<T>> {}

type DeepReadonlyObject13908<T> = {
  readonly [P in keyof T]: DeepReadonly13908<T[P]>;
};

type UnionToIntersection13908<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13908<T> = UnionToIntersection13908<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13908<T extends unknown[], V> = [...T, V];

type TuplifyUnion13908<T, L = LastOf13908<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13908<TuplifyUnion13908<Exclude<T, L>>, L>;

type DeepPartial13908<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13908<T[P]> }
  : T;

type Paths13908<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13908<K, Paths13908<T[K], Prev13908[D]>> : never }[keyof T]
  : never;

type Prev13908 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13908<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13908 {
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

type ConfigPaths13908 = Paths13908<NestedConfig13908>;

interface HeavyProps13908 {
  config: DeepPartial13908<NestedConfig13908>;
  path?: ConfigPaths13908;
}

const HeavyComponent13908 = memo(function HeavyComponent13908({ config }: HeavyProps13908) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13908) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13908 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13908: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13908.displayName = 'HeavyComponent13908';
export default HeavyComponent13908;
