'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12467<T> = T extends (infer U)[]
  ? DeepReadonlyArray12467<U>
  : T extends object
  ? DeepReadonlyObject12467<T>
  : T;

interface DeepReadonlyArray12467<T> extends ReadonlyArray<DeepReadonly12467<T>> {}

type DeepReadonlyObject12467<T> = {
  readonly [P in keyof T]: DeepReadonly12467<T[P]>;
};

type UnionToIntersection12467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12467<T> = UnionToIntersection12467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12467<T extends unknown[], V> = [...T, V];

type TuplifyUnion12467<T, L = LastOf12467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12467<TuplifyUnion12467<Exclude<T, L>>, L>;

type DeepPartial12467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12467<T[P]> }
  : T;

type Paths12467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12467<K, Paths12467<T[K], Prev12467[D]>> : never }[keyof T]
  : never;

type Prev12467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12467 {
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

type ConfigPaths12467 = Paths12467<NestedConfig12467>;

interface HeavyProps12467 {
  config: DeepPartial12467<NestedConfig12467>;
  path?: ConfigPaths12467;
}

const HeavyComponent12467 = memo(function HeavyComponent12467({ config }: HeavyProps12467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12467.displayName = 'HeavyComponent12467';
export default HeavyComponent12467;
