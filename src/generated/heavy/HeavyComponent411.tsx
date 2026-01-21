'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly411<T> = T extends (infer U)[]
  ? DeepReadonlyArray411<U>
  : T extends object
  ? DeepReadonlyObject411<T>
  : T;

interface DeepReadonlyArray411<T> extends ReadonlyArray<DeepReadonly411<T>> {}

type DeepReadonlyObject411<T> = {
  readonly [P in keyof T]: DeepReadonly411<T[P]>;
};

type UnionToIntersection411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf411<T> = UnionToIntersection411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push411<T extends unknown[], V> = [...T, V];

type TuplifyUnion411<T, L = LastOf411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push411<TuplifyUnion411<Exclude<T, L>>, L>;

type DeepPartial411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial411<T[P]> }
  : T;

type Paths411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join411<K, Paths411<T[K], Prev411[D]>> : never }[keyof T]
  : never;

type Prev411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig411 {
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

type ConfigPaths411 = Paths411<NestedConfig411>;

interface HeavyProps411 {
  config: DeepPartial411<NestedConfig411>;
  path?: ConfigPaths411;
}

const HeavyComponent411 = memo(function HeavyComponent411({ config }: HeavyProps411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent411.displayName = 'HeavyComponent411';
export default HeavyComponent411;
