'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5656<T> = T extends (infer U)[]
  ? DeepReadonlyArray5656<U>
  : T extends object
  ? DeepReadonlyObject5656<T>
  : T;

interface DeepReadonlyArray5656<T> extends ReadonlyArray<DeepReadonly5656<T>> {}

type DeepReadonlyObject5656<T> = {
  readonly [P in keyof T]: DeepReadonly5656<T[P]>;
};

type UnionToIntersection5656<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5656<T> = UnionToIntersection5656<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5656<T extends unknown[], V> = [...T, V];

type TuplifyUnion5656<T, L = LastOf5656<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5656<TuplifyUnion5656<Exclude<T, L>>, L>;

type DeepPartial5656<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5656<T[P]> }
  : T;

type Paths5656<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5656<K, Paths5656<T[K], Prev5656[D]>> : never }[keyof T]
  : never;

type Prev5656 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5656<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5656 {
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

type ConfigPaths5656 = Paths5656<NestedConfig5656>;

interface HeavyProps5656 {
  config: DeepPartial5656<NestedConfig5656>;
  path?: ConfigPaths5656;
}

const HeavyComponent5656 = memo(function HeavyComponent5656({ config }: HeavyProps5656) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5656) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5656 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5656: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5656.displayName = 'HeavyComponent5656';
export default HeavyComponent5656;
