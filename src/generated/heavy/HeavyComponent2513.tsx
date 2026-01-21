'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2513<T> = T extends (infer U)[]
  ? DeepReadonlyArray2513<U>
  : T extends object
  ? DeepReadonlyObject2513<T>
  : T;

interface DeepReadonlyArray2513<T> extends ReadonlyArray<DeepReadonly2513<T>> {}

type DeepReadonlyObject2513<T> = {
  readonly [P in keyof T]: DeepReadonly2513<T[P]>;
};

type UnionToIntersection2513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2513<T> = UnionToIntersection2513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2513<T extends unknown[], V> = [...T, V];

type TuplifyUnion2513<T, L = LastOf2513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2513<TuplifyUnion2513<Exclude<T, L>>, L>;

type DeepPartial2513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2513<T[P]> }
  : T;

type Paths2513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2513<K, Paths2513<T[K], Prev2513[D]>> : never }[keyof T]
  : never;

type Prev2513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2513 {
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

type ConfigPaths2513 = Paths2513<NestedConfig2513>;

interface HeavyProps2513 {
  config: DeepPartial2513<NestedConfig2513>;
  path?: ConfigPaths2513;
}

const HeavyComponent2513 = memo(function HeavyComponent2513({ config }: HeavyProps2513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2513.displayName = 'HeavyComponent2513';
export default HeavyComponent2513;
