'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2158<T> = T extends (infer U)[]
  ? DeepReadonlyArray2158<U>
  : T extends object
  ? DeepReadonlyObject2158<T>
  : T;

interface DeepReadonlyArray2158<T> extends ReadonlyArray<DeepReadonly2158<T>> {}

type DeepReadonlyObject2158<T> = {
  readonly [P in keyof T]: DeepReadonly2158<T[P]>;
};

type UnionToIntersection2158<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2158<T> = UnionToIntersection2158<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2158<T extends unknown[], V> = [...T, V];

type TuplifyUnion2158<T, L = LastOf2158<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2158<TuplifyUnion2158<Exclude<T, L>>, L>;

type DeepPartial2158<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2158<T[P]> }
  : T;

type Paths2158<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2158<K, Paths2158<T[K], Prev2158[D]>> : never }[keyof T]
  : never;

type Prev2158 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2158<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2158 {
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

type ConfigPaths2158 = Paths2158<NestedConfig2158>;

interface HeavyProps2158 {
  config: DeepPartial2158<NestedConfig2158>;
  path?: ConfigPaths2158;
}

const HeavyComponent2158 = memo(function HeavyComponent2158({ config }: HeavyProps2158) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2158) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2158 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2158: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2158.displayName = 'HeavyComponent2158';
export default HeavyComponent2158;
