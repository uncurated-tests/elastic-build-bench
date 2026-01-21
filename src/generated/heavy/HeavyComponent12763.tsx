'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12763<T> = T extends (infer U)[]
  ? DeepReadonlyArray12763<U>
  : T extends object
  ? DeepReadonlyObject12763<T>
  : T;

interface DeepReadonlyArray12763<T> extends ReadonlyArray<DeepReadonly12763<T>> {}

type DeepReadonlyObject12763<T> = {
  readonly [P in keyof T]: DeepReadonly12763<T[P]>;
};

type UnionToIntersection12763<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12763<T> = UnionToIntersection12763<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12763<T extends unknown[], V> = [...T, V];

type TuplifyUnion12763<T, L = LastOf12763<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12763<TuplifyUnion12763<Exclude<T, L>>, L>;

type DeepPartial12763<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12763<T[P]> }
  : T;

type Paths12763<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12763<K, Paths12763<T[K], Prev12763[D]>> : never }[keyof T]
  : never;

type Prev12763 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12763<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12763 {
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

type ConfigPaths12763 = Paths12763<NestedConfig12763>;

interface HeavyProps12763 {
  config: DeepPartial12763<NestedConfig12763>;
  path?: ConfigPaths12763;
}

const HeavyComponent12763 = memo(function HeavyComponent12763({ config }: HeavyProps12763) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12763) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12763 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12763: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12763.displayName = 'HeavyComponent12763';
export default HeavyComponent12763;
