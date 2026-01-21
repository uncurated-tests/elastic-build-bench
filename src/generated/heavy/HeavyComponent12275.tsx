'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12275<T> = T extends (infer U)[]
  ? DeepReadonlyArray12275<U>
  : T extends object
  ? DeepReadonlyObject12275<T>
  : T;

interface DeepReadonlyArray12275<T> extends ReadonlyArray<DeepReadonly12275<T>> {}

type DeepReadonlyObject12275<T> = {
  readonly [P in keyof T]: DeepReadonly12275<T[P]>;
};

type UnionToIntersection12275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12275<T> = UnionToIntersection12275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12275<T extends unknown[], V> = [...T, V];

type TuplifyUnion12275<T, L = LastOf12275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12275<TuplifyUnion12275<Exclude<T, L>>, L>;

type DeepPartial12275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12275<T[P]> }
  : T;

type Paths12275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12275<K, Paths12275<T[K], Prev12275[D]>> : never }[keyof T]
  : never;

type Prev12275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12275 {
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

type ConfigPaths12275 = Paths12275<NestedConfig12275>;

interface HeavyProps12275 {
  config: DeepPartial12275<NestedConfig12275>;
  path?: ConfigPaths12275;
}

const HeavyComponent12275 = memo(function HeavyComponent12275({ config }: HeavyProps12275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12275.displayName = 'HeavyComponent12275';
export default HeavyComponent12275;
