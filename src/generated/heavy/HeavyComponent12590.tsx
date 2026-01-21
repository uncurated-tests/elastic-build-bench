'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12590<T> = T extends (infer U)[]
  ? DeepReadonlyArray12590<U>
  : T extends object
  ? DeepReadonlyObject12590<T>
  : T;

interface DeepReadonlyArray12590<T> extends ReadonlyArray<DeepReadonly12590<T>> {}

type DeepReadonlyObject12590<T> = {
  readonly [P in keyof T]: DeepReadonly12590<T[P]>;
};

type UnionToIntersection12590<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12590<T> = UnionToIntersection12590<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12590<T extends unknown[], V> = [...T, V];

type TuplifyUnion12590<T, L = LastOf12590<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12590<TuplifyUnion12590<Exclude<T, L>>, L>;

type DeepPartial12590<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12590<T[P]> }
  : T;

type Paths12590<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12590<K, Paths12590<T[K], Prev12590[D]>> : never }[keyof T]
  : never;

type Prev12590 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12590<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12590 {
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

type ConfigPaths12590 = Paths12590<NestedConfig12590>;

interface HeavyProps12590 {
  config: DeepPartial12590<NestedConfig12590>;
  path?: ConfigPaths12590;
}

const HeavyComponent12590 = memo(function HeavyComponent12590({ config }: HeavyProps12590) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12590) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12590 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12590: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12590.displayName = 'HeavyComponent12590';
export default HeavyComponent12590;
