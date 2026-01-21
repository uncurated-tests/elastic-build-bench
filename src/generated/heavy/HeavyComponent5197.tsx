'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5197<T> = T extends (infer U)[]
  ? DeepReadonlyArray5197<U>
  : T extends object
  ? DeepReadonlyObject5197<T>
  : T;

interface DeepReadonlyArray5197<T> extends ReadonlyArray<DeepReadonly5197<T>> {}

type DeepReadonlyObject5197<T> = {
  readonly [P in keyof T]: DeepReadonly5197<T[P]>;
};

type UnionToIntersection5197<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5197<T> = UnionToIntersection5197<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5197<T extends unknown[], V> = [...T, V];

type TuplifyUnion5197<T, L = LastOf5197<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5197<TuplifyUnion5197<Exclude<T, L>>, L>;

type DeepPartial5197<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5197<T[P]> }
  : T;

type Paths5197<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5197<K, Paths5197<T[K], Prev5197[D]>> : never }[keyof T]
  : never;

type Prev5197 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5197<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5197 {
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

type ConfigPaths5197 = Paths5197<NestedConfig5197>;

interface HeavyProps5197 {
  config: DeepPartial5197<NestedConfig5197>;
  path?: ConfigPaths5197;
}

const HeavyComponent5197 = memo(function HeavyComponent5197({ config }: HeavyProps5197) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5197) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5197 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5197: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5197.displayName = 'HeavyComponent5197';
export default HeavyComponent5197;
