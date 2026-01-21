'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12117<T> = T extends (infer U)[]
  ? DeepReadonlyArray12117<U>
  : T extends object
  ? DeepReadonlyObject12117<T>
  : T;

interface DeepReadonlyArray12117<T> extends ReadonlyArray<DeepReadonly12117<T>> {}

type DeepReadonlyObject12117<T> = {
  readonly [P in keyof T]: DeepReadonly12117<T[P]>;
};

type UnionToIntersection12117<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12117<T> = UnionToIntersection12117<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12117<T extends unknown[], V> = [...T, V];

type TuplifyUnion12117<T, L = LastOf12117<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12117<TuplifyUnion12117<Exclude<T, L>>, L>;

type DeepPartial12117<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12117<T[P]> }
  : T;

type Paths12117<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12117<K, Paths12117<T[K], Prev12117[D]>> : never }[keyof T]
  : never;

type Prev12117 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12117<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12117 {
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

type ConfigPaths12117 = Paths12117<NestedConfig12117>;

interface HeavyProps12117 {
  config: DeepPartial12117<NestedConfig12117>;
  path?: ConfigPaths12117;
}

const HeavyComponent12117 = memo(function HeavyComponent12117({ config }: HeavyProps12117) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12117) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12117 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12117: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12117.displayName = 'HeavyComponent12117';
export default HeavyComponent12117;
