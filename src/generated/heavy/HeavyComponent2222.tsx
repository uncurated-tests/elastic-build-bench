'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2222<T> = T extends (infer U)[]
  ? DeepReadonlyArray2222<U>
  : T extends object
  ? DeepReadonlyObject2222<T>
  : T;

interface DeepReadonlyArray2222<T> extends ReadonlyArray<DeepReadonly2222<T>> {}

type DeepReadonlyObject2222<T> = {
  readonly [P in keyof T]: DeepReadonly2222<T[P]>;
};

type UnionToIntersection2222<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2222<T> = UnionToIntersection2222<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2222<T extends unknown[], V> = [...T, V];

type TuplifyUnion2222<T, L = LastOf2222<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2222<TuplifyUnion2222<Exclude<T, L>>, L>;

type DeepPartial2222<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2222<T[P]> }
  : T;

type Paths2222<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2222<K, Paths2222<T[K], Prev2222[D]>> : never }[keyof T]
  : never;

type Prev2222 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2222<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2222 {
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

type ConfigPaths2222 = Paths2222<NestedConfig2222>;

interface HeavyProps2222 {
  config: DeepPartial2222<NestedConfig2222>;
  path?: ConfigPaths2222;
}

const HeavyComponent2222 = memo(function HeavyComponent2222({ config }: HeavyProps2222) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2222) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2222 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2222: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2222.displayName = 'HeavyComponent2222';
export default HeavyComponent2222;
