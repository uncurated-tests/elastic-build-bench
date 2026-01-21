'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5980<T> = T extends (infer U)[]
  ? DeepReadonlyArray5980<U>
  : T extends object
  ? DeepReadonlyObject5980<T>
  : T;

interface DeepReadonlyArray5980<T> extends ReadonlyArray<DeepReadonly5980<T>> {}

type DeepReadonlyObject5980<T> = {
  readonly [P in keyof T]: DeepReadonly5980<T[P]>;
};

type UnionToIntersection5980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5980<T> = UnionToIntersection5980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5980<T extends unknown[], V> = [...T, V];

type TuplifyUnion5980<T, L = LastOf5980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5980<TuplifyUnion5980<Exclude<T, L>>, L>;

type DeepPartial5980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5980<T[P]> }
  : T;

type Paths5980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5980<K, Paths5980<T[K], Prev5980[D]>> : never }[keyof T]
  : never;

type Prev5980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5980 {
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

type ConfigPaths5980 = Paths5980<NestedConfig5980>;

interface HeavyProps5980 {
  config: DeepPartial5980<NestedConfig5980>;
  path?: ConfigPaths5980;
}

const HeavyComponent5980 = memo(function HeavyComponent5980({ config }: HeavyProps5980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5980.displayName = 'HeavyComponent5980';
export default HeavyComponent5980;
