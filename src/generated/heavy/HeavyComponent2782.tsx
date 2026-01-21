'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2782<T> = T extends (infer U)[]
  ? DeepReadonlyArray2782<U>
  : T extends object
  ? DeepReadonlyObject2782<T>
  : T;

interface DeepReadonlyArray2782<T> extends ReadonlyArray<DeepReadonly2782<T>> {}

type DeepReadonlyObject2782<T> = {
  readonly [P in keyof T]: DeepReadonly2782<T[P]>;
};

type UnionToIntersection2782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2782<T> = UnionToIntersection2782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2782<T extends unknown[], V> = [...T, V];

type TuplifyUnion2782<T, L = LastOf2782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2782<TuplifyUnion2782<Exclude<T, L>>, L>;

type DeepPartial2782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2782<T[P]> }
  : T;

type Paths2782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2782<K, Paths2782<T[K], Prev2782[D]>> : never }[keyof T]
  : never;

type Prev2782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2782 {
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

type ConfigPaths2782 = Paths2782<NestedConfig2782>;

interface HeavyProps2782 {
  config: DeepPartial2782<NestedConfig2782>;
  path?: ConfigPaths2782;
}

const HeavyComponent2782 = memo(function HeavyComponent2782({ config }: HeavyProps2782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2782.displayName = 'HeavyComponent2782';
export default HeavyComponent2782;
