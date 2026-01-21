'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly772<T> = T extends (infer U)[]
  ? DeepReadonlyArray772<U>
  : T extends object
  ? DeepReadonlyObject772<T>
  : T;

interface DeepReadonlyArray772<T> extends ReadonlyArray<DeepReadonly772<T>> {}

type DeepReadonlyObject772<T> = {
  readonly [P in keyof T]: DeepReadonly772<T[P]>;
};

type UnionToIntersection772<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf772<T> = UnionToIntersection772<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push772<T extends unknown[], V> = [...T, V];

type TuplifyUnion772<T, L = LastOf772<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push772<TuplifyUnion772<Exclude<T, L>>, L>;

type DeepPartial772<T> = T extends object
  ? { [P in keyof T]?: DeepPartial772<T[P]> }
  : T;

type Paths772<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join772<K, Paths772<T[K], Prev772[D]>> : never }[keyof T]
  : never;

type Prev772 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join772<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig772 {
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

type ConfigPaths772 = Paths772<NestedConfig772>;

interface HeavyProps772 {
  config: DeepPartial772<NestedConfig772>;
  path?: ConfigPaths772;
}

const HeavyComponent772 = memo(function HeavyComponent772({ config }: HeavyProps772) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 772) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-772 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H772: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent772.displayName = 'HeavyComponent772';
export default HeavyComponent772;
