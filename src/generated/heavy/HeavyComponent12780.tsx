'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12780<T> = T extends (infer U)[]
  ? DeepReadonlyArray12780<U>
  : T extends object
  ? DeepReadonlyObject12780<T>
  : T;

interface DeepReadonlyArray12780<T> extends ReadonlyArray<DeepReadonly12780<T>> {}

type DeepReadonlyObject12780<T> = {
  readonly [P in keyof T]: DeepReadonly12780<T[P]>;
};

type UnionToIntersection12780<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12780<T> = UnionToIntersection12780<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12780<T extends unknown[], V> = [...T, V];

type TuplifyUnion12780<T, L = LastOf12780<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12780<TuplifyUnion12780<Exclude<T, L>>, L>;

type DeepPartial12780<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12780<T[P]> }
  : T;

type Paths12780<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12780<K, Paths12780<T[K], Prev12780[D]>> : never }[keyof T]
  : never;

type Prev12780 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12780<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12780 {
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

type ConfigPaths12780 = Paths12780<NestedConfig12780>;

interface HeavyProps12780 {
  config: DeepPartial12780<NestedConfig12780>;
  path?: ConfigPaths12780;
}

const HeavyComponent12780 = memo(function HeavyComponent12780({ config }: HeavyProps12780) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12780) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12780 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12780: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12780.displayName = 'HeavyComponent12780';
export default HeavyComponent12780;
