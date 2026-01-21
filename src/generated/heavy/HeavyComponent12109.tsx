'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12109<T> = T extends (infer U)[]
  ? DeepReadonlyArray12109<U>
  : T extends object
  ? DeepReadonlyObject12109<T>
  : T;

interface DeepReadonlyArray12109<T> extends ReadonlyArray<DeepReadonly12109<T>> {}

type DeepReadonlyObject12109<T> = {
  readonly [P in keyof T]: DeepReadonly12109<T[P]>;
};

type UnionToIntersection12109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12109<T> = UnionToIntersection12109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12109<T extends unknown[], V> = [...T, V];

type TuplifyUnion12109<T, L = LastOf12109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12109<TuplifyUnion12109<Exclude<T, L>>, L>;

type DeepPartial12109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12109<T[P]> }
  : T;

type Paths12109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12109<K, Paths12109<T[K], Prev12109[D]>> : never }[keyof T]
  : never;

type Prev12109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12109 {
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

type ConfigPaths12109 = Paths12109<NestedConfig12109>;

interface HeavyProps12109 {
  config: DeepPartial12109<NestedConfig12109>;
  path?: ConfigPaths12109;
}

const HeavyComponent12109 = memo(function HeavyComponent12109({ config }: HeavyProps12109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12109.displayName = 'HeavyComponent12109';
export default HeavyComponent12109;
