'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5447<T> = T extends (infer U)[]
  ? DeepReadonlyArray5447<U>
  : T extends object
  ? DeepReadonlyObject5447<T>
  : T;

interface DeepReadonlyArray5447<T> extends ReadonlyArray<DeepReadonly5447<T>> {}

type DeepReadonlyObject5447<T> = {
  readonly [P in keyof T]: DeepReadonly5447<T[P]>;
};

type UnionToIntersection5447<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5447<T> = UnionToIntersection5447<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5447<T extends unknown[], V> = [...T, V];

type TuplifyUnion5447<T, L = LastOf5447<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5447<TuplifyUnion5447<Exclude<T, L>>, L>;

type DeepPartial5447<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5447<T[P]> }
  : T;

type Paths5447<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5447<K, Paths5447<T[K], Prev5447[D]>> : never }[keyof T]
  : never;

type Prev5447 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5447<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5447 {
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

type ConfigPaths5447 = Paths5447<NestedConfig5447>;

interface HeavyProps5447 {
  config: DeepPartial5447<NestedConfig5447>;
  path?: ConfigPaths5447;
}

const HeavyComponent5447 = memo(function HeavyComponent5447({ config }: HeavyProps5447) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5447) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5447 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5447: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5447.displayName = 'HeavyComponent5447';
export default HeavyComponent5447;
