'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2145<T> = T extends (infer U)[]
  ? DeepReadonlyArray2145<U>
  : T extends object
  ? DeepReadonlyObject2145<T>
  : T;

interface DeepReadonlyArray2145<T> extends ReadonlyArray<DeepReadonly2145<T>> {}

type DeepReadonlyObject2145<T> = {
  readonly [P in keyof T]: DeepReadonly2145<T[P]>;
};

type UnionToIntersection2145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2145<T> = UnionToIntersection2145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2145<T extends unknown[], V> = [...T, V];

type TuplifyUnion2145<T, L = LastOf2145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2145<TuplifyUnion2145<Exclude<T, L>>, L>;

type DeepPartial2145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2145<T[P]> }
  : T;

type Paths2145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2145<K, Paths2145<T[K], Prev2145[D]>> : never }[keyof T]
  : never;

type Prev2145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2145 {
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

type ConfigPaths2145 = Paths2145<NestedConfig2145>;

interface HeavyProps2145 {
  config: DeepPartial2145<NestedConfig2145>;
  path?: ConfigPaths2145;
}

const HeavyComponent2145 = memo(function HeavyComponent2145({ config }: HeavyProps2145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2145.displayName = 'HeavyComponent2145';
export default HeavyComponent2145;
