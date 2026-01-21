'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2937<T> = T extends (infer U)[]
  ? DeepReadonlyArray2937<U>
  : T extends object
  ? DeepReadonlyObject2937<T>
  : T;

interface DeepReadonlyArray2937<T> extends ReadonlyArray<DeepReadonly2937<T>> {}

type DeepReadonlyObject2937<T> = {
  readonly [P in keyof T]: DeepReadonly2937<T[P]>;
};

type UnionToIntersection2937<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2937<T> = UnionToIntersection2937<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2937<T extends unknown[], V> = [...T, V];

type TuplifyUnion2937<T, L = LastOf2937<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2937<TuplifyUnion2937<Exclude<T, L>>, L>;

type DeepPartial2937<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2937<T[P]> }
  : T;

type Paths2937<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2937<K, Paths2937<T[K], Prev2937[D]>> : never }[keyof T]
  : never;

type Prev2937 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2937<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2937 {
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

type ConfigPaths2937 = Paths2937<NestedConfig2937>;

interface HeavyProps2937 {
  config: DeepPartial2937<NestedConfig2937>;
  path?: ConfigPaths2937;
}

const HeavyComponent2937 = memo(function HeavyComponent2937({ config }: HeavyProps2937) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2937) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2937 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2937: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2937.displayName = 'HeavyComponent2937';
export default HeavyComponent2937;
