'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2425<T> = T extends (infer U)[]
  ? DeepReadonlyArray2425<U>
  : T extends object
  ? DeepReadonlyObject2425<T>
  : T;

interface DeepReadonlyArray2425<T> extends ReadonlyArray<DeepReadonly2425<T>> {}

type DeepReadonlyObject2425<T> = {
  readonly [P in keyof T]: DeepReadonly2425<T[P]>;
};

type UnionToIntersection2425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2425<T> = UnionToIntersection2425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2425<T extends unknown[], V> = [...T, V];

type TuplifyUnion2425<T, L = LastOf2425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2425<TuplifyUnion2425<Exclude<T, L>>, L>;

type DeepPartial2425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2425<T[P]> }
  : T;

type Paths2425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2425<K, Paths2425<T[K], Prev2425[D]>> : never }[keyof T]
  : never;

type Prev2425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2425 {
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

type ConfigPaths2425 = Paths2425<NestedConfig2425>;

interface HeavyProps2425 {
  config: DeepPartial2425<NestedConfig2425>;
  path?: ConfigPaths2425;
}

const HeavyComponent2425 = memo(function HeavyComponent2425({ config }: HeavyProps2425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2425.displayName = 'HeavyComponent2425';
export default HeavyComponent2425;
