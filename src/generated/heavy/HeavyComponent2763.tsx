'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2763<T> = T extends (infer U)[]
  ? DeepReadonlyArray2763<U>
  : T extends object
  ? DeepReadonlyObject2763<T>
  : T;

interface DeepReadonlyArray2763<T> extends ReadonlyArray<DeepReadonly2763<T>> {}

type DeepReadonlyObject2763<T> = {
  readonly [P in keyof T]: DeepReadonly2763<T[P]>;
};

type UnionToIntersection2763<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2763<T> = UnionToIntersection2763<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2763<T extends unknown[], V> = [...T, V];

type TuplifyUnion2763<T, L = LastOf2763<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2763<TuplifyUnion2763<Exclude<T, L>>, L>;

type DeepPartial2763<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2763<T[P]> }
  : T;

type Paths2763<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2763<K, Paths2763<T[K], Prev2763[D]>> : never }[keyof T]
  : never;

type Prev2763 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2763<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2763 {
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

type ConfigPaths2763 = Paths2763<NestedConfig2763>;

interface HeavyProps2763 {
  config: DeepPartial2763<NestedConfig2763>;
  path?: ConfigPaths2763;
}

const HeavyComponent2763 = memo(function HeavyComponent2763({ config }: HeavyProps2763) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2763) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2763 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2763: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2763.displayName = 'HeavyComponent2763';
export default HeavyComponent2763;
