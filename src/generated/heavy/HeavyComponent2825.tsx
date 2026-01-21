'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2825<T> = T extends (infer U)[]
  ? DeepReadonlyArray2825<U>
  : T extends object
  ? DeepReadonlyObject2825<T>
  : T;

interface DeepReadonlyArray2825<T> extends ReadonlyArray<DeepReadonly2825<T>> {}

type DeepReadonlyObject2825<T> = {
  readonly [P in keyof T]: DeepReadonly2825<T[P]>;
};

type UnionToIntersection2825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2825<T> = UnionToIntersection2825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2825<T extends unknown[], V> = [...T, V];

type TuplifyUnion2825<T, L = LastOf2825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2825<TuplifyUnion2825<Exclude<T, L>>, L>;

type DeepPartial2825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2825<T[P]> }
  : T;

type Paths2825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2825<K, Paths2825<T[K], Prev2825[D]>> : never }[keyof T]
  : never;

type Prev2825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2825 {
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

type ConfigPaths2825 = Paths2825<NestedConfig2825>;

interface HeavyProps2825 {
  config: DeepPartial2825<NestedConfig2825>;
  path?: ConfigPaths2825;
}

const HeavyComponent2825 = memo(function HeavyComponent2825({ config }: HeavyProps2825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2825.displayName = 'HeavyComponent2825';
export default HeavyComponent2825;
