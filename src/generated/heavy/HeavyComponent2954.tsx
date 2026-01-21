'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2954<T> = T extends (infer U)[]
  ? DeepReadonlyArray2954<U>
  : T extends object
  ? DeepReadonlyObject2954<T>
  : T;

interface DeepReadonlyArray2954<T> extends ReadonlyArray<DeepReadonly2954<T>> {}

type DeepReadonlyObject2954<T> = {
  readonly [P in keyof T]: DeepReadonly2954<T[P]>;
};

type UnionToIntersection2954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2954<T> = UnionToIntersection2954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2954<T extends unknown[], V> = [...T, V];

type TuplifyUnion2954<T, L = LastOf2954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2954<TuplifyUnion2954<Exclude<T, L>>, L>;

type DeepPartial2954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2954<T[P]> }
  : T;

type Paths2954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2954<K, Paths2954<T[K], Prev2954[D]>> : never }[keyof T]
  : never;

type Prev2954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2954 {
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

type ConfigPaths2954 = Paths2954<NestedConfig2954>;

interface HeavyProps2954 {
  config: DeepPartial2954<NestedConfig2954>;
  path?: ConfigPaths2954;
}

const HeavyComponent2954 = memo(function HeavyComponent2954({ config }: HeavyProps2954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2954.displayName = 'HeavyComponent2954';
export default HeavyComponent2954;
