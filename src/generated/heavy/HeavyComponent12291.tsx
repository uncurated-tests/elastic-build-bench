'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12291<T> = T extends (infer U)[]
  ? DeepReadonlyArray12291<U>
  : T extends object
  ? DeepReadonlyObject12291<T>
  : T;

interface DeepReadonlyArray12291<T> extends ReadonlyArray<DeepReadonly12291<T>> {}

type DeepReadonlyObject12291<T> = {
  readonly [P in keyof T]: DeepReadonly12291<T[P]>;
};

type UnionToIntersection12291<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12291<T> = UnionToIntersection12291<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12291<T extends unknown[], V> = [...T, V];

type TuplifyUnion12291<T, L = LastOf12291<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12291<TuplifyUnion12291<Exclude<T, L>>, L>;

type DeepPartial12291<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12291<T[P]> }
  : T;

type Paths12291<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12291<K, Paths12291<T[K], Prev12291[D]>> : never }[keyof T]
  : never;

type Prev12291 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12291<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12291 {
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

type ConfigPaths12291 = Paths12291<NestedConfig12291>;

interface HeavyProps12291 {
  config: DeepPartial12291<NestedConfig12291>;
  path?: ConfigPaths12291;
}

const HeavyComponent12291 = memo(function HeavyComponent12291({ config }: HeavyProps12291) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12291) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12291 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12291: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12291.displayName = 'HeavyComponent12291';
export default HeavyComponent12291;
