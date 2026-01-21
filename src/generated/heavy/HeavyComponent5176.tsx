'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5176<T> = T extends (infer U)[]
  ? DeepReadonlyArray5176<U>
  : T extends object
  ? DeepReadonlyObject5176<T>
  : T;

interface DeepReadonlyArray5176<T> extends ReadonlyArray<DeepReadonly5176<T>> {}

type DeepReadonlyObject5176<T> = {
  readonly [P in keyof T]: DeepReadonly5176<T[P]>;
};

type UnionToIntersection5176<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5176<T> = UnionToIntersection5176<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5176<T extends unknown[], V> = [...T, V];

type TuplifyUnion5176<T, L = LastOf5176<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5176<TuplifyUnion5176<Exclude<T, L>>, L>;

type DeepPartial5176<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5176<T[P]> }
  : T;

type Paths5176<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5176<K, Paths5176<T[K], Prev5176[D]>> : never }[keyof T]
  : never;

type Prev5176 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5176<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5176 {
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

type ConfigPaths5176 = Paths5176<NestedConfig5176>;

interface HeavyProps5176 {
  config: DeepPartial5176<NestedConfig5176>;
  path?: ConfigPaths5176;
}

const HeavyComponent5176 = memo(function HeavyComponent5176({ config }: HeavyProps5176) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5176) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5176 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5176: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5176.displayName = 'HeavyComponent5176';
export default HeavyComponent5176;
