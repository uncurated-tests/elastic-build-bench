'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13734<T> = T extends (infer U)[]
  ? DeepReadonlyArray13734<U>
  : T extends object
  ? DeepReadonlyObject13734<T>
  : T;

interface DeepReadonlyArray13734<T> extends ReadonlyArray<DeepReadonly13734<T>> {}

type DeepReadonlyObject13734<T> = {
  readonly [P in keyof T]: DeepReadonly13734<T[P]>;
};

type UnionToIntersection13734<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13734<T> = UnionToIntersection13734<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13734<T extends unknown[], V> = [...T, V];

type TuplifyUnion13734<T, L = LastOf13734<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13734<TuplifyUnion13734<Exclude<T, L>>, L>;

type DeepPartial13734<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13734<T[P]> }
  : T;

type Paths13734<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13734<K, Paths13734<T[K], Prev13734[D]>> : never }[keyof T]
  : never;

type Prev13734 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13734<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13734 {
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

type ConfigPaths13734 = Paths13734<NestedConfig13734>;

interface HeavyProps13734 {
  config: DeepPartial13734<NestedConfig13734>;
  path?: ConfigPaths13734;
}

const HeavyComponent13734 = memo(function HeavyComponent13734({ config }: HeavyProps13734) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13734) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13734 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13734: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13734.displayName = 'HeavyComponent13734';
export default HeavyComponent13734;
