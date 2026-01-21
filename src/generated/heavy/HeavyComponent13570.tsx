'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13570<T> = T extends (infer U)[]
  ? DeepReadonlyArray13570<U>
  : T extends object
  ? DeepReadonlyObject13570<T>
  : T;

interface DeepReadonlyArray13570<T> extends ReadonlyArray<DeepReadonly13570<T>> {}

type DeepReadonlyObject13570<T> = {
  readonly [P in keyof T]: DeepReadonly13570<T[P]>;
};

type UnionToIntersection13570<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13570<T> = UnionToIntersection13570<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13570<T extends unknown[], V> = [...T, V];

type TuplifyUnion13570<T, L = LastOf13570<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13570<TuplifyUnion13570<Exclude<T, L>>, L>;

type DeepPartial13570<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13570<T[P]> }
  : T;

type Paths13570<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13570<K, Paths13570<T[K], Prev13570[D]>> : never }[keyof T]
  : never;

type Prev13570 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13570<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13570 {
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

type ConfigPaths13570 = Paths13570<NestedConfig13570>;

interface HeavyProps13570 {
  config: DeepPartial13570<NestedConfig13570>;
  path?: ConfigPaths13570;
}

const HeavyComponent13570 = memo(function HeavyComponent13570({ config }: HeavyProps13570) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13570) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13570 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13570: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13570.displayName = 'HeavyComponent13570';
export default HeavyComponent13570;
