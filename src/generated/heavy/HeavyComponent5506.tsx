'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5506<T> = T extends (infer U)[]
  ? DeepReadonlyArray5506<U>
  : T extends object
  ? DeepReadonlyObject5506<T>
  : T;

interface DeepReadonlyArray5506<T> extends ReadonlyArray<DeepReadonly5506<T>> {}

type DeepReadonlyObject5506<T> = {
  readonly [P in keyof T]: DeepReadonly5506<T[P]>;
};

type UnionToIntersection5506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5506<T> = UnionToIntersection5506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5506<T extends unknown[], V> = [...T, V];

type TuplifyUnion5506<T, L = LastOf5506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5506<TuplifyUnion5506<Exclude<T, L>>, L>;

type DeepPartial5506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5506<T[P]> }
  : T;

type Paths5506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5506<K, Paths5506<T[K], Prev5506[D]>> : never }[keyof T]
  : never;

type Prev5506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5506 {
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

type ConfigPaths5506 = Paths5506<NestedConfig5506>;

interface HeavyProps5506 {
  config: DeepPartial5506<NestedConfig5506>;
  path?: ConfigPaths5506;
}

const HeavyComponent5506 = memo(function HeavyComponent5506({ config }: HeavyProps5506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5506.displayName = 'HeavyComponent5506';
export default HeavyComponent5506;
