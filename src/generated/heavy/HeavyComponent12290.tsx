'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12290<T> = T extends (infer U)[]
  ? DeepReadonlyArray12290<U>
  : T extends object
  ? DeepReadonlyObject12290<T>
  : T;

interface DeepReadonlyArray12290<T> extends ReadonlyArray<DeepReadonly12290<T>> {}

type DeepReadonlyObject12290<T> = {
  readonly [P in keyof T]: DeepReadonly12290<T[P]>;
};

type UnionToIntersection12290<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12290<T> = UnionToIntersection12290<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12290<T extends unknown[], V> = [...T, V];

type TuplifyUnion12290<T, L = LastOf12290<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12290<TuplifyUnion12290<Exclude<T, L>>, L>;

type DeepPartial12290<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12290<T[P]> }
  : T;

type Paths12290<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12290<K, Paths12290<T[K], Prev12290[D]>> : never }[keyof T]
  : never;

type Prev12290 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12290<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12290 {
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

type ConfigPaths12290 = Paths12290<NestedConfig12290>;

interface HeavyProps12290 {
  config: DeepPartial12290<NestedConfig12290>;
  path?: ConfigPaths12290;
}

const HeavyComponent12290 = memo(function HeavyComponent12290({ config }: HeavyProps12290) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12290) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12290 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12290: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12290.displayName = 'HeavyComponent12290';
export default HeavyComponent12290;
