'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12781<T> = T extends (infer U)[]
  ? DeepReadonlyArray12781<U>
  : T extends object
  ? DeepReadonlyObject12781<T>
  : T;

interface DeepReadonlyArray12781<T> extends ReadonlyArray<DeepReadonly12781<T>> {}

type DeepReadonlyObject12781<T> = {
  readonly [P in keyof T]: DeepReadonly12781<T[P]>;
};

type UnionToIntersection12781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12781<T> = UnionToIntersection12781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12781<T extends unknown[], V> = [...T, V];

type TuplifyUnion12781<T, L = LastOf12781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12781<TuplifyUnion12781<Exclude<T, L>>, L>;

type DeepPartial12781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12781<T[P]> }
  : T;

type Paths12781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12781<K, Paths12781<T[K], Prev12781[D]>> : never }[keyof T]
  : never;

type Prev12781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12781 {
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

type ConfigPaths12781 = Paths12781<NestedConfig12781>;

interface HeavyProps12781 {
  config: DeepPartial12781<NestedConfig12781>;
  path?: ConfigPaths12781;
}

const HeavyComponent12781 = memo(function HeavyComponent12781({ config }: HeavyProps12781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12781.displayName = 'HeavyComponent12781';
export default HeavyComponent12781;
