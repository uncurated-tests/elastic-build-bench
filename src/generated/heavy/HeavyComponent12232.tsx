'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12232<T> = T extends (infer U)[]
  ? DeepReadonlyArray12232<U>
  : T extends object
  ? DeepReadonlyObject12232<T>
  : T;

interface DeepReadonlyArray12232<T> extends ReadonlyArray<DeepReadonly12232<T>> {}

type DeepReadonlyObject12232<T> = {
  readonly [P in keyof T]: DeepReadonly12232<T[P]>;
};

type UnionToIntersection12232<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12232<T> = UnionToIntersection12232<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12232<T extends unknown[], V> = [...T, V];

type TuplifyUnion12232<T, L = LastOf12232<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12232<TuplifyUnion12232<Exclude<T, L>>, L>;

type DeepPartial12232<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12232<T[P]> }
  : T;

type Paths12232<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12232<K, Paths12232<T[K], Prev12232[D]>> : never }[keyof T]
  : never;

type Prev12232 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12232<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12232 {
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

type ConfigPaths12232 = Paths12232<NestedConfig12232>;

interface HeavyProps12232 {
  config: DeepPartial12232<NestedConfig12232>;
  path?: ConfigPaths12232;
}

const HeavyComponent12232 = memo(function HeavyComponent12232({ config }: HeavyProps12232) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12232) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12232 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12232: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12232.displayName = 'HeavyComponent12232';
export default HeavyComponent12232;
