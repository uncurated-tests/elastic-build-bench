'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2274<T> = T extends (infer U)[]
  ? DeepReadonlyArray2274<U>
  : T extends object
  ? DeepReadonlyObject2274<T>
  : T;

interface DeepReadonlyArray2274<T> extends ReadonlyArray<DeepReadonly2274<T>> {}

type DeepReadonlyObject2274<T> = {
  readonly [P in keyof T]: DeepReadonly2274<T[P]>;
};

type UnionToIntersection2274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2274<T> = UnionToIntersection2274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2274<T extends unknown[], V> = [...T, V];

type TuplifyUnion2274<T, L = LastOf2274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2274<TuplifyUnion2274<Exclude<T, L>>, L>;

type DeepPartial2274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2274<T[P]> }
  : T;

type Paths2274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2274<K, Paths2274<T[K], Prev2274[D]>> : never }[keyof T]
  : never;

type Prev2274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2274 {
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

type ConfigPaths2274 = Paths2274<NestedConfig2274>;

interface HeavyProps2274 {
  config: DeepPartial2274<NestedConfig2274>;
  path?: ConfigPaths2274;
}

const HeavyComponent2274 = memo(function HeavyComponent2274({ config }: HeavyProps2274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2274.displayName = 'HeavyComponent2274';
export default HeavyComponent2274;
