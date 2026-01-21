'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12699<T> = T extends (infer U)[]
  ? DeepReadonlyArray12699<U>
  : T extends object
  ? DeepReadonlyObject12699<T>
  : T;

interface DeepReadonlyArray12699<T> extends ReadonlyArray<DeepReadonly12699<T>> {}

type DeepReadonlyObject12699<T> = {
  readonly [P in keyof T]: DeepReadonly12699<T[P]>;
};

type UnionToIntersection12699<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12699<T> = UnionToIntersection12699<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12699<T extends unknown[], V> = [...T, V];

type TuplifyUnion12699<T, L = LastOf12699<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12699<TuplifyUnion12699<Exclude<T, L>>, L>;

type DeepPartial12699<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12699<T[P]> }
  : T;

type Paths12699<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12699<K, Paths12699<T[K], Prev12699[D]>> : never }[keyof T]
  : never;

type Prev12699 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12699<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12699 {
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

type ConfigPaths12699 = Paths12699<NestedConfig12699>;

interface HeavyProps12699 {
  config: DeepPartial12699<NestedConfig12699>;
  path?: ConfigPaths12699;
}

const HeavyComponent12699 = memo(function HeavyComponent12699({ config }: HeavyProps12699) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12699) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12699 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12699: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12699.displayName = 'HeavyComponent12699';
export default HeavyComponent12699;
