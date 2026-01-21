'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5771<T> = T extends (infer U)[]
  ? DeepReadonlyArray5771<U>
  : T extends object
  ? DeepReadonlyObject5771<T>
  : T;

interface DeepReadonlyArray5771<T> extends ReadonlyArray<DeepReadonly5771<T>> {}

type DeepReadonlyObject5771<T> = {
  readonly [P in keyof T]: DeepReadonly5771<T[P]>;
};

type UnionToIntersection5771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5771<T> = UnionToIntersection5771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5771<T extends unknown[], V> = [...T, V];

type TuplifyUnion5771<T, L = LastOf5771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5771<TuplifyUnion5771<Exclude<T, L>>, L>;

type DeepPartial5771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5771<T[P]> }
  : T;

type Paths5771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5771<K, Paths5771<T[K], Prev5771[D]>> : never }[keyof T]
  : never;

type Prev5771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5771 {
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

type ConfigPaths5771 = Paths5771<NestedConfig5771>;

interface HeavyProps5771 {
  config: DeepPartial5771<NestedConfig5771>;
  path?: ConfigPaths5771;
}

const HeavyComponent5771 = memo(function HeavyComponent5771({ config }: HeavyProps5771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5771.displayName = 'HeavyComponent5771';
export default HeavyComponent5771;
