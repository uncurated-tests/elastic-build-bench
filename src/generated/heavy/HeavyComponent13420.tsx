'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13420<T> = T extends (infer U)[]
  ? DeepReadonlyArray13420<U>
  : T extends object
  ? DeepReadonlyObject13420<T>
  : T;

interface DeepReadonlyArray13420<T> extends ReadonlyArray<DeepReadonly13420<T>> {}

type DeepReadonlyObject13420<T> = {
  readonly [P in keyof T]: DeepReadonly13420<T[P]>;
};

type UnionToIntersection13420<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13420<T> = UnionToIntersection13420<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13420<T extends unknown[], V> = [...T, V];

type TuplifyUnion13420<T, L = LastOf13420<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13420<TuplifyUnion13420<Exclude<T, L>>, L>;

type DeepPartial13420<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13420<T[P]> }
  : T;

type Paths13420<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13420<K, Paths13420<T[K], Prev13420[D]>> : never }[keyof T]
  : never;

type Prev13420 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13420<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13420 {
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

type ConfigPaths13420 = Paths13420<NestedConfig13420>;

interface HeavyProps13420 {
  config: DeepPartial13420<NestedConfig13420>;
  path?: ConfigPaths13420;
}

const HeavyComponent13420 = memo(function HeavyComponent13420({ config }: HeavyProps13420) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13420) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13420 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13420: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13420.displayName = 'HeavyComponent13420';
export default HeavyComponent13420;
