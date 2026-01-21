'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12786<T> = T extends (infer U)[]
  ? DeepReadonlyArray12786<U>
  : T extends object
  ? DeepReadonlyObject12786<T>
  : T;

interface DeepReadonlyArray12786<T> extends ReadonlyArray<DeepReadonly12786<T>> {}

type DeepReadonlyObject12786<T> = {
  readonly [P in keyof T]: DeepReadonly12786<T[P]>;
};

type UnionToIntersection12786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12786<T> = UnionToIntersection12786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12786<T extends unknown[], V> = [...T, V];

type TuplifyUnion12786<T, L = LastOf12786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12786<TuplifyUnion12786<Exclude<T, L>>, L>;

type DeepPartial12786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12786<T[P]> }
  : T;

type Paths12786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12786<K, Paths12786<T[K], Prev12786[D]>> : never }[keyof T]
  : never;

type Prev12786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12786 {
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

type ConfigPaths12786 = Paths12786<NestedConfig12786>;

interface HeavyProps12786 {
  config: DeepPartial12786<NestedConfig12786>;
  path?: ConfigPaths12786;
}

const HeavyComponent12786 = memo(function HeavyComponent12786({ config }: HeavyProps12786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12786.displayName = 'HeavyComponent12786';
export default HeavyComponent12786;
