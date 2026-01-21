'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12521<T> = T extends (infer U)[]
  ? DeepReadonlyArray12521<U>
  : T extends object
  ? DeepReadonlyObject12521<T>
  : T;

interface DeepReadonlyArray12521<T> extends ReadonlyArray<DeepReadonly12521<T>> {}

type DeepReadonlyObject12521<T> = {
  readonly [P in keyof T]: DeepReadonly12521<T[P]>;
};

type UnionToIntersection12521<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12521<T> = UnionToIntersection12521<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12521<T extends unknown[], V> = [...T, V];

type TuplifyUnion12521<T, L = LastOf12521<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12521<TuplifyUnion12521<Exclude<T, L>>, L>;

type DeepPartial12521<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12521<T[P]> }
  : T;

type Paths12521<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12521<K, Paths12521<T[K], Prev12521[D]>> : never }[keyof T]
  : never;

type Prev12521 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12521<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12521 {
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

type ConfigPaths12521 = Paths12521<NestedConfig12521>;

interface HeavyProps12521 {
  config: DeepPartial12521<NestedConfig12521>;
  path?: ConfigPaths12521;
}

const HeavyComponent12521 = memo(function HeavyComponent12521({ config }: HeavyProps12521) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12521) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12521 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12521: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12521.displayName = 'HeavyComponent12521';
export default HeavyComponent12521;
