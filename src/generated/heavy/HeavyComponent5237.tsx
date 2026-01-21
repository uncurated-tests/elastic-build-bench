'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5237<T> = T extends (infer U)[]
  ? DeepReadonlyArray5237<U>
  : T extends object
  ? DeepReadonlyObject5237<T>
  : T;

interface DeepReadonlyArray5237<T> extends ReadonlyArray<DeepReadonly5237<T>> {}

type DeepReadonlyObject5237<T> = {
  readonly [P in keyof T]: DeepReadonly5237<T[P]>;
};

type UnionToIntersection5237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5237<T> = UnionToIntersection5237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5237<T extends unknown[], V> = [...T, V];

type TuplifyUnion5237<T, L = LastOf5237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5237<TuplifyUnion5237<Exclude<T, L>>, L>;

type DeepPartial5237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5237<T[P]> }
  : T;

type Paths5237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5237<K, Paths5237<T[K], Prev5237[D]>> : never }[keyof T]
  : never;

type Prev5237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5237 {
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

type ConfigPaths5237 = Paths5237<NestedConfig5237>;

interface HeavyProps5237 {
  config: DeepPartial5237<NestedConfig5237>;
  path?: ConfigPaths5237;
}

const HeavyComponent5237 = memo(function HeavyComponent5237({ config }: HeavyProps5237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5237.displayName = 'HeavyComponent5237';
export default HeavyComponent5237;
