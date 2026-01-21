'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5798<T> = T extends (infer U)[]
  ? DeepReadonlyArray5798<U>
  : T extends object
  ? DeepReadonlyObject5798<T>
  : T;

interface DeepReadonlyArray5798<T> extends ReadonlyArray<DeepReadonly5798<T>> {}

type DeepReadonlyObject5798<T> = {
  readonly [P in keyof T]: DeepReadonly5798<T[P]>;
};

type UnionToIntersection5798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5798<T> = UnionToIntersection5798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5798<T extends unknown[], V> = [...T, V];

type TuplifyUnion5798<T, L = LastOf5798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5798<TuplifyUnion5798<Exclude<T, L>>, L>;

type DeepPartial5798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5798<T[P]> }
  : T;

type Paths5798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5798<K, Paths5798<T[K], Prev5798[D]>> : never }[keyof T]
  : never;

type Prev5798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5798 {
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

type ConfigPaths5798 = Paths5798<NestedConfig5798>;

interface HeavyProps5798 {
  config: DeepPartial5798<NestedConfig5798>;
  path?: ConfigPaths5798;
}

const HeavyComponent5798 = memo(function HeavyComponent5798({ config }: HeavyProps5798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5798.displayName = 'HeavyComponent5798';
export default HeavyComponent5798;
