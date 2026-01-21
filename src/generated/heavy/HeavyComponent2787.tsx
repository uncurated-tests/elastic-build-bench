'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2787<T> = T extends (infer U)[]
  ? DeepReadonlyArray2787<U>
  : T extends object
  ? DeepReadonlyObject2787<T>
  : T;

interface DeepReadonlyArray2787<T> extends ReadonlyArray<DeepReadonly2787<T>> {}

type DeepReadonlyObject2787<T> = {
  readonly [P in keyof T]: DeepReadonly2787<T[P]>;
};

type UnionToIntersection2787<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2787<T> = UnionToIntersection2787<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2787<T extends unknown[], V> = [...T, V];

type TuplifyUnion2787<T, L = LastOf2787<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2787<TuplifyUnion2787<Exclude<T, L>>, L>;

type DeepPartial2787<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2787<T[P]> }
  : T;

type Paths2787<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2787<K, Paths2787<T[K], Prev2787[D]>> : never }[keyof T]
  : never;

type Prev2787 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2787<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2787 {
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

type ConfigPaths2787 = Paths2787<NestedConfig2787>;

interface HeavyProps2787 {
  config: DeepPartial2787<NestedConfig2787>;
  path?: ConfigPaths2787;
}

const HeavyComponent2787 = memo(function HeavyComponent2787({ config }: HeavyProps2787) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2787) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2787 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2787: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2787.displayName = 'HeavyComponent2787';
export default HeavyComponent2787;
