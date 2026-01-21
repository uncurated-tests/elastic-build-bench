'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12415<T> = T extends (infer U)[]
  ? DeepReadonlyArray12415<U>
  : T extends object
  ? DeepReadonlyObject12415<T>
  : T;

interface DeepReadonlyArray12415<T> extends ReadonlyArray<DeepReadonly12415<T>> {}

type DeepReadonlyObject12415<T> = {
  readonly [P in keyof T]: DeepReadonly12415<T[P]>;
};

type UnionToIntersection12415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12415<T> = UnionToIntersection12415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12415<T extends unknown[], V> = [...T, V];

type TuplifyUnion12415<T, L = LastOf12415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12415<TuplifyUnion12415<Exclude<T, L>>, L>;

type DeepPartial12415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12415<T[P]> }
  : T;

type Paths12415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12415<K, Paths12415<T[K], Prev12415[D]>> : never }[keyof T]
  : never;

type Prev12415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12415 {
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

type ConfigPaths12415 = Paths12415<NestedConfig12415>;

interface HeavyProps12415 {
  config: DeepPartial12415<NestedConfig12415>;
  path?: ConfigPaths12415;
}

const HeavyComponent12415 = memo(function HeavyComponent12415({ config }: HeavyProps12415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12415.displayName = 'HeavyComponent12415';
export default HeavyComponent12415;
