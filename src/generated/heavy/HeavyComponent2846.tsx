'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2846<T> = T extends (infer U)[]
  ? DeepReadonlyArray2846<U>
  : T extends object
  ? DeepReadonlyObject2846<T>
  : T;

interface DeepReadonlyArray2846<T> extends ReadonlyArray<DeepReadonly2846<T>> {}

type DeepReadonlyObject2846<T> = {
  readonly [P in keyof T]: DeepReadonly2846<T[P]>;
};

type UnionToIntersection2846<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2846<T> = UnionToIntersection2846<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2846<T extends unknown[], V> = [...T, V];

type TuplifyUnion2846<T, L = LastOf2846<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2846<TuplifyUnion2846<Exclude<T, L>>, L>;

type DeepPartial2846<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2846<T[P]> }
  : T;

type Paths2846<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2846<K, Paths2846<T[K], Prev2846[D]>> : never }[keyof T]
  : never;

type Prev2846 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2846<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2846 {
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

type ConfigPaths2846 = Paths2846<NestedConfig2846>;

interface HeavyProps2846 {
  config: DeepPartial2846<NestedConfig2846>;
  path?: ConfigPaths2846;
}

const HeavyComponent2846 = memo(function HeavyComponent2846({ config }: HeavyProps2846) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2846) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2846 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2846: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2846.displayName = 'HeavyComponent2846';
export default HeavyComponent2846;
