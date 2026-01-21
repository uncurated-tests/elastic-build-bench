'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12570<T> = T extends (infer U)[]
  ? DeepReadonlyArray12570<U>
  : T extends object
  ? DeepReadonlyObject12570<T>
  : T;

interface DeepReadonlyArray12570<T> extends ReadonlyArray<DeepReadonly12570<T>> {}

type DeepReadonlyObject12570<T> = {
  readonly [P in keyof T]: DeepReadonly12570<T[P]>;
};

type UnionToIntersection12570<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12570<T> = UnionToIntersection12570<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12570<T extends unknown[], V> = [...T, V];

type TuplifyUnion12570<T, L = LastOf12570<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12570<TuplifyUnion12570<Exclude<T, L>>, L>;

type DeepPartial12570<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12570<T[P]> }
  : T;

type Paths12570<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12570<K, Paths12570<T[K], Prev12570[D]>> : never }[keyof T]
  : never;

type Prev12570 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12570<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12570 {
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

type ConfigPaths12570 = Paths12570<NestedConfig12570>;

interface HeavyProps12570 {
  config: DeepPartial12570<NestedConfig12570>;
  path?: ConfigPaths12570;
}

const HeavyComponent12570 = memo(function HeavyComponent12570({ config }: HeavyProps12570) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12570) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12570 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12570: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12570.displayName = 'HeavyComponent12570';
export default HeavyComponent12570;
