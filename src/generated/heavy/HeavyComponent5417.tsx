'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5417<T> = T extends (infer U)[]
  ? DeepReadonlyArray5417<U>
  : T extends object
  ? DeepReadonlyObject5417<T>
  : T;

interface DeepReadonlyArray5417<T> extends ReadonlyArray<DeepReadonly5417<T>> {}

type DeepReadonlyObject5417<T> = {
  readonly [P in keyof T]: DeepReadonly5417<T[P]>;
};

type UnionToIntersection5417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5417<T> = UnionToIntersection5417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5417<T extends unknown[], V> = [...T, V];

type TuplifyUnion5417<T, L = LastOf5417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5417<TuplifyUnion5417<Exclude<T, L>>, L>;

type DeepPartial5417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5417<T[P]> }
  : T;

type Paths5417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5417<K, Paths5417<T[K], Prev5417[D]>> : never }[keyof T]
  : never;

type Prev5417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5417 {
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

type ConfigPaths5417 = Paths5417<NestedConfig5417>;

interface HeavyProps5417 {
  config: DeepPartial5417<NestedConfig5417>;
  path?: ConfigPaths5417;
}

const HeavyComponent5417 = memo(function HeavyComponent5417({ config }: HeavyProps5417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5417.displayName = 'HeavyComponent5417';
export default HeavyComponent5417;
