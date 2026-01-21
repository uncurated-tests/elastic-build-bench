'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2564<T> = T extends (infer U)[]
  ? DeepReadonlyArray2564<U>
  : T extends object
  ? DeepReadonlyObject2564<T>
  : T;

interface DeepReadonlyArray2564<T> extends ReadonlyArray<DeepReadonly2564<T>> {}

type DeepReadonlyObject2564<T> = {
  readonly [P in keyof T]: DeepReadonly2564<T[P]>;
};

type UnionToIntersection2564<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2564<T> = UnionToIntersection2564<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2564<T extends unknown[], V> = [...T, V];

type TuplifyUnion2564<T, L = LastOf2564<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2564<TuplifyUnion2564<Exclude<T, L>>, L>;

type DeepPartial2564<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2564<T[P]> }
  : T;

type Paths2564<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2564<K, Paths2564<T[K], Prev2564[D]>> : never }[keyof T]
  : never;

type Prev2564 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2564<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2564 {
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

type ConfigPaths2564 = Paths2564<NestedConfig2564>;

interface HeavyProps2564 {
  config: DeepPartial2564<NestedConfig2564>;
  path?: ConfigPaths2564;
}

const HeavyComponent2564 = memo(function HeavyComponent2564({ config }: HeavyProps2564) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2564) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2564 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2564: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2564.displayName = 'HeavyComponent2564';
export default HeavyComponent2564;
