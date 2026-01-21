'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12416<T> = T extends (infer U)[]
  ? DeepReadonlyArray12416<U>
  : T extends object
  ? DeepReadonlyObject12416<T>
  : T;

interface DeepReadonlyArray12416<T> extends ReadonlyArray<DeepReadonly12416<T>> {}

type DeepReadonlyObject12416<T> = {
  readonly [P in keyof T]: DeepReadonly12416<T[P]>;
};

type UnionToIntersection12416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12416<T> = UnionToIntersection12416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12416<T extends unknown[], V> = [...T, V];

type TuplifyUnion12416<T, L = LastOf12416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12416<TuplifyUnion12416<Exclude<T, L>>, L>;

type DeepPartial12416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12416<T[P]> }
  : T;

type Paths12416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12416<K, Paths12416<T[K], Prev12416[D]>> : never }[keyof T]
  : never;

type Prev12416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12416 {
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

type ConfigPaths12416 = Paths12416<NestedConfig12416>;

interface HeavyProps12416 {
  config: DeepPartial12416<NestedConfig12416>;
  path?: ConfigPaths12416;
}

const HeavyComponent12416 = memo(function HeavyComponent12416({ config }: HeavyProps12416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12416.displayName = 'HeavyComponent12416';
export default HeavyComponent12416;
