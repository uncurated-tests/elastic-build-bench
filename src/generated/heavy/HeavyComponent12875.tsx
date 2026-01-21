'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12875<T> = T extends (infer U)[]
  ? DeepReadonlyArray12875<U>
  : T extends object
  ? DeepReadonlyObject12875<T>
  : T;

interface DeepReadonlyArray12875<T> extends ReadonlyArray<DeepReadonly12875<T>> {}

type DeepReadonlyObject12875<T> = {
  readonly [P in keyof T]: DeepReadonly12875<T[P]>;
};

type UnionToIntersection12875<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12875<T> = UnionToIntersection12875<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12875<T extends unknown[], V> = [...T, V];

type TuplifyUnion12875<T, L = LastOf12875<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12875<TuplifyUnion12875<Exclude<T, L>>, L>;

type DeepPartial12875<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12875<T[P]> }
  : T;

type Paths12875<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12875<K, Paths12875<T[K], Prev12875[D]>> : never }[keyof T]
  : never;

type Prev12875 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12875<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12875 {
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

type ConfigPaths12875 = Paths12875<NestedConfig12875>;

interface HeavyProps12875 {
  config: DeepPartial12875<NestedConfig12875>;
  path?: ConfigPaths12875;
}

const HeavyComponent12875 = memo(function HeavyComponent12875({ config }: HeavyProps12875) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12875) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12875 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12875: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12875.displayName = 'HeavyComponent12875';
export default HeavyComponent12875;
