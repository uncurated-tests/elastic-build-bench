'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5741<T> = T extends (infer U)[]
  ? DeepReadonlyArray5741<U>
  : T extends object
  ? DeepReadonlyObject5741<T>
  : T;

interface DeepReadonlyArray5741<T> extends ReadonlyArray<DeepReadonly5741<T>> {}

type DeepReadonlyObject5741<T> = {
  readonly [P in keyof T]: DeepReadonly5741<T[P]>;
};

type UnionToIntersection5741<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5741<T> = UnionToIntersection5741<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5741<T extends unknown[], V> = [...T, V];

type TuplifyUnion5741<T, L = LastOf5741<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5741<TuplifyUnion5741<Exclude<T, L>>, L>;

type DeepPartial5741<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5741<T[P]> }
  : T;

type Paths5741<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5741<K, Paths5741<T[K], Prev5741[D]>> : never }[keyof T]
  : never;

type Prev5741 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5741<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5741 {
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

type ConfigPaths5741 = Paths5741<NestedConfig5741>;

interface HeavyProps5741 {
  config: DeepPartial5741<NestedConfig5741>;
  path?: ConfigPaths5741;
}

const HeavyComponent5741 = memo(function HeavyComponent5741({ config }: HeavyProps5741) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5741) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5741 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5741: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5741.displayName = 'HeavyComponent5741';
export default HeavyComponent5741;
