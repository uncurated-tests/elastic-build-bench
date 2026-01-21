'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13045<T> = T extends (infer U)[]
  ? DeepReadonlyArray13045<U>
  : T extends object
  ? DeepReadonlyObject13045<T>
  : T;

interface DeepReadonlyArray13045<T> extends ReadonlyArray<DeepReadonly13045<T>> {}

type DeepReadonlyObject13045<T> = {
  readonly [P in keyof T]: DeepReadonly13045<T[P]>;
};

type UnionToIntersection13045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13045<T> = UnionToIntersection13045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13045<T extends unknown[], V> = [...T, V];

type TuplifyUnion13045<T, L = LastOf13045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13045<TuplifyUnion13045<Exclude<T, L>>, L>;

type DeepPartial13045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13045<T[P]> }
  : T;

type Paths13045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13045<K, Paths13045<T[K], Prev13045[D]>> : never }[keyof T]
  : never;

type Prev13045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13045 {
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

type ConfigPaths13045 = Paths13045<NestedConfig13045>;

interface HeavyProps13045 {
  config: DeepPartial13045<NestedConfig13045>;
  path?: ConfigPaths13045;
}

const HeavyComponent13045 = memo(function HeavyComponent13045({ config }: HeavyProps13045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13045.displayName = 'HeavyComponent13045';
export default HeavyComponent13045;
