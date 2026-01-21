'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5151<T> = T extends (infer U)[]
  ? DeepReadonlyArray5151<U>
  : T extends object
  ? DeepReadonlyObject5151<T>
  : T;

interface DeepReadonlyArray5151<T> extends ReadonlyArray<DeepReadonly5151<T>> {}

type DeepReadonlyObject5151<T> = {
  readonly [P in keyof T]: DeepReadonly5151<T[P]>;
};

type UnionToIntersection5151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5151<T> = UnionToIntersection5151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5151<T extends unknown[], V> = [...T, V];

type TuplifyUnion5151<T, L = LastOf5151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5151<TuplifyUnion5151<Exclude<T, L>>, L>;

type DeepPartial5151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5151<T[P]> }
  : T;

type Paths5151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5151<K, Paths5151<T[K], Prev5151[D]>> : never }[keyof T]
  : never;

type Prev5151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5151 {
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

type ConfigPaths5151 = Paths5151<NestedConfig5151>;

interface HeavyProps5151 {
  config: DeepPartial5151<NestedConfig5151>;
  path?: ConfigPaths5151;
}

const HeavyComponent5151 = memo(function HeavyComponent5151({ config }: HeavyProps5151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5151.displayName = 'HeavyComponent5151';
export default HeavyComponent5151;
