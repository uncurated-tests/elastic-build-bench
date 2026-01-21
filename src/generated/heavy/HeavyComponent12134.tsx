'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12134<T> = T extends (infer U)[]
  ? DeepReadonlyArray12134<U>
  : T extends object
  ? DeepReadonlyObject12134<T>
  : T;

interface DeepReadonlyArray12134<T> extends ReadonlyArray<DeepReadonly12134<T>> {}

type DeepReadonlyObject12134<T> = {
  readonly [P in keyof T]: DeepReadonly12134<T[P]>;
};

type UnionToIntersection12134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12134<T> = UnionToIntersection12134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12134<T extends unknown[], V> = [...T, V];

type TuplifyUnion12134<T, L = LastOf12134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12134<TuplifyUnion12134<Exclude<T, L>>, L>;

type DeepPartial12134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12134<T[P]> }
  : T;

type Paths12134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12134<K, Paths12134<T[K], Prev12134[D]>> : never }[keyof T]
  : never;

type Prev12134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12134 {
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

type ConfigPaths12134 = Paths12134<NestedConfig12134>;

interface HeavyProps12134 {
  config: DeepPartial12134<NestedConfig12134>;
  path?: ConfigPaths12134;
}

const HeavyComponent12134 = memo(function HeavyComponent12134({ config }: HeavyProps12134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12134.displayName = 'HeavyComponent12134';
export default HeavyComponent12134;
