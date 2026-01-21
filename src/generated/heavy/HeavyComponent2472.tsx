'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2472<T> = T extends (infer U)[]
  ? DeepReadonlyArray2472<U>
  : T extends object
  ? DeepReadonlyObject2472<T>
  : T;

interface DeepReadonlyArray2472<T> extends ReadonlyArray<DeepReadonly2472<T>> {}

type DeepReadonlyObject2472<T> = {
  readonly [P in keyof T]: DeepReadonly2472<T[P]>;
};

type UnionToIntersection2472<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2472<T> = UnionToIntersection2472<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2472<T extends unknown[], V> = [...T, V];

type TuplifyUnion2472<T, L = LastOf2472<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2472<TuplifyUnion2472<Exclude<T, L>>, L>;

type DeepPartial2472<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2472<T[P]> }
  : T;

type Paths2472<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2472<K, Paths2472<T[K], Prev2472[D]>> : never }[keyof T]
  : never;

type Prev2472 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2472<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2472 {
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

type ConfigPaths2472 = Paths2472<NestedConfig2472>;

interface HeavyProps2472 {
  config: DeepPartial2472<NestedConfig2472>;
  path?: ConfigPaths2472;
}

const HeavyComponent2472 = memo(function HeavyComponent2472({ config }: HeavyProps2472) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2472) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2472 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2472: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2472.displayName = 'HeavyComponent2472';
export default HeavyComponent2472;
