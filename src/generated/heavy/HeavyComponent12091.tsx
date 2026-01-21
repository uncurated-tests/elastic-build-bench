'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12091<T> = T extends (infer U)[]
  ? DeepReadonlyArray12091<U>
  : T extends object
  ? DeepReadonlyObject12091<T>
  : T;

interface DeepReadonlyArray12091<T> extends ReadonlyArray<DeepReadonly12091<T>> {}

type DeepReadonlyObject12091<T> = {
  readonly [P in keyof T]: DeepReadonly12091<T[P]>;
};

type UnionToIntersection12091<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12091<T> = UnionToIntersection12091<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12091<T extends unknown[], V> = [...T, V];

type TuplifyUnion12091<T, L = LastOf12091<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12091<TuplifyUnion12091<Exclude<T, L>>, L>;

type DeepPartial12091<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12091<T[P]> }
  : T;

type Paths12091<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12091<K, Paths12091<T[K], Prev12091[D]>> : never }[keyof T]
  : never;

type Prev12091 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12091<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12091 {
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

type ConfigPaths12091 = Paths12091<NestedConfig12091>;

interface HeavyProps12091 {
  config: DeepPartial12091<NestedConfig12091>;
  path?: ConfigPaths12091;
}

const HeavyComponent12091 = memo(function HeavyComponent12091({ config }: HeavyProps12091) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12091) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12091 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12091: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12091.displayName = 'HeavyComponent12091';
export default HeavyComponent12091;
