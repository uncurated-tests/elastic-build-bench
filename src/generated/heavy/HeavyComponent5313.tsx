'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5313<T> = T extends (infer U)[]
  ? DeepReadonlyArray5313<U>
  : T extends object
  ? DeepReadonlyObject5313<T>
  : T;

interface DeepReadonlyArray5313<T> extends ReadonlyArray<DeepReadonly5313<T>> {}

type DeepReadonlyObject5313<T> = {
  readonly [P in keyof T]: DeepReadonly5313<T[P]>;
};

type UnionToIntersection5313<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5313<T> = UnionToIntersection5313<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5313<T extends unknown[], V> = [...T, V];

type TuplifyUnion5313<T, L = LastOf5313<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5313<TuplifyUnion5313<Exclude<T, L>>, L>;

type DeepPartial5313<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5313<T[P]> }
  : T;

type Paths5313<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5313<K, Paths5313<T[K], Prev5313[D]>> : never }[keyof T]
  : never;

type Prev5313 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5313<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5313 {
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

type ConfigPaths5313 = Paths5313<NestedConfig5313>;

interface HeavyProps5313 {
  config: DeepPartial5313<NestedConfig5313>;
  path?: ConfigPaths5313;
}

const HeavyComponent5313 = memo(function HeavyComponent5313({ config }: HeavyProps5313) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5313) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5313 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5313: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5313.displayName = 'HeavyComponent5313';
export default HeavyComponent5313;
