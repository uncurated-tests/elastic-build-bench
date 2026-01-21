'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5994<T> = T extends (infer U)[]
  ? DeepReadonlyArray5994<U>
  : T extends object
  ? DeepReadonlyObject5994<T>
  : T;

interface DeepReadonlyArray5994<T> extends ReadonlyArray<DeepReadonly5994<T>> {}

type DeepReadonlyObject5994<T> = {
  readonly [P in keyof T]: DeepReadonly5994<T[P]>;
};

type UnionToIntersection5994<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5994<T> = UnionToIntersection5994<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5994<T extends unknown[], V> = [...T, V];

type TuplifyUnion5994<T, L = LastOf5994<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5994<TuplifyUnion5994<Exclude<T, L>>, L>;

type DeepPartial5994<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5994<T[P]> }
  : T;

type Paths5994<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5994<K, Paths5994<T[K], Prev5994[D]>> : never }[keyof T]
  : never;

type Prev5994 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5994<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5994 {
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

type ConfigPaths5994 = Paths5994<NestedConfig5994>;

interface HeavyProps5994 {
  config: DeepPartial5994<NestedConfig5994>;
  path?: ConfigPaths5994;
}

const HeavyComponent5994 = memo(function HeavyComponent5994({ config }: HeavyProps5994) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5994) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5994 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5994: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5994.displayName = 'HeavyComponent5994';
export default HeavyComponent5994;
