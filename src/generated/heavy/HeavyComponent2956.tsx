'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2956<T> = T extends (infer U)[]
  ? DeepReadonlyArray2956<U>
  : T extends object
  ? DeepReadonlyObject2956<T>
  : T;

interface DeepReadonlyArray2956<T> extends ReadonlyArray<DeepReadonly2956<T>> {}

type DeepReadonlyObject2956<T> = {
  readonly [P in keyof T]: DeepReadonly2956<T[P]>;
};

type UnionToIntersection2956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2956<T> = UnionToIntersection2956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2956<T extends unknown[], V> = [...T, V];

type TuplifyUnion2956<T, L = LastOf2956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2956<TuplifyUnion2956<Exclude<T, L>>, L>;

type DeepPartial2956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2956<T[P]> }
  : T;

type Paths2956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2956<K, Paths2956<T[K], Prev2956[D]>> : never }[keyof T]
  : never;

type Prev2956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2956 {
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

type ConfigPaths2956 = Paths2956<NestedConfig2956>;

interface HeavyProps2956 {
  config: DeepPartial2956<NestedConfig2956>;
  path?: ConfigPaths2956;
}

const HeavyComponent2956 = memo(function HeavyComponent2956({ config }: HeavyProps2956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2956.displayName = 'HeavyComponent2956';
export default HeavyComponent2956;
