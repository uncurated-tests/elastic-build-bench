'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5694<T> = T extends (infer U)[]
  ? DeepReadonlyArray5694<U>
  : T extends object
  ? DeepReadonlyObject5694<T>
  : T;

interface DeepReadonlyArray5694<T> extends ReadonlyArray<DeepReadonly5694<T>> {}

type DeepReadonlyObject5694<T> = {
  readonly [P in keyof T]: DeepReadonly5694<T[P]>;
};

type UnionToIntersection5694<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5694<T> = UnionToIntersection5694<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5694<T extends unknown[], V> = [...T, V];

type TuplifyUnion5694<T, L = LastOf5694<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5694<TuplifyUnion5694<Exclude<T, L>>, L>;

type DeepPartial5694<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5694<T[P]> }
  : T;

type Paths5694<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5694<K, Paths5694<T[K], Prev5694[D]>> : never }[keyof T]
  : never;

type Prev5694 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5694<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5694 {
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

type ConfigPaths5694 = Paths5694<NestedConfig5694>;

interface HeavyProps5694 {
  config: DeepPartial5694<NestedConfig5694>;
  path?: ConfigPaths5694;
}

const HeavyComponent5694 = memo(function HeavyComponent5694({ config }: HeavyProps5694) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5694) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5694 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5694: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5694.displayName = 'HeavyComponent5694';
export default HeavyComponent5694;
