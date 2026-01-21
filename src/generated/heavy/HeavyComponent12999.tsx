'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12999<T> = T extends (infer U)[]
  ? DeepReadonlyArray12999<U>
  : T extends object
  ? DeepReadonlyObject12999<T>
  : T;

interface DeepReadonlyArray12999<T> extends ReadonlyArray<DeepReadonly12999<T>> {}

type DeepReadonlyObject12999<T> = {
  readonly [P in keyof T]: DeepReadonly12999<T[P]>;
};

type UnionToIntersection12999<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12999<T> = UnionToIntersection12999<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12999<T extends unknown[], V> = [...T, V];

type TuplifyUnion12999<T, L = LastOf12999<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12999<TuplifyUnion12999<Exclude<T, L>>, L>;

type DeepPartial12999<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12999<T[P]> }
  : T;

type Paths12999<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12999<K, Paths12999<T[K], Prev12999[D]>> : never }[keyof T]
  : never;

type Prev12999 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12999<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12999 {
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

type ConfigPaths12999 = Paths12999<NestedConfig12999>;

interface HeavyProps12999 {
  config: DeepPartial12999<NestedConfig12999>;
  path?: ConfigPaths12999;
}

const HeavyComponent12999 = memo(function HeavyComponent12999({ config }: HeavyProps12999) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12999) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12999 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12999: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12999.displayName = 'HeavyComponent12999';
export default HeavyComponent12999;
