'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12644<T> = T extends (infer U)[]
  ? DeepReadonlyArray12644<U>
  : T extends object
  ? DeepReadonlyObject12644<T>
  : T;

interface DeepReadonlyArray12644<T> extends ReadonlyArray<DeepReadonly12644<T>> {}

type DeepReadonlyObject12644<T> = {
  readonly [P in keyof T]: DeepReadonly12644<T[P]>;
};

type UnionToIntersection12644<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12644<T> = UnionToIntersection12644<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12644<T extends unknown[], V> = [...T, V];

type TuplifyUnion12644<T, L = LastOf12644<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12644<TuplifyUnion12644<Exclude<T, L>>, L>;

type DeepPartial12644<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12644<T[P]> }
  : T;

type Paths12644<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12644<K, Paths12644<T[K], Prev12644[D]>> : never }[keyof T]
  : never;

type Prev12644 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12644<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12644 {
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

type ConfigPaths12644 = Paths12644<NestedConfig12644>;

interface HeavyProps12644 {
  config: DeepPartial12644<NestedConfig12644>;
  path?: ConfigPaths12644;
}

const HeavyComponent12644 = memo(function HeavyComponent12644({ config }: HeavyProps12644) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12644) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12644 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12644: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12644.displayName = 'HeavyComponent12644';
export default HeavyComponent12644;
