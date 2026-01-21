'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5710<T> = T extends (infer U)[]
  ? DeepReadonlyArray5710<U>
  : T extends object
  ? DeepReadonlyObject5710<T>
  : T;

interface DeepReadonlyArray5710<T> extends ReadonlyArray<DeepReadonly5710<T>> {}

type DeepReadonlyObject5710<T> = {
  readonly [P in keyof T]: DeepReadonly5710<T[P]>;
};

type UnionToIntersection5710<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5710<T> = UnionToIntersection5710<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5710<T extends unknown[], V> = [...T, V];

type TuplifyUnion5710<T, L = LastOf5710<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5710<TuplifyUnion5710<Exclude<T, L>>, L>;

type DeepPartial5710<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5710<T[P]> }
  : T;

type Paths5710<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5710<K, Paths5710<T[K], Prev5710[D]>> : never }[keyof T]
  : never;

type Prev5710 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5710<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5710 {
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

type ConfigPaths5710 = Paths5710<NestedConfig5710>;

interface HeavyProps5710 {
  config: DeepPartial5710<NestedConfig5710>;
  path?: ConfigPaths5710;
}

const HeavyComponent5710 = memo(function HeavyComponent5710({ config }: HeavyProps5710) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5710) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5710 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5710: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5710.displayName = 'HeavyComponent5710';
export default HeavyComponent5710;
