'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5703<T> = T extends (infer U)[]
  ? DeepReadonlyArray5703<U>
  : T extends object
  ? DeepReadonlyObject5703<T>
  : T;

interface DeepReadonlyArray5703<T> extends ReadonlyArray<DeepReadonly5703<T>> {}

type DeepReadonlyObject5703<T> = {
  readonly [P in keyof T]: DeepReadonly5703<T[P]>;
};

type UnionToIntersection5703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5703<T> = UnionToIntersection5703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5703<T extends unknown[], V> = [...T, V];

type TuplifyUnion5703<T, L = LastOf5703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5703<TuplifyUnion5703<Exclude<T, L>>, L>;

type DeepPartial5703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5703<T[P]> }
  : T;

type Paths5703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5703<K, Paths5703<T[K], Prev5703[D]>> : never }[keyof T]
  : never;

type Prev5703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5703 {
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

type ConfigPaths5703 = Paths5703<NestedConfig5703>;

interface HeavyProps5703 {
  config: DeepPartial5703<NestedConfig5703>;
  path?: ConfigPaths5703;
}

const HeavyComponent5703 = memo(function HeavyComponent5703({ config }: HeavyProps5703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5703.displayName = 'HeavyComponent5703';
export default HeavyComponent5703;
