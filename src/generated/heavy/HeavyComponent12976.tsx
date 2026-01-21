'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12976<T> = T extends (infer U)[]
  ? DeepReadonlyArray12976<U>
  : T extends object
  ? DeepReadonlyObject12976<T>
  : T;

interface DeepReadonlyArray12976<T> extends ReadonlyArray<DeepReadonly12976<T>> {}

type DeepReadonlyObject12976<T> = {
  readonly [P in keyof T]: DeepReadonly12976<T[P]>;
};

type UnionToIntersection12976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12976<T> = UnionToIntersection12976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12976<T extends unknown[], V> = [...T, V];

type TuplifyUnion12976<T, L = LastOf12976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12976<TuplifyUnion12976<Exclude<T, L>>, L>;

type DeepPartial12976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12976<T[P]> }
  : T;

type Paths12976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12976<K, Paths12976<T[K], Prev12976[D]>> : never }[keyof T]
  : never;

type Prev12976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12976 {
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

type ConfigPaths12976 = Paths12976<NestedConfig12976>;

interface HeavyProps12976 {
  config: DeepPartial12976<NestedConfig12976>;
  path?: ConfigPaths12976;
}

const HeavyComponent12976 = memo(function HeavyComponent12976({ config }: HeavyProps12976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12976.displayName = 'HeavyComponent12976';
export default HeavyComponent12976;
