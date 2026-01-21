'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5100<T> = T extends (infer U)[]
  ? DeepReadonlyArray5100<U>
  : T extends object
  ? DeepReadonlyObject5100<T>
  : T;

interface DeepReadonlyArray5100<T> extends ReadonlyArray<DeepReadonly5100<T>> {}

type DeepReadonlyObject5100<T> = {
  readonly [P in keyof T]: DeepReadonly5100<T[P]>;
};

type UnionToIntersection5100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5100<T> = UnionToIntersection5100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5100<T extends unknown[], V> = [...T, V];

type TuplifyUnion5100<T, L = LastOf5100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5100<TuplifyUnion5100<Exclude<T, L>>, L>;

type DeepPartial5100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5100<T[P]> }
  : T;

type Paths5100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5100<K, Paths5100<T[K], Prev5100[D]>> : never }[keyof T]
  : never;

type Prev5100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5100 {
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

type ConfigPaths5100 = Paths5100<NestedConfig5100>;

interface HeavyProps5100 {
  config: DeepPartial5100<NestedConfig5100>;
  path?: ConfigPaths5100;
}

const HeavyComponent5100 = memo(function HeavyComponent5100({ config }: HeavyProps5100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5100.displayName = 'HeavyComponent5100';
export default HeavyComponent5100;
