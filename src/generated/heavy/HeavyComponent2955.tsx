'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2955<T> = T extends (infer U)[]
  ? DeepReadonlyArray2955<U>
  : T extends object
  ? DeepReadonlyObject2955<T>
  : T;

interface DeepReadonlyArray2955<T> extends ReadonlyArray<DeepReadonly2955<T>> {}

type DeepReadonlyObject2955<T> = {
  readonly [P in keyof T]: DeepReadonly2955<T[P]>;
};

type UnionToIntersection2955<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2955<T> = UnionToIntersection2955<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2955<T extends unknown[], V> = [...T, V];

type TuplifyUnion2955<T, L = LastOf2955<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2955<TuplifyUnion2955<Exclude<T, L>>, L>;

type DeepPartial2955<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2955<T[P]> }
  : T;

type Paths2955<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2955<K, Paths2955<T[K], Prev2955[D]>> : never }[keyof T]
  : never;

type Prev2955 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2955<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2955 {
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

type ConfigPaths2955 = Paths2955<NestedConfig2955>;

interface HeavyProps2955 {
  config: DeepPartial2955<NestedConfig2955>;
  path?: ConfigPaths2955;
}

const HeavyComponent2955 = memo(function HeavyComponent2955({ config }: HeavyProps2955) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2955) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2955 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2955: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2955.displayName = 'HeavyComponent2955';
export default HeavyComponent2955;
