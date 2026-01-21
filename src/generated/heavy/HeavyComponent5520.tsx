'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5520<T> = T extends (infer U)[]
  ? DeepReadonlyArray5520<U>
  : T extends object
  ? DeepReadonlyObject5520<T>
  : T;

interface DeepReadonlyArray5520<T> extends ReadonlyArray<DeepReadonly5520<T>> {}

type DeepReadonlyObject5520<T> = {
  readonly [P in keyof T]: DeepReadonly5520<T[P]>;
};

type UnionToIntersection5520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5520<T> = UnionToIntersection5520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5520<T extends unknown[], V> = [...T, V];

type TuplifyUnion5520<T, L = LastOf5520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5520<TuplifyUnion5520<Exclude<T, L>>, L>;

type DeepPartial5520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5520<T[P]> }
  : T;

type Paths5520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5520<K, Paths5520<T[K], Prev5520[D]>> : never }[keyof T]
  : never;

type Prev5520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5520 {
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

type ConfigPaths5520 = Paths5520<NestedConfig5520>;

interface HeavyProps5520 {
  config: DeepPartial5520<NestedConfig5520>;
  path?: ConfigPaths5520;
}

const HeavyComponent5520 = memo(function HeavyComponent5520({ config }: HeavyProps5520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5520.displayName = 'HeavyComponent5520';
export default HeavyComponent5520;
