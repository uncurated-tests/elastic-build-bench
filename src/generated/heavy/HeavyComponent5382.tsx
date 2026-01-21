'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5382<T> = T extends (infer U)[]
  ? DeepReadonlyArray5382<U>
  : T extends object
  ? DeepReadonlyObject5382<T>
  : T;

interface DeepReadonlyArray5382<T> extends ReadonlyArray<DeepReadonly5382<T>> {}

type DeepReadonlyObject5382<T> = {
  readonly [P in keyof T]: DeepReadonly5382<T[P]>;
};

type UnionToIntersection5382<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5382<T> = UnionToIntersection5382<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5382<T extends unknown[], V> = [...T, V];

type TuplifyUnion5382<T, L = LastOf5382<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5382<TuplifyUnion5382<Exclude<T, L>>, L>;

type DeepPartial5382<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5382<T[P]> }
  : T;

type Paths5382<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5382<K, Paths5382<T[K], Prev5382[D]>> : never }[keyof T]
  : never;

type Prev5382 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5382<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5382 {
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

type ConfigPaths5382 = Paths5382<NestedConfig5382>;

interface HeavyProps5382 {
  config: DeepPartial5382<NestedConfig5382>;
  path?: ConfigPaths5382;
}

const HeavyComponent5382 = memo(function HeavyComponent5382({ config }: HeavyProps5382) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5382) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5382 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5382: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5382.displayName = 'HeavyComponent5382';
export default HeavyComponent5382;
