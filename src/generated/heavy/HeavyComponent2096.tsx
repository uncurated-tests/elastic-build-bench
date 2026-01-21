'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2096<T> = T extends (infer U)[]
  ? DeepReadonlyArray2096<U>
  : T extends object
  ? DeepReadonlyObject2096<T>
  : T;

interface DeepReadonlyArray2096<T> extends ReadonlyArray<DeepReadonly2096<T>> {}

type DeepReadonlyObject2096<T> = {
  readonly [P in keyof T]: DeepReadonly2096<T[P]>;
};

type UnionToIntersection2096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2096<T> = UnionToIntersection2096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2096<T extends unknown[], V> = [...T, V];

type TuplifyUnion2096<T, L = LastOf2096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2096<TuplifyUnion2096<Exclude<T, L>>, L>;

type DeepPartial2096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2096<T[P]> }
  : T;

type Paths2096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2096<K, Paths2096<T[K], Prev2096[D]>> : never }[keyof T]
  : never;

type Prev2096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2096 {
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

type ConfigPaths2096 = Paths2096<NestedConfig2096>;

interface HeavyProps2096 {
  config: DeepPartial2096<NestedConfig2096>;
  path?: ConfigPaths2096;
}

const HeavyComponent2096 = memo(function HeavyComponent2096({ config }: HeavyProps2096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2096.displayName = 'HeavyComponent2096';
export default HeavyComponent2096;
