'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5368<T> = T extends (infer U)[]
  ? DeepReadonlyArray5368<U>
  : T extends object
  ? DeepReadonlyObject5368<T>
  : T;

interface DeepReadonlyArray5368<T> extends ReadonlyArray<DeepReadonly5368<T>> {}

type DeepReadonlyObject5368<T> = {
  readonly [P in keyof T]: DeepReadonly5368<T[P]>;
};

type UnionToIntersection5368<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5368<T> = UnionToIntersection5368<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5368<T extends unknown[], V> = [...T, V];

type TuplifyUnion5368<T, L = LastOf5368<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5368<TuplifyUnion5368<Exclude<T, L>>, L>;

type DeepPartial5368<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5368<T[P]> }
  : T;

type Paths5368<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5368<K, Paths5368<T[K], Prev5368[D]>> : never }[keyof T]
  : never;

type Prev5368 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5368<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5368 {
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

type ConfigPaths5368 = Paths5368<NestedConfig5368>;

interface HeavyProps5368 {
  config: DeepPartial5368<NestedConfig5368>;
  path?: ConfigPaths5368;
}

const HeavyComponent5368 = memo(function HeavyComponent5368({ config }: HeavyProps5368) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5368) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5368 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5368: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5368.displayName = 'HeavyComponent5368';
export default HeavyComponent5368;
