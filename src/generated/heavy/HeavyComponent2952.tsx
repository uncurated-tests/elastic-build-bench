'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2952<T> = T extends (infer U)[]
  ? DeepReadonlyArray2952<U>
  : T extends object
  ? DeepReadonlyObject2952<T>
  : T;

interface DeepReadonlyArray2952<T> extends ReadonlyArray<DeepReadonly2952<T>> {}

type DeepReadonlyObject2952<T> = {
  readonly [P in keyof T]: DeepReadonly2952<T[P]>;
};

type UnionToIntersection2952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2952<T> = UnionToIntersection2952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2952<T extends unknown[], V> = [...T, V];

type TuplifyUnion2952<T, L = LastOf2952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2952<TuplifyUnion2952<Exclude<T, L>>, L>;

type DeepPartial2952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2952<T[P]> }
  : T;

type Paths2952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2952<K, Paths2952<T[K], Prev2952[D]>> : never }[keyof T]
  : never;

type Prev2952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2952 {
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

type ConfigPaths2952 = Paths2952<NestedConfig2952>;

interface HeavyProps2952 {
  config: DeepPartial2952<NestedConfig2952>;
  path?: ConfigPaths2952;
}

const HeavyComponent2952 = memo(function HeavyComponent2952({ config }: HeavyProps2952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2952.displayName = 'HeavyComponent2952';
export default HeavyComponent2952;
