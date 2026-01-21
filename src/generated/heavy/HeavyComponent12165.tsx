'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12165<T> = T extends (infer U)[]
  ? DeepReadonlyArray12165<U>
  : T extends object
  ? DeepReadonlyObject12165<T>
  : T;

interface DeepReadonlyArray12165<T> extends ReadonlyArray<DeepReadonly12165<T>> {}

type DeepReadonlyObject12165<T> = {
  readonly [P in keyof T]: DeepReadonly12165<T[P]>;
};

type UnionToIntersection12165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12165<T> = UnionToIntersection12165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12165<T extends unknown[], V> = [...T, V];

type TuplifyUnion12165<T, L = LastOf12165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12165<TuplifyUnion12165<Exclude<T, L>>, L>;

type DeepPartial12165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12165<T[P]> }
  : T;

type Paths12165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12165<K, Paths12165<T[K], Prev12165[D]>> : never }[keyof T]
  : never;

type Prev12165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12165 {
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

type ConfigPaths12165 = Paths12165<NestedConfig12165>;

interface HeavyProps12165 {
  config: DeepPartial12165<NestedConfig12165>;
  path?: ConfigPaths12165;
}

const HeavyComponent12165 = memo(function HeavyComponent12165({ config }: HeavyProps12165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12165.displayName = 'HeavyComponent12165';
export default HeavyComponent12165;
