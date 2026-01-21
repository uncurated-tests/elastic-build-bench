'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5735<T> = T extends (infer U)[]
  ? DeepReadonlyArray5735<U>
  : T extends object
  ? DeepReadonlyObject5735<T>
  : T;

interface DeepReadonlyArray5735<T> extends ReadonlyArray<DeepReadonly5735<T>> {}

type DeepReadonlyObject5735<T> = {
  readonly [P in keyof T]: DeepReadonly5735<T[P]>;
};

type UnionToIntersection5735<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5735<T> = UnionToIntersection5735<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5735<T extends unknown[], V> = [...T, V];

type TuplifyUnion5735<T, L = LastOf5735<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5735<TuplifyUnion5735<Exclude<T, L>>, L>;

type DeepPartial5735<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5735<T[P]> }
  : T;

type Paths5735<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5735<K, Paths5735<T[K], Prev5735[D]>> : never }[keyof T]
  : never;

type Prev5735 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5735<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5735 {
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

type ConfigPaths5735 = Paths5735<NestedConfig5735>;

interface HeavyProps5735 {
  config: DeepPartial5735<NestedConfig5735>;
  path?: ConfigPaths5735;
}

const HeavyComponent5735 = memo(function HeavyComponent5735({ config }: HeavyProps5735) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5735) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5735 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5735: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5735.displayName = 'HeavyComponent5735';
export default HeavyComponent5735;
