'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12056<T> = T extends (infer U)[]
  ? DeepReadonlyArray12056<U>
  : T extends object
  ? DeepReadonlyObject12056<T>
  : T;

interface DeepReadonlyArray12056<T> extends ReadonlyArray<DeepReadonly12056<T>> {}

type DeepReadonlyObject12056<T> = {
  readonly [P in keyof T]: DeepReadonly12056<T[P]>;
};

type UnionToIntersection12056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12056<T> = UnionToIntersection12056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12056<T extends unknown[], V> = [...T, V];

type TuplifyUnion12056<T, L = LastOf12056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12056<TuplifyUnion12056<Exclude<T, L>>, L>;

type DeepPartial12056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12056<T[P]> }
  : T;

type Paths12056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12056<K, Paths12056<T[K], Prev12056[D]>> : never }[keyof T]
  : never;

type Prev12056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12056 {
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

type ConfigPaths12056 = Paths12056<NestedConfig12056>;

interface HeavyProps12056 {
  config: DeepPartial12056<NestedConfig12056>;
  path?: ConfigPaths12056;
}

const HeavyComponent12056 = memo(function HeavyComponent12056({ config }: HeavyProps12056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12056.displayName = 'HeavyComponent12056';
export default HeavyComponent12056;
