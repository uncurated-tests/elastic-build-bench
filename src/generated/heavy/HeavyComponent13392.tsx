'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13392<T> = T extends (infer U)[]
  ? DeepReadonlyArray13392<U>
  : T extends object
  ? DeepReadonlyObject13392<T>
  : T;

interface DeepReadonlyArray13392<T> extends ReadonlyArray<DeepReadonly13392<T>> {}

type DeepReadonlyObject13392<T> = {
  readonly [P in keyof T]: DeepReadonly13392<T[P]>;
};

type UnionToIntersection13392<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13392<T> = UnionToIntersection13392<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13392<T extends unknown[], V> = [...T, V];

type TuplifyUnion13392<T, L = LastOf13392<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13392<TuplifyUnion13392<Exclude<T, L>>, L>;

type DeepPartial13392<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13392<T[P]> }
  : T;

type Paths13392<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13392<K, Paths13392<T[K], Prev13392[D]>> : never }[keyof T]
  : never;

type Prev13392 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13392<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13392 {
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

type ConfigPaths13392 = Paths13392<NestedConfig13392>;

interface HeavyProps13392 {
  config: DeepPartial13392<NestedConfig13392>;
  path?: ConfigPaths13392;
}

const HeavyComponent13392 = memo(function HeavyComponent13392({ config }: HeavyProps13392) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13392) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13392 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13392: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13392.displayName = 'HeavyComponent13392';
export default HeavyComponent13392;
