'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5707<T> = T extends (infer U)[]
  ? DeepReadonlyArray5707<U>
  : T extends object
  ? DeepReadonlyObject5707<T>
  : T;

interface DeepReadonlyArray5707<T> extends ReadonlyArray<DeepReadonly5707<T>> {}

type DeepReadonlyObject5707<T> = {
  readonly [P in keyof T]: DeepReadonly5707<T[P]>;
};

type UnionToIntersection5707<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5707<T> = UnionToIntersection5707<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5707<T extends unknown[], V> = [...T, V];

type TuplifyUnion5707<T, L = LastOf5707<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5707<TuplifyUnion5707<Exclude<T, L>>, L>;

type DeepPartial5707<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5707<T[P]> }
  : T;

type Paths5707<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5707<K, Paths5707<T[K], Prev5707[D]>> : never }[keyof T]
  : never;

type Prev5707 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5707<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5707 {
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

type ConfigPaths5707 = Paths5707<NestedConfig5707>;

interface HeavyProps5707 {
  config: DeepPartial5707<NestedConfig5707>;
  path?: ConfigPaths5707;
}

const HeavyComponent5707 = memo(function HeavyComponent5707({ config }: HeavyProps5707) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5707) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5707 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5707: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5707.displayName = 'HeavyComponent5707';
export default HeavyComponent5707;
