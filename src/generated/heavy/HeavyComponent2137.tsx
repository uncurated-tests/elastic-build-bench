'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2137<T> = T extends (infer U)[]
  ? DeepReadonlyArray2137<U>
  : T extends object
  ? DeepReadonlyObject2137<T>
  : T;

interface DeepReadonlyArray2137<T> extends ReadonlyArray<DeepReadonly2137<T>> {}

type DeepReadonlyObject2137<T> = {
  readonly [P in keyof T]: DeepReadonly2137<T[P]>;
};

type UnionToIntersection2137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2137<T> = UnionToIntersection2137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2137<T extends unknown[], V> = [...T, V];

type TuplifyUnion2137<T, L = LastOf2137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2137<TuplifyUnion2137<Exclude<T, L>>, L>;

type DeepPartial2137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2137<T[P]> }
  : T;

type Paths2137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2137<K, Paths2137<T[K], Prev2137[D]>> : never }[keyof T]
  : never;

type Prev2137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2137 {
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

type ConfigPaths2137 = Paths2137<NestedConfig2137>;

interface HeavyProps2137 {
  config: DeepPartial2137<NestedConfig2137>;
  path?: ConfigPaths2137;
}

const HeavyComponent2137 = memo(function HeavyComponent2137({ config }: HeavyProps2137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2137.displayName = 'HeavyComponent2137';
export default HeavyComponent2137;
