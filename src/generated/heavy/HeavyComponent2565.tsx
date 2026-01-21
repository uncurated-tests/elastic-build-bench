'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2565<T> = T extends (infer U)[]
  ? DeepReadonlyArray2565<U>
  : T extends object
  ? DeepReadonlyObject2565<T>
  : T;

interface DeepReadonlyArray2565<T> extends ReadonlyArray<DeepReadonly2565<T>> {}

type DeepReadonlyObject2565<T> = {
  readonly [P in keyof T]: DeepReadonly2565<T[P]>;
};

type UnionToIntersection2565<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2565<T> = UnionToIntersection2565<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2565<T extends unknown[], V> = [...T, V];

type TuplifyUnion2565<T, L = LastOf2565<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2565<TuplifyUnion2565<Exclude<T, L>>, L>;

type DeepPartial2565<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2565<T[P]> }
  : T;

type Paths2565<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2565<K, Paths2565<T[K], Prev2565[D]>> : never }[keyof T]
  : never;

type Prev2565 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2565<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2565 {
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

type ConfigPaths2565 = Paths2565<NestedConfig2565>;

interface HeavyProps2565 {
  config: DeepPartial2565<NestedConfig2565>;
  path?: ConfigPaths2565;
}

const HeavyComponent2565 = memo(function HeavyComponent2565({ config }: HeavyProps2565) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2565) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2565 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2565: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2565.displayName = 'HeavyComponent2565';
export default HeavyComponent2565;
