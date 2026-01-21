'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13951<T> = T extends (infer U)[]
  ? DeepReadonlyArray13951<U>
  : T extends object
  ? DeepReadonlyObject13951<T>
  : T;

interface DeepReadonlyArray13951<T> extends ReadonlyArray<DeepReadonly13951<T>> {}

type DeepReadonlyObject13951<T> = {
  readonly [P in keyof T]: DeepReadonly13951<T[P]>;
};

type UnionToIntersection13951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13951<T> = UnionToIntersection13951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13951<T extends unknown[], V> = [...T, V];

type TuplifyUnion13951<T, L = LastOf13951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13951<TuplifyUnion13951<Exclude<T, L>>, L>;

type DeepPartial13951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13951<T[P]> }
  : T;

type Paths13951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13951<K, Paths13951<T[K], Prev13951[D]>> : never }[keyof T]
  : never;

type Prev13951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13951 {
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

type ConfigPaths13951 = Paths13951<NestedConfig13951>;

interface HeavyProps13951 {
  config: DeepPartial13951<NestedConfig13951>;
  path?: ConfigPaths13951;
}

const HeavyComponent13951 = memo(function HeavyComponent13951({ config }: HeavyProps13951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13951.displayName = 'HeavyComponent13951';
export default HeavyComponent13951;
