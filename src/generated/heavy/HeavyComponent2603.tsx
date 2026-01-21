'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2603<T> = T extends (infer U)[]
  ? DeepReadonlyArray2603<U>
  : T extends object
  ? DeepReadonlyObject2603<T>
  : T;

interface DeepReadonlyArray2603<T> extends ReadonlyArray<DeepReadonly2603<T>> {}

type DeepReadonlyObject2603<T> = {
  readonly [P in keyof T]: DeepReadonly2603<T[P]>;
};

type UnionToIntersection2603<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2603<T> = UnionToIntersection2603<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2603<T extends unknown[], V> = [...T, V];

type TuplifyUnion2603<T, L = LastOf2603<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2603<TuplifyUnion2603<Exclude<T, L>>, L>;

type DeepPartial2603<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2603<T[P]> }
  : T;

type Paths2603<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2603<K, Paths2603<T[K], Prev2603[D]>> : never }[keyof T]
  : never;

type Prev2603 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2603<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2603 {
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

type ConfigPaths2603 = Paths2603<NestedConfig2603>;

interface HeavyProps2603 {
  config: DeepPartial2603<NestedConfig2603>;
  path?: ConfigPaths2603;
}

const HeavyComponent2603 = memo(function HeavyComponent2603({ config }: HeavyProps2603) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2603) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2603 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2603: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2603.displayName = 'HeavyComponent2603';
export default HeavyComponent2603;
