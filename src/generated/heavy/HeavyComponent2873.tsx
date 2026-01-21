'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2873<T> = T extends (infer U)[]
  ? DeepReadonlyArray2873<U>
  : T extends object
  ? DeepReadonlyObject2873<T>
  : T;

interface DeepReadonlyArray2873<T> extends ReadonlyArray<DeepReadonly2873<T>> {}

type DeepReadonlyObject2873<T> = {
  readonly [P in keyof T]: DeepReadonly2873<T[P]>;
};

type UnionToIntersection2873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2873<T> = UnionToIntersection2873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2873<T extends unknown[], V> = [...T, V];

type TuplifyUnion2873<T, L = LastOf2873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2873<TuplifyUnion2873<Exclude<T, L>>, L>;

type DeepPartial2873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2873<T[P]> }
  : T;

type Paths2873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2873<K, Paths2873<T[K], Prev2873[D]>> : never }[keyof T]
  : never;

type Prev2873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2873 {
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

type ConfigPaths2873 = Paths2873<NestedConfig2873>;

interface HeavyProps2873 {
  config: DeepPartial2873<NestedConfig2873>;
  path?: ConfigPaths2873;
}

const HeavyComponent2873 = memo(function HeavyComponent2873({ config }: HeavyProps2873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2873.displayName = 'HeavyComponent2873';
export default HeavyComponent2873;
