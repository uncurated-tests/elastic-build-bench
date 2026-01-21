'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12404<T> = T extends (infer U)[]
  ? DeepReadonlyArray12404<U>
  : T extends object
  ? DeepReadonlyObject12404<T>
  : T;

interface DeepReadonlyArray12404<T> extends ReadonlyArray<DeepReadonly12404<T>> {}

type DeepReadonlyObject12404<T> = {
  readonly [P in keyof T]: DeepReadonly12404<T[P]>;
};

type UnionToIntersection12404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12404<T> = UnionToIntersection12404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12404<T extends unknown[], V> = [...T, V];

type TuplifyUnion12404<T, L = LastOf12404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12404<TuplifyUnion12404<Exclude<T, L>>, L>;

type DeepPartial12404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12404<T[P]> }
  : T;

type Paths12404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12404<K, Paths12404<T[K], Prev12404[D]>> : never }[keyof T]
  : never;

type Prev12404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12404 {
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

type ConfigPaths12404 = Paths12404<NestedConfig12404>;

interface HeavyProps12404 {
  config: DeepPartial12404<NestedConfig12404>;
  path?: ConfigPaths12404;
}

const HeavyComponent12404 = memo(function HeavyComponent12404({ config }: HeavyProps12404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12404.displayName = 'HeavyComponent12404';
export default HeavyComponent12404;
