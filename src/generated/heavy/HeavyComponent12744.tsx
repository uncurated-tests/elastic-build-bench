'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12744<T> = T extends (infer U)[]
  ? DeepReadonlyArray12744<U>
  : T extends object
  ? DeepReadonlyObject12744<T>
  : T;

interface DeepReadonlyArray12744<T> extends ReadonlyArray<DeepReadonly12744<T>> {}

type DeepReadonlyObject12744<T> = {
  readonly [P in keyof T]: DeepReadonly12744<T[P]>;
};

type UnionToIntersection12744<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12744<T> = UnionToIntersection12744<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12744<T extends unknown[], V> = [...T, V];

type TuplifyUnion12744<T, L = LastOf12744<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12744<TuplifyUnion12744<Exclude<T, L>>, L>;

type DeepPartial12744<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12744<T[P]> }
  : T;

type Paths12744<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12744<K, Paths12744<T[K], Prev12744[D]>> : never }[keyof T]
  : never;

type Prev12744 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12744<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12744 {
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

type ConfigPaths12744 = Paths12744<NestedConfig12744>;

interface HeavyProps12744 {
  config: DeepPartial12744<NestedConfig12744>;
  path?: ConfigPaths12744;
}

const HeavyComponent12744 = memo(function HeavyComponent12744({ config }: HeavyProps12744) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12744) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12744 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12744: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12744.displayName = 'HeavyComponent12744';
export default HeavyComponent12744;
