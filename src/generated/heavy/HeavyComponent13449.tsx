'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13449<T> = T extends (infer U)[]
  ? DeepReadonlyArray13449<U>
  : T extends object
  ? DeepReadonlyObject13449<T>
  : T;

interface DeepReadonlyArray13449<T> extends ReadonlyArray<DeepReadonly13449<T>> {}

type DeepReadonlyObject13449<T> = {
  readonly [P in keyof T]: DeepReadonly13449<T[P]>;
};

type UnionToIntersection13449<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13449<T> = UnionToIntersection13449<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13449<T extends unknown[], V> = [...T, V];

type TuplifyUnion13449<T, L = LastOf13449<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13449<TuplifyUnion13449<Exclude<T, L>>, L>;

type DeepPartial13449<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13449<T[P]> }
  : T;

type Paths13449<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13449<K, Paths13449<T[K], Prev13449[D]>> : never }[keyof T]
  : never;

type Prev13449 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13449<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13449 {
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

type ConfigPaths13449 = Paths13449<NestedConfig13449>;

interface HeavyProps13449 {
  config: DeepPartial13449<NestedConfig13449>;
  path?: ConfigPaths13449;
}

const HeavyComponent13449 = memo(function HeavyComponent13449({ config }: HeavyProps13449) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13449) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13449 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13449: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13449.displayName = 'HeavyComponent13449';
export default HeavyComponent13449;
