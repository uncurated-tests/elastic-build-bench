'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12591<T> = T extends (infer U)[]
  ? DeepReadonlyArray12591<U>
  : T extends object
  ? DeepReadonlyObject12591<T>
  : T;

interface DeepReadonlyArray12591<T> extends ReadonlyArray<DeepReadonly12591<T>> {}

type DeepReadonlyObject12591<T> = {
  readonly [P in keyof T]: DeepReadonly12591<T[P]>;
};

type UnionToIntersection12591<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12591<T> = UnionToIntersection12591<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12591<T extends unknown[], V> = [...T, V];

type TuplifyUnion12591<T, L = LastOf12591<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12591<TuplifyUnion12591<Exclude<T, L>>, L>;

type DeepPartial12591<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12591<T[P]> }
  : T;

type Paths12591<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12591<K, Paths12591<T[K], Prev12591[D]>> : never }[keyof T]
  : never;

type Prev12591 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12591<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12591 {
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

type ConfigPaths12591 = Paths12591<NestedConfig12591>;

interface HeavyProps12591 {
  config: DeepPartial12591<NestedConfig12591>;
  path?: ConfigPaths12591;
}

const HeavyComponent12591 = memo(function HeavyComponent12591({ config }: HeavyProps12591) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12591) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12591 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12591: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12591.displayName = 'HeavyComponent12591';
export default HeavyComponent12591;
