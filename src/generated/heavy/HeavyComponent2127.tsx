'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2127<T> = T extends (infer U)[]
  ? DeepReadonlyArray2127<U>
  : T extends object
  ? DeepReadonlyObject2127<T>
  : T;

interface DeepReadonlyArray2127<T> extends ReadonlyArray<DeepReadonly2127<T>> {}

type DeepReadonlyObject2127<T> = {
  readonly [P in keyof T]: DeepReadonly2127<T[P]>;
};

type UnionToIntersection2127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2127<T> = UnionToIntersection2127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2127<T extends unknown[], V> = [...T, V];

type TuplifyUnion2127<T, L = LastOf2127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2127<TuplifyUnion2127<Exclude<T, L>>, L>;

type DeepPartial2127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2127<T[P]> }
  : T;

type Paths2127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2127<K, Paths2127<T[K], Prev2127[D]>> : never }[keyof T]
  : never;

type Prev2127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2127 {
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

type ConfigPaths2127 = Paths2127<NestedConfig2127>;

interface HeavyProps2127 {
  config: DeepPartial2127<NestedConfig2127>;
  path?: ConfigPaths2127;
}

const HeavyComponent2127 = memo(function HeavyComponent2127({ config }: HeavyProps2127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2127.displayName = 'HeavyComponent2127';
export default HeavyComponent2127;
