'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12563<T> = T extends (infer U)[]
  ? DeepReadonlyArray12563<U>
  : T extends object
  ? DeepReadonlyObject12563<T>
  : T;

interface DeepReadonlyArray12563<T> extends ReadonlyArray<DeepReadonly12563<T>> {}

type DeepReadonlyObject12563<T> = {
  readonly [P in keyof T]: DeepReadonly12563<T[P]>;
};

type UnionToIntersection12563<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12563<T> = UnionToIntersection12563<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12563<T extends unknown[], V> = [...T, V];

type TuplifyUnion12563<T, L = LastOf12563<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12563<TuplifyUnion12563<Exclude<T, L>>, L>;

type DeepPartial12563<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12563<T[P]> }
  : T;

type Paths12563<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12563<K, Paths12563<T[K], Prev12563[D]>> : never }[keyof T]
  : never;

type Prev12563 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12563<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12563 {
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

type ConfigPaths12563 = Paths12563<NestedConfig12563>;

interface HeavyProps12563 {
  config: DeepPartial12563<NestedConfig12563>;
  path?: ConfigPaths12563;
}

const HeavyComponent12563 = memo(function HeavyComponent12563({ config }: HeavyProps12563) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12563) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12563 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12563: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12563.displayName = 'HeavyComponent12563';
export default HeavyComponent12563;
