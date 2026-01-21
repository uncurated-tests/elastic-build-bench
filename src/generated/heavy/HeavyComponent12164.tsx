'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12164<T> = T extends (infer U)[]
  ? DeepReadonlyArray12164<U>
  : T extends object
  ? DeepReadonlyObject12164<T>
  : T;

interface DeepReadonlyArray12164<T> extends ReadonlyArray<DeepReadonly12164<T>> {}

type DeepReadonlyObject12164<T> = {
  readonly [P in keyof T]: DeepReadonly12164<T[P]>;
};

type UnionToIntersection12164<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12164<T> = UnionToIntersection12164<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12164<T extends unknown[], V> = [...T, V];

type TuplifyUnion12164<T, L = LastOf12164<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12164<TuplifyUnion12164<Exclude<T, L>>, L>;

type DeepPartial12164<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12164<T[P]> }
  : T;

type Paths12164<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12164<K, Paths12164<T[K], Prev12164[D]>> : never }[keyof T]
  : never;

type Prev12164 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12164<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12164 {
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

type ConfigPaths12164 = Paths12164<NestedConfig12164>;

interface HeavyProps12164 {
  config: DeepPartial12164<NestedConfig12164>;
  path?: ConfigPaths12164;
}

const HeavyComponent12164 = memo(function HeavyComponent12164({ config }: HeavyProps12164) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12164) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12164 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12164: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12164.displayName = 'HeavyComponent12164';
export default HeavyComponent12164;
