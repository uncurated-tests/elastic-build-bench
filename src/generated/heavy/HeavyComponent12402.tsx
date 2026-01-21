'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12402<T> = T extends (infer U)[]
  ? DeepReadonlyArray12402<U>
  : T extends object
  ? DeepReadonlyObject12402<T>
  : T;

interface DeepReadonlyArray12402<T> extends ReadonlyArray<DeepReadonly12402<T>> {}

type DeepReadonlyObject12402<T> = {
  readonly [P in keyof T]: DeepReadonly12402<T[P]>;
};

type UnionToIntersection12402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12402<T> = UnionToIntersection12402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12402<T extends unknown[], V> = [...T, V];

type TuplifyUnion12402<T, L = LastOf12402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12402<TuplifyUnion12402<Exclude<T, L>>, L>;

type DeepPartial12402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12402<T[P]> }
  : T;

type Paths12402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12402<K, Paths12402<T[K], Prev12402[D]>> : never }[keyof T]
  : never;

type Prev12402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12402 {
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

type ConfigPaths12402 = Paths12402<NestedConfig12402>;

interface HeavyProps12402 {
  config: DeepPartial12402<NestedConfig12402>;
  path?: ConfigPaths12402;
}

const HeavyComponent12402 = memo(function HeavyComponent12402({ config }: HeavyProps12402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12402.displayName = 'HeavyComponent12402';
export default HeavyComponent12402;
