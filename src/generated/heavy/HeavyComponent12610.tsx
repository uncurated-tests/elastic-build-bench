'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12610<T> = T extends (infer U)[]
  ? DeepReadonlyArray12610<U>
  : T extends object
  ? DeepReadonlyObject12610<T>
  : T;

interface DeepReadonlyArray12610<T> extends ReadonlyArray<DeepReadonly12610<T>> {}

type DeepReadonlyObject12610<T> = {
  readonly [P in keyof T]: DeepReadonly12610<T[P]>;
};

type UnionToIntersection12610<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12610<T> = UnionToIntersection12610<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12610<T extends unknown[], V> = [...T, V];

type TuplifyUnion12610<T, L = LastOf12610<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12610<TuplifyUnion12610<Exclude<T, L>>, L>;

type DeepPartial12610<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12610<T[P]> }
  : T;

type Paths12610<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12610<K, Paths12610<T[K], Prev12610[D]>> : never }[keyof T]
  : never;

type Prev12610 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12610<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12610 {
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

type ConfigPaths12610 = Paths12610<NestedConfig12610>;

interface HeavyProps12610 {
  config: DeepPartial12610<NestedConfig12610>;
  path?: ConfigPaths12610;
}

const HeavyComponent12610 = memo(function HeavyComponent12610({ config }: HeavyProps12610) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12610) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12610 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12610: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12610.displayName = 'HeavyComponent12610';
export default HeavyComponent12610;
