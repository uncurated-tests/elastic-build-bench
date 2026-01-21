'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13949<T> = T extends (infer U)[]
  ? DeepReadonlyArray13949<U>
  : T extends object
  ? DeepReadonlyObject13949<T>
  : T;

interface DeepReadonlyArray13949<T> extends ReadonlyArray<DeepReadonly13949<T>> {}

type DeepReadonlyObject13949<T> = {
  readonly [P in keyof T]: DeepReadonly13949<T[P]>;
};

type UnionToIntersection13949<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13949<T> = UnionToIntersection13949<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13949<T extends unknown[], V> = [...T, V];

type TuplifyUnion13949<T, L = LastOf13949<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13949<TuplifyUnion13949<Exclude<T, L>>, L>;

type DeepPartial13949<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13949<T[P]> }
  : T;

type Paths13949<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13949<K, Paths13949<T[K], Prev13949[D]>> : never }[keyof T]
  : never;

type Prev13949 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13949<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13949 {
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

type ConfigPaths13949 = Paths13949<NestedConfig13949>;

interface HeavyProps13949 {
  config: DeepPartial13949<NestedConfig13949>;
  path?: ConfigPaths13949;
}

const HeavyComponent13949 = memo(function HeavyComponent13949({ config }: HeavyProps13949) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13949) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13949 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13949: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13949.displayName = 'HeavyComponent13949';
export default HeavyComponent13949;
