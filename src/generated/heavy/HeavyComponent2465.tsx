'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2465<T> = T extends (infer U)[]
  ? DeepReadonlyArray2465<U>
  : T extends object
  ? DeepReadonlyObject2465<T>
  : T;

interface DeepReadonlyArray2465<T> extends ReadonlyArray<DeepReadonly2465<T>> {}

type DeepReadonlyObject2465<T> = {
  readonly [P in keyof T]: DeepReadonly2465<T[P]>;
};

type UnionToIntersection2465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2465<T> = UnionToIntersection2465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2465<T extends unknown[], V> = [...T, V];

type TuplifyUnion2465<T, L = LastOf2465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2465<TuplifyUnion2465<Exclude<T, L>>, L>;

type DeepPartial2465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2465<T[P]> }
  : T;

type Paths2465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2465<K, Paths2465<T[K], Prev2465[D]>> : never }[keyof T]
  : never;

type Prev2465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2465 {
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

type ConfigPaths2465 = Paths2465<NestedConfig2465>;

interface HeavyProps2465 {
  config: DeepPartial2465<NestedConfig2465>;
  path?: ConfigPaths2465;
}

const HeavyComponent2465 = memo(function HeavyComponent2465({ config }: HeavyProps2465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2465.displayName = 'HeavyComponent2465';
export default HeavyComponent2465;
