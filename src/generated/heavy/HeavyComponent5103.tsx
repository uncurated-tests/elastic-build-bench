'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5103<T> = T extends (infer U)[]
  ? DeepReadonlyArray5103<U>
  : T extends object
  ? DeepReadonlyObject5103<T>
  : T;

interface DeepReadonlyArray5103<T> extends ReadonlyArray<DeepReadonly5103<T>> {}

type DeepReadonlyObject5103<T> = {
  readonly [P in keyof T]: DeepReadonly5103<T[P]>;
};

type UnionToIntersection5103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5103<T> = UnionToIntersection5103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5103<T extends unknown[], V> = [...T, V];

type TuplifyUnion5103<T, L = LastOf5103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5103<TuplifyUnion5103<Exclude<T, L>>, L>;

type DeepPartial5103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5103<T[P]> }
  : T;

type Paths5103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5103<K, Paths5103<T[K], Prev5103[D]>> : never }[keyof T]
  : never;

type Prev5103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5103 {
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

type ConfigPaths5103 = Paths5103<NestedConfig5103>;

interface HeavyProps5103 {
  config: DeepPartial5103<NestedConfig5103>;
  path?: ConfigPaths5103;
}

const HeavyComponent5103 = memo(function HeavyComponent5103({ config }: HeavyProps5103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5103.displayName = 'HeavyComponent5103';
export default HeavyComponent5103;
