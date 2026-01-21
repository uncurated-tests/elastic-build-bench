'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13548<T> = T extends (infer U)[]
  ? DeepReadonlyArray13548<U>
  : T extends object
  ? DeepReadonlyObject13548<T>
  : T;

interface DeepReadonlyArray13548<T> extends ReadonlyArray<DeepReadonly13548<T>> {}

type DeepReadonlyObject13548<T> = {
  readonly [P in keyof T]: DeepReadonly13548<T[P]>;
};

type UnionToIntersection13548<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13548<T> = UnionToIntersection13548<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13548<T extends unknown[], V> = [...T, V];

type TuplifyUnion13548<T, L = LastOf13548<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13548<TuplifyUnion13548<Exclude<T, L>>, L>;

type DeepPartial13548<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13548<T[P]> }
  : T;

type Paths13548<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13548<K, Paths13548<T[K], Prev13548[D]>> : never }[keyof T]
  : never;

type Prev13548 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13548<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13548 {
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

type ConfigPaths13548 = Paths13548<NestedConfig13548>;

interface HeavyProps13548 {
  config: DeepPartial13548<NestedConfig13548>;
  path?: ConfigPaths13548;
}

const HeavyComponent13548 = memo(function HeavyComponent13548({ config }: HeavyProps13548) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13548) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13548 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13548: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13548.displayName = 'HeavyComponent13548';
export default HeavyComponent13548;
