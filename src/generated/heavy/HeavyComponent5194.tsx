'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5194<T> = T extends (infer U)[]
  ? DeepReadonlyArray5194<U>
  : T extends object
  ? DeepReadonlyObject5194<T>
  : T;

interface DeepReadonlyArray5194<T> extends ReadonlyArray<DeepReadonly5194<T>> {}

type DeepReadonlyObject5194<T> = {
  readonly [P in keyof T]: DeepReadonly5194<T[P]>;
};

type UnionToIntersection5194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5194<T> = UnionToIntersection5194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5194<T extends unknown[], V> = [...T, V];

type TuplifyUnion5194<T, L = LastOf5194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5194<TuplifyUnion5194<Exclude<T, L>>, L>;

type DeepPartial5194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5194<T[P]> }
  : T;

type Paths5194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5194<K, Paths5194<T[K], Prev5194[D]>> : never }[keyof T]
  : never;

type Prev5194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5194 {
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

type ConfigPaths5194 = Paths5194<NestedConfig5194>;

interface HeavyProps5194 {
  config: DeepPartial5194<NestedConfig5194>;
  path?: ConfigPaths5194;
}

const HeavyComponent5194 = memo(function HeavyComponent5194({ config }: HeavyProps5194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5194.displayName = 'HeavyComponent5194';
export default HeavyComponent5194;
