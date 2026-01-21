'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2176<T> = T extends (infer U)[]
  ? DeepReadonlyArray2176<U>
  : T extends object
  ? DeepReadonlyObject2176<T>
  : T;

interface DeepReadonlyArray2176<T> extends ReadonlyArray<DeepReadonly2176<T>> {}

type DeepReadonlyObject2176<T> = {
  readonly [P in keyof T]: DeepReadonly2176<T[P]>;
};

type UnionToIntersection2176<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2176<T> = UnionToIntersection2176<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2176<T extends unknown[], V> = [...T, V];

type TuplifyUnion2176<T, L = LastOf2176<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2176<TuplifyUnion2176<Exclude<T, L>>, L>;

type DeepPartial2176<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2176<T[P]> }
  : T;

type Paths2176<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2176<K, Paths2176<T[K], Prev2176[D]>> : never }[keyof T]
  : never;

type Prev2176 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2176<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2176 {
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

type ConfigPaths2176 = Paths2176<NestedConfig2176>;

interface HeavyProps2176 {
  config: DeepPartial2176<NestedConfig2176>;
  path?: ConfigPaths2176;
}

const HeavyComponent2176 = memo(function HeavyComponent2176({ config }: HeavyProps2176) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2176) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2176 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2176: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2176.displayName = 'HeavyComponent2176';
export default HeavyComponent2176;
