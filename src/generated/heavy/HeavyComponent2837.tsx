'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2837<T> = T extends (infer U)[]
  ? DeepReadonlyArray2837<U>
  : T extends object
  ? DeepReadonlyObject2837<T>
  : T;

interface DeepReadonlyArray2837<T> extends ReadonlyArray<DeepReadonly2837<T>> {}

type DeepReadonlyObject2837<T> = {
  readonly [P in keyof T]: DeepReadonly2837<T[P]>;
};

type UnionToIntersection2837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2837<T> = UnionToIntersection2837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2837<T extends unknown[], V> = [...T, V];

type TuplifyUnion2837<T, L = LastOf2837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2837<TuplifyUnion2837<Exclude<T, L>>, L>;

type DeepPartial2837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2837<T[P]> }
  : T;

type Paths2837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2837<K, Paths2837<T[K], Prev2837[D]>> : never }[keyof T]
  : never;

type Prev2837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2837 {
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

type ConfigPaths2837 = Paths2837<NestedConfig2837>;

interface HeavyProps2837 {
  config: DeepPartial2837<NestedConfig2837>;
  path?: ConfigPaths2837;
}

const HeavyComponent2837 = memo(function HeavyComponent2837({ config }: HeavyProps2837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2837.displayName = 'HeavyComponent2837';
export default HeavyComponent2837;
