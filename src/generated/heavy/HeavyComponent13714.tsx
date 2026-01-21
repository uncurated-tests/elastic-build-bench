'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13714<T> = T extends (infer U)[]
  ? DeepReadonlyArray13714<U>
  : T extends object
  ? DeepReadonlyObject13714<T>
  : T;

interface DeepReadonlyArray13714<T> extends ReadonlyArray<DeepReadonly13714<T>> {}

type DeepReadonlyObject13714<T> = {
  readonly [P in keyof T]: DeepReadonly13714<T[P]>;
};

type UnionToIntersection13714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13714<T> = UnionToIntersection13714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13714<T extends unknown[], V> = [...T, V];

type TuplifyUnion13714<T, L = LastOf13714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13714<TuplifyUnion13714<Exclude<T, L>>, L>;

type DeepPartial13714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13714<T[P]> }
  : T;

type Paths13714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13714<K, Paths13714<T[K], Prev13714[D]>> : never }[keyof T]
  : never;

type Prev13714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13714 {
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

type ConfigPaths13714 = Paths13714<NestedConfig13714>;

interface HeavyProps13714 {
  config: DeepPartial13714<NestedConfig13714>;
  path?: ConfigPaths13714;
}

const HeavyComponent13714 = memo(function HeavyComponent13714({ config }: HeavyProps13714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13714.displayName = 'HeavyComponent13714';
export default HeavyComponent13714;
