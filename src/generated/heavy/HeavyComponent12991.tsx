'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12991<T> = T extends (infer U)[]
  ? DeepReadonlyArray12991<U>
  : T extends object
  ? DeepReadonlyObject12991<T>
  : T;

interface DeepReadonlyArray12991<T> extends ReadonlyArray<DeepReadonly12991<T>> {}

type DeepReadonlyObject12991<T> = {
  readonly [P in keyof T]: DeepReadonly12991<T[P]>;
};

type UnionToIntersection12991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12991<T> = UnionToIntersection12991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12991<T extends unknown[], V> = [...T, V];

type TuplifyUnion12991<T, L = LastOf12991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12991<TuplifyUnion12991<Exclude<T, L>>, L>;

type DeepPartial12991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12991<T[P]> }
  : T;

type Paths12991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12991<K, Paths12991<T[K], Prev12991[D]>> : never }[keyof T]
  : never;

type Prev12991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12991 {
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

type ConfigPaths12991 = Paths12991<NestedConfig12991>;

interface HeavyProps12991 {
  config: DeepPartial12991<NestedConfig12991>;
  path?: ConfigPaths12991;
}

const HeavyComponent12991 = memo(function HeavyComponent12991({ config }: HeavyProps12991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12991.displayName = 'HeavyComponent12991';
export default HeavyComponent12991;
