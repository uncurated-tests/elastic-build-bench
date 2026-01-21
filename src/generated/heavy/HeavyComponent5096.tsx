'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5096<T> = T extends (infer U)[]
  ? DeepReadonlyArray5096<U>
  : T extends object
  ? DeepReadonlyObject5096<T>
  : T;

interface DeepReadonlyArray5096<T> extends ReadonlyArray<DeepReadonly5096<T>> {}

type DeepReadonlyObject5096<T> = {
  readonly [P in keyof T]: DeepReadonly5096<T[P]>;
};

type UnionToIntersection5096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5096<T> = UnionToIntersection5096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5096<T extends unknown[], V> = [...T, V];

type TuplifyUnion5096<T, L = LastOf5096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5096<TuplifyUnion5096<Exclude<T, L>>, L>;

type DeepPartial5096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5096<T[P]> }
  : T;

type Paths5096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5096<K, Paths5096<T[K], Prev5096[D]>> : never }[keyof T]
  : never;

type Prev5096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5096 {
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

type ConfigPaths5096 = Paths5096<NestedConfig5096>;

interface HeavyProps5096 {
  config: DeepPartial5096<NestedConfig5096>;
  path?: ConfigPaths5096;
}

const HeavyComponent5096 = memo(function HeavyComponent5096({ config }: HeavyProps5096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5096.displayName = 'HeavyComponent5096';
export default HeavyComponent5096;
