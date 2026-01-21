'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2762<T> = T extends (infer U)[]
  ? DeepReadonlyArray2762<U>
  : T extends object
  ? DeepReadonlyObject2762<T>
  : T;

interface DeepReadonlyArray2762<T> extends ReadonlyArray<DeepReadonly2762<T>> {}

type DeepReadonlyObject2762<T> = {
  readonly [P in keyof T]: DeepReadonly2762<T[P]>;
};

type UnionToIntersection2762<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2762<T> = UnionToIntersection2762<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2762<T extends unknown[], V> = [...T, V];

type TuplifyUnion2762<T, L = LastOf2762<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2762<TuplifyUnion2762<Exclude<T, L>>, L>;

type DeepPartial2762<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2762<T[P]> }
  : T;

type Paths2762<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2762<K, Paths2762<T[K], Prev2762[D]>> : never }[keyof T]
  : never;

type Prev2762 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2762<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2762 {
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

type ConfigPaths2762 = Paths2762<NestedConfig2762>;

interface HeavyProps2762 {
  config: DeepPartial2762<NestedConfig2762>;
  path?: ConfigPaths2762;
}

const HeavyComponent2762 = memo(function HeavyComponent2762({ config }: HeavyProps2762) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2762) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2762 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2762: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2762.displayName = 'HeavyComponent2762';
export default HeavyComponent2762;
