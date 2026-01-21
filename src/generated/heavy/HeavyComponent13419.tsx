'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13419<T> = T extends (infer U)[]
  ? DeepReadonlyArray13419<U>
  : T extends object
  ? DeepReadonlyObject13419<T>
  : T;

interface DeepReadonlyArray13419<T> extends ReadonlyArray<DeepReadonly13419<T>> {}

type DeepReadonlyObject13419<T> = {
  readonly [P in keyof T]: DeepReadonly13419<T[P]>;
};

type UnionToIntersection13419<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13419<T> = UnionToIntersection13419<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13419<T extends unknown[], V> = [...T, V];

type TuplifyUnion13419<T, L = LastOf13419<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13419<TuplifyUnion13419<Exclude<T, L>>, L>;

type DeepPartial13419<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13419<T[P]> }
  : T;

type Paths13419<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13419<K, Paths13419<T[K], Prev13419[D]>> : never }[keyof T]
  : never;

type Prev13419 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13419<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13419 {
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

type ConfigPaths13419 = Paths13419<NestedConfig13419>;

interface HeavyProps13419 {
  config: DeepPartial13419<NestedConfig13419>;
  path?: ConfigPaths13419;
}

const HeavyComponent13419 = memo(function HeavyComponent13419({ config }: HeavyProps13419) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13419) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13419 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13419: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13419.displayName = 'HeavyComponent13419';
export default HeavyComponent13419;
