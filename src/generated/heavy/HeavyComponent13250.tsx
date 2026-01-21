'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13250<T> = T extends (infer U)[]
  ? DeepReadonlyArray13250<U>
  : T extends object
  ? DeepReadonlyObject13250<T>
  : T;

interface DeepReadonlyArray13250<T> extends ReadonlyArray<DeepReadonly13250<T>> {}

type DeepReadonlyObject13250<T> = {
  readonly [P in keyof T]: DeepReadonly13250<T[P]>;
};

type UnionToIntersection13250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13250<T> = UnionToIntersection13250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13250<T extends unknown[], V> = [...T, V];

type TuplifyUnion13250<T, L = LastOf13250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13250<TuplifyUnion13250<Exclude<T, L>>, L>;

type DeepPartial13250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13250<T[P]> }
  : T;

type Paths13250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13250<K, Paths13250<T[K], Prev13250[D]>> : never }[keyof T]
  : never;

type Prev13250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13250 {
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

type ConfigPaths13250 = Paths13250<NestedConfig13250>;

interface HeavyProps13250 {
  config: DeepPartial13250<NestedConfig13250>;
  path?: ConfigPaths13250;
}

const HeavyComponent13250 = memo(function HeavyComponent13250({ config }: HeavyProps13250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13250.displayName = 'HeavyComponent13250';
export default HeavyComponent13250;
