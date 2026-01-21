'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2528<T> = T extends (infer U)[]
  ? DeepReadonlyArray2528<U>
  : T extends object
  ? DeepReadonlyObject2528<T>
  : T;

interface DeepReadonlyArray2528<T> extends ReadonlyArray<DeepReadonly2528<T>> {}

type DeepReadonlyObject2528<T> = {
  readonly [P in keyof T]: DeepReadonly2528<T[P]>;
};

type UnionToIntersection2528<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2528<T> = UnionToIntersection2528<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2528<T extends unknown[], V> = [...T, V];

type TuplifyUnion2528<T, L = LastOf2528<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2528<TuplifyUnion2528<Exclude<T, L>>, L>;

type DeepPartial2528<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2528<T[P]> }
  : T;

type Paths2528<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2528<K, Paths2528<T[K], Prev2528[D]>> : never }[keyof T]
  : never;

type Prev2528 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2528<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2528 {
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

type ConfigPaths2528 = Paths2528<NestedConfig2528>;

interface HeavyProps2528 {
  config: DeepPartial2528<NestedConfig2528>;
  path?: ConfigPaths2528;
}

const HeavyComponent2528 = memo(function HeavyComponent2528({ config }: HeavyProps2528) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2528) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2528 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2528: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2528.displayName = 'HeavyComponent2528';
export default HeavyComponent2528;
