'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2086<T> = T extends (infer U)[]
  ? DeepReadonlyArray2086<U>
  : T extends object
  ? DeepReadonlyObject2086<T>
  : T;

interface DeepReadonlyArray2086<T> extends ReadonlyArray<DeepReadonly2086<T>> {}

type DeepReadonlyObject2086<T> = {
  readonly [P in keyof T]: DeepReadonly2086<T[P]>;
};

type UnionToIntersection2086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2086<T> = UnionToIntersection2086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2086<T extends unknown[], V> = [...T, V];

type TuplifyUnion2086<T, L = LastOf2086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2086<TuplifyUnion2086<Exclude<T, L>>, L>;

type DeepPartial2086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2086<T[P]> }
  : T;

type Paths2086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2086<K, Paths2086<T[K], Prev2086[D]>> : never }[keyof T]
  : never;

type Prev2086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2086 {
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

type ConfigPaths2086 = Paths2086<NestedConfig2086>;

interface HeavyProps2086 {
  config: DeepPartial2086<NestedConfig2086>;
  path?: ConfigPaths2086;
}

const HeavyComponent2086 = memo(function HeavyComponent2086({ config }: HeavyProps2086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2086.displayName = 'HeavyComponent2086';
export default HeavyComponent2086;
