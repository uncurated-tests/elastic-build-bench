'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12407<T> = T extends (infer U)[]
  ? DeepReadonlyArray12407<U>
  : T extends object
  ? DeepReadonlyObject12407<T>
  : T;

interface DeepReadonlyArray12407<T> extends ReadonlyArray<DeepReadonly12407<T>> {}

type DeepReadonlyObject12407<T> = {
  readonly [P in keyof T]: DeepReadonly12407<T[P]>;
};

type UnionToIntersection12407<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12407<T> = UnionToIntersection12407<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12407<T extends unknown[], V> = [...T, V];

type TuplifyUnion12407<T, L = LastOf12407<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12407<TuplifyUnion12407<Exclude<T, L>>, L>;

type DeepPartial12407<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12407<T[P]> }
  : T;

type Paths12407<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12407<K, Paths12407<T[K], Prev12407[D]>> : never }[keyof T]
  : never;

type Prev12407 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12407<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12407 {
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

type ConfigPaths12407 = Paths12407<NestedConfig12407>;

interface HeavyProps12407 {
  config: DeepPartial12407<NestedConfig12407>;
  path?: ConfigPaths12407;
}

const HeavyComponent12407 = memo(function HeavyComponent12407({ config }: HeavyProps12407) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12407) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12407 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12407: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12407.displayName = 'HeavyComponent12407';
export default HeavyComponent12407;
