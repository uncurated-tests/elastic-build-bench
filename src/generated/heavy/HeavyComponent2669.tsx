'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2669<T> = T extends (infer U)[]
  ? DeepReadonlyArray2669<U>
  : T extends object
  ? DeepReadonlyObject2669<T>
  : T;

interface DeepReadonlyArray2669<T> extends ReadonlyArray<DeepReadonly2669<T>> {}

type DeepReadonlyObject2669<T> = {
  readonly [P in keyof T]: DeepReadonly2669<T[P]>;
};

type UnionToIntersection2669<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2669<T> = UnionToIntersection2669<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2669<T extends unknown[], V> = [...T, V];

type TuplifyUnion2669<T, L = LastOf2669<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2669<TuplifyUnion2669<Exclude<T, L>>, L>;

type DeepPartial2669<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2669<T[P]> }
  : T;

type Paths2669<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2669<K, Paths2669<T[K], Prev2669[D]>> : never }[keyof T]
  : never;

type Prev2669 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2669<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2669 {
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

type ConfigPaths2669 = Paths2669<NestedConfig2669>;

interface HeavyProps2669 {
  config: DeepPartial2669<NestedConfig2669>;
  path?: ConfigPaths2669;
}

const HeavyComponent2669 = memo(function HeavyComponent2669({ config }: HeavyProps2669) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2669) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2669 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2669: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2669.displayName = 'HeavyComponent2669';
export default HeavyComponent2669;
