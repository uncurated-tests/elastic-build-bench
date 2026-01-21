'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12880<T> = T extends (infer U)[]
  ? DeepReadonlyArray12880<U>
  : T extends object
  ? DeepReadonlyObject12880<T>
  : T;

interface DeepReadonlyArray12880<T> extends ReadonlyArray<DeepReadonly12880<T>> {}

type DeepReadonlyObject12880<T> = {
  readonly [P in keyof T]: DeepReadonly12880<T[P]>;
};

type UnionToIntersection12880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12880<T> = UnionToIntersection12880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12880<T extends unknown[], V> = [...T, V];

type TuplifyUnion12880<T, L = LastOf12880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12880<TuplifyUnion12880<Exclude<T, L>>, L>;

type DeepPartial12880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12880<T[P]> }
  : T;

type Paths12880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12880<K, Paths12880<T[K], Prev12880[D]>> : never }[keyof T]
  : never;

type Prev12880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12880 {
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

type ConfigPaths12880 = Paths12880<NestedConfig12880>;

interface HeavyProps12880 {
  config: DeepPartial12880<NestedConfig12880>;
  path?: ConfigPaths12880;
}

const HeavyComponent12880 = memo(function HeavyComponent12880({ config }: HeavyProps12880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12880.displayName = 'HeavyComponent12880';
export default HeavyComponent12880;
