'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5726<T> = T extends (infer U)[]
  ? DeepReadonlyArray5726<U>
  : T extends object
  ? DeepReadonlyObject5726<T>
  : T;

interface DeepReadonlyArray5726<T> extends ReadonlyArray<DeepReadonly5726<T>> {}

type DeepReadonlyObject5726<T> = {
  readonly [P in keyof T]: DeepReadonly5726<T[P]>;
};

type UnionToIntersection5726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5726<T> = UnionToIntersection5726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5726<T extends unknown[], V> = [...T, V];

type TuplifyUnion5726<T, L = LastOf5726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5726<TuplifyUnion5726<Exclude<T, L>>, L>;

type DeepPartial5726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5726<T[P]> }
  : T;

type Paths5726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5726<K, Paths5726<T[K], Prev5726[D]>> : never }[keyof T]
  : never;

type Prev5726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5726 {
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

type ConfigPaths5726 = Paths5726<NestedConfig5726>;

interface HeavyProps5726 {
  config: DeepPartial5726<NestedConfig5726>;
  path?: ConfigPaths5726;
}

const HeavyComponent5726 = memo(function HeavyComponent5726({ config }: HeavyProps5726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5726.displayName = 'HeavyComponent5726';
export default HeavyComponent5726;
