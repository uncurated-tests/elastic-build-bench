'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5768<T> = T extends (infer U)[]
  ? DeepReadonlyArray5768<U>
  : T extends object
  ? DeepReadonlyObject5768<T>
  : T;

interface DeepReadonlyArray5768<T> extends ReadonlyArray<DeepReadonly5768<T>> {}

type DeepReadonlyObject5768<T> = {
  readonly [P in keyof T]: DeepReadonly5768<T[P]>;
};

type UnionToIntersection5768<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5768<T> = UnionToIntersection5768<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5768<T extends unknown[], V> = [...T, V];

type TuplifyUnion5768<T, L = LastOf5768<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5768<TuplifyUnion5768<Exclude<T, L>>, L>;

type DeepPartial5768<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5768<T[P]> }
  : T;

type Paths5768<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5768<K, Paths5768<T[K], Prev5768[D]>> : never }[keyof T]
  : never;

type Prev5768 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5768<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5768 {
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

type ConfigPaths5768 = Paths5768<NestedConfig5768>;

interface HeavyProps5768 {
  config: DeepPartial5768<NestedConfig5768>;
  path?: ConfigPaths5768;
}

const HeavyComponent5768 = memo(function HeavyComponent5768({ config }: HeavyProps5768) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5768) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5768 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5768: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5768.displayName = 'HeavyComponent5768';
export default HeavyComponent5768;
