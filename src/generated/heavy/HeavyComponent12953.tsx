'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12953<T> = T extends (infer U)[]
  ? DeepReadonlyArray12953<U>
  : T extends object
  ? DeepReadonlyObject12953<T>
  : T;

interface DeepReadonlyArray12953<T> extends ReadonlyArray<DeepReadonly12953<T>> {}

type DeepReadonlyObject12953<T> = {
  readonly [P in keyof T]: DeepReadonly12953<T[P]>;
};

type UnionToIntersection12953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12953<T> = UnionToIntersection12953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12953<T extends unknown[], V> = [...T, V];

type TuplifyUnion12953<T, L = LastOf12953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12953<TuplifyUnion12953<Exclude<T, L>>, L>;

type DeepPartial12953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12953<T[P]> }
  : T;

type Paths12953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12953<K, Paths12953<T[K], Prev12953[D]>> : never }[keyof T]
  : never;

type Prev12953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12953 {
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

type ConfigPaths12953 = Paths12953<NestedConfig12953>;

interface HeavyProps12953 {
  config: DeepPartial12953<NestedConfig12953>;
  path?: ConfigPaths12953;
}

const HeavyComponent12953 = memo(function HeavyComponent12953({ config }: HeavyProps12953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12953.displayName = 'HeavyComponent12953';
export default HeavyComponent12953;
