'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12573<T> = T extends (infer U)[]
  ? DeepReadonlyArray12573<U>
  : T extends object
  ? DeepReadonlyObject12573<T>
  : T;

interface DeepReadonlyArray12573<T> extends ReadonlyArray<DeepReadonly12573<T>> {}

type DeepReadonlyObject12573<T> = {
  readonly [P in keyof T]: DeepReadonly12573<T[P]>;
};

type UnionToIntersection12573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12573<T> = UnionToIntersection12573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12573<T extends unknown[], V> = [...T, V];

type TuplifyUnion12573<T, L = LastOf12573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12573<TuplifyUnion12573<Exclude<T, L>>, L>;

type DeepPartial12573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12573<T[P]> }
  : T;

type Paths12573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12573<K, Paths12573<T[K], Prev12573[D]>> : never }[keyof T]
  : never;

type Prev12573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12573 {
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

type ConfigPaths12573 = Paths12573<NestedConfig12573>;

interface HeavyProps12573 {
  config: DeepPartial12573<NestedConfig12573>;
  path?: ConfigPaths12573;
}

const HeavyComponent12573 = memo(function HeavyComponent12573({ config }: HeavyProps12573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12573.displayName = 'HeavyComponent12573';
export default HeavyComponent12573;
