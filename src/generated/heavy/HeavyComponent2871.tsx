'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2871<T> = T extends (infer U)[]
  ? DeepReadonlyArray2871<U>
  : T extends object
  ? DeepReadonlyObject2871<T>
  : T;

interface DeepReadonlyArray2871<T> extends ReadonlyArray<DeepReadonly2871<T>> {}

type DeepReadonlyObject2871<T> = {
  readonly [P in keyof T]: DeepReadonly2871<T[P]>;
};

type UnionToIntersection2871<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2871<T> = UnionToIntersection2871<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2871<T extends unknown[], V> = [...T, V];

type TuplifyUnion2871<T, L = LastOf2871<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2871<TuplifyUnion2871<Exclude<T, L>>, L>;

type DeepPartial2871<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2871<T[P]> }
  : T;

type Paths2871<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2871<K, Paths2871<T[K], Prev2871[D]>> : never }[keyof T]
  : never;

type Prev2871 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2871<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2871 {
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

type ConfigPaths2871 = Paths2871<NestedConfig2871>;

interface HeavyProps2871 {
  config: DeepPartial2871<NestedConfig2871>;
  path?: ConfigPaths2871;
}

const HeavyComponent2871 = memo(function HeavyComponent2871({ config }: HeavyProps2871) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2871) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2871 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2871: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2871.displayName = 'HeavyComponent2871';
export default HeavyComponent2871;
