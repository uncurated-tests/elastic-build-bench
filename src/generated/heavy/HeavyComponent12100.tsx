'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12100<T> = T extends (infer U)[]
  ? DeepReadonlyArray12100<U>
  : T extends object
  ? DeepReadonlyObject12100<T>
  : T;

interface DeepReadonlyArray12100<T> extends ReadonlyArray<DeepReadonly12100<T>> {}

type DeepReadonlyObject12100<T> = {
  readonly [P in keyof T]: DeepReadonly12100<T[P]>;
};

type UnionToIntersection12100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12100<T> = UnionToIntersection12100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12100<T extends unknown[], V> = [...T, V];

type TuplifyUnion12100<T, L = LastOf12100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12100<TuplifyUnion12100<Exclude<T, L>>, L>;

type DeepPartial12100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12100<T[P]> }
  : T;

type Paths12100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12100<K, Paths12100<T[K], Prev12100[D]>> : never }[keyof T]
  : never;

type Prev12100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12100 {
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

type ConfigPaths12100 = Paths12100<NestedConfig12100>;

interface HeavyProps12100 {
  config: DeepPartial12100<NestedConfig12100>;
  path?: ConfigPaths12100;
}

const HeavyComponent12100 = memo(function HeavyComponent12100({ config }: HeavyProps12100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12100.displayName = 'HeavyComponent12100';
export default HeavyComponent12100;
