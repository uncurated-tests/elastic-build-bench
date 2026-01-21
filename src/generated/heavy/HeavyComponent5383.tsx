'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5383<T> = T extends (infer U)[]
  ? DeepReadonlyArray5383<U>
  : T extends object
  ? DeepReadonlyObject5383<T>
  : T;

interface DeepReadonlyArray5383<T> extends ReadonlyArray<DeepReadonly5383<T>> {}

type DeepReadonlyObject5383<T> = {
  readonly [P in keyof T]: DeepReadonly5383<T[P]>;
};

type UnionToIntersection5383<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5383<T> = UnionToIntersection5383<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5383<T extends unknown[], V> = [...T, V];

type TuplifyUnion5383<T, L = LastOf5383<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5383<TuplifyUnion5383<Exclude<T, L>>, L>;

type DeepPartial5383<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5383<T[P]> }
  : T;

type Paths5383<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5383<K, Paths5383<T[K], Prev5383[D]>> : never }[keyof T]
  : never;

type Prev5383 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5383<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5383 {
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

type ConfigPaths5383 = Paths5383<NestedConfig5383>;

interface HeavyProps5383 {
  config: DeepPartial5383<NestedConfig5383>;
  path?: ConfigPaths5383;
}

const HeavyComponent5383 = memo(function HeavyComponent5383({ config }: HeavyProps5383) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5383) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5383 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5383: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5383.displayName = 'HeavyComponent5383';
export default HeavyComponent5383;
