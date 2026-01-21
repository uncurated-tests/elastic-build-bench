'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12948<T> = T extends (infer U)[]
  ? DeepReadonlyArray12948<U>
  : T extends object
  ? DeepReadonlyObject12948<T>
  : T;

interface DeepReadonlyArray12948<T> extends ReadonlyArray<DeepReadonly12948<T>> {}

type DeepReadonlyObject12948<T> = {
  readonly [P in keyof T]: DeepReadonly12948<T[P]>;
};

type UnionToIntersection12948<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12948<T> = UnionToIntersection12948<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12948<T extends unknown[], V> = [...T, V];

type TuplifyUnion12948<T, L = LastOf12948<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12948<TuplifyUnion12948<Exclude<T, L>>, L>;

type DeepPartial12948<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12948<T[P]> }
  : T;

type Paths12948<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12948<K, Paths12948<T[K], Prev12948[D]>> : never }[keyof T]
  : never;

type Prev12948 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12948<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12948 {
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

type ConfigPaths12948 = Paths12948<NestedConfig12948>;

interface HeavyProps12948 {
  config: DeepPartial12948<NestedConfig12948>;
  path?: ConfigPaths12948;
}

const HeavyComponent12948 = memo(function HeavyComponent12948({ config }: HeavyProps12948) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12948) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12948 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12948: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12948.displayName = 'HeavyComponent12948';
export default HeavyComponent12948;
