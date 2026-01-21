'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5260<T> = T extends (infer U)[]
  ? DeepReadonlyArray5260<U>
  : T extends object
  ? DeepReadonlyObject5260<T>
  : T;

interface DeepReadonlyArray5260<T> extends ReadonlyArray<DeepReadonly5260<T>> {}

type DeepReadonlyObject5260<T> = {
  readonly [P in keyof T]: DeepReadonly5260<T[P]>;
};

type UnionToIntersection5260<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5260<T> = UnionToIntersection5260<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5260<T extends unknown[], V> = [...T, V];

type TuplifyUnion5260<T, L = LastOf5260<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5260<TuplifyUnion5260<Exclude<T, L>>, L>;

type DeepPartial5260<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5260<T[P]> }
  : T;

type Paths5260<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5260<K, Paths5260<T[K], Prev5260[D]>> : never }[keyof T]
  : never;

type Prev5260 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5260<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5260 {
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

type ConfigPaths5260 = Paths5260<NestedConfig5260>;

interface HeavyProps5260 {
  config: DeepPartial5260<NestedConfig5260>;
  path?: ConfigPaths5260;
}

const HeavyComponent5260 = memo(function HeavyComponent5260({ config }: HeavyProps5260) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5260) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5260 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5260: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5260.displayName = 'HeavyComponent5260';
export default HeavyComponent5260;
