'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13413<T> = T extends (infer U)[]
  ? DeepReadonlyArray13413<U>
  : T extends object
  ? DeepReadonlyObject13413<T>
  : T;

interface DeepReadonlyArray13413<T> extends ReadonlyArray<DeepReadonly13413<T>> {}

type DeepReadonlyObject13413<T> = {
  readonly [P in keyof T]: DeepReadonly13413<T[P]>;
};

type UnionToIntersection13413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13413<T> = UnionToIntersection13413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13413<T extends unknown[], V> = [...T, V];

type TuplifyUnion13413<T, L = LastOf13413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13413<TuplifyUnion13413<Exclude<T, L>>, L>;

type DeepPartial13413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13413<T[P]> }
  : T;

type Paths13413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13413<K, Paths13413<T[K], Prev13413[D]>> : never }[keyof T]
  : never;

type Prev13413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13413 {
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

type ConfigPaths13413 = Paths13413<NestedConfig13413>;

interface HeavyProps13413 {
  config: DeepPartial13413<NestedConfig13413>;
  path?: ConfigPaths13413;
}

const HeavyComponent13413 = memo(function HeavyComponent13413({ config }: HeavyProps13413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13413.displayName = 'HeavyComponent13413';
export default HeavyComponent13413;
