'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12098<T> = T extends (infer U)[]
  ? DeepReadonlyArray12098<U>
  : T extends object
  ? DeepReadonlyObject12098<T>
  : T;

interface DeepReadonlyArray12098<T> extends ReadonlyArray<DeepReadonly12098<T>> {}

type DeepReadonlyObject12098<T> = {
  readonly [P in keyof T]: DeepReadonly12098<T[P]>;
};

type UnionToIntersection12098<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12098<T> = UnionToIntersection12098<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12098<T extends unknown[], V> = [...T, V];

type TuplifyUnion12098<T, L = LastOf12098<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12098<TuplifyUnion12098<Exclude<T, L>>, L>;

type DeepPartial12098<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12098<T[P]> }
  : T;

type Paths12098<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12098<K, Paths12098<T[K], Prev12098[D]>> : never }[keyof T]
  : never;

type Prev12098 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12098<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12098 {
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

type ConfigPaths12098 = Paths12098<NestedConfig12098>;

interface HeavyProps12098 {
  config: DeepPartial12098<NestedConfig12098>;
  path?: ConfigPaths12098;
}

const HeavyComponent12098 = memo(function HeavyComponent12098({ config }: HeavyProps12098) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12098) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12098 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12098: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12098.displayName = 'HeavyComponent12098';
export default HeavyComponent12098;
