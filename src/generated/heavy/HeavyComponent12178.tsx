'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12178<T> = T extends (infer U)[]
  ? DeepReadonlyArray12178<U>
  : T extends object
  ? DeepReadonlyObject12178<T>
  : T;

interface DeepReadonlyArray12178<T> extends ReadonlyArray<DeepReadonly12178<T>> {}

type DeepReadonlyObject12178<T> = {
  readonly [P in keyof T]: DeepReadonly12178<T[P]>;
};

type UnionToIntersection12178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12178<T> = UnionToIntersection12178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12178<T extends unknown[], V> = [...T, V];

type TuplifyUnion12178<T, L = LastOf12178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12178<TuplifyUnion12178<Exclude<T, L>>, L>;

type DeepPartial12178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12178<T[P]> }
  : T;

type Paths12178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12178<K, Paths12178<T[K], Prev12178[D]>> : never }[keyof T]
  : never;

type Prev12178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12178 {
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

type ConfigPaths12178 = Paths12178<NestedConfig12178>;

interface HeavyProps12178 {
  config: DeepPartial12178<NestedConfig12178>;
  path?: ConfigPaths12178;
}

const HeavyComponent12178 = memo(function HeavyComponent12178({ config }: HeavyProps12178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12178.displayName = 'HeavyComponent12178';
export default HeavyComponent12178;
