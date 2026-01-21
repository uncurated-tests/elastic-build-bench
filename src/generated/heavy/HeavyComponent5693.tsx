'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5693<T> = T extends (infer U)[]
  ? DeepReadonlyArray5693<U>
  : T extends object
  ? DeepReadonlyObject5693<T>
  : T;

interface DeepReadonlyArray5693<T> extends ReadonlyArray<DeepReadonly5693<T>> {}

type DeepReadonlyObject5693<T> = {
  readonly [P in keyof T]: DeepReadonly5693<T[P]>;
};

type UnionToIntersection5693<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5693<T> = UnionToIntersection5693<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5693<T extends unknown[], V> = [...T, V];

type TuplifyUnion5693<T, L = LastOf5693<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5693<TuplifyUnion5693<Exclude<T, L>>, L>;

type DeepPartial5693<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5693<T[P]> }
  : T;

type Paths5693<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5693<K, Paths5693<T[K], Prev5693[D]>> : never }[keyof T]
  : never;

type Prev5693 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5693<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5693 {
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

type ConfigPaths5693 = Paths5693<NestedConfig5693>;

interface HeavyProps5693 {
  config: DeepPartial5693<NestedConfig5693>;
  path?: ConfigPaths5693;
}

const HeavyComponent5693 = memo(function HeavyComponent5693({ config }: HeavyProps5693) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5693) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5693 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5693: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5693.displayName = 'HeavyComponent5693';
export default HeavyComponent5693;
