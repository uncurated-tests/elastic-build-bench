'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2945<T> = T extends (infer U)[]
  ? DeepReadonlyArray2945<U>
  : T extends object
  ? DeepReadonlyObject2945<T>
  : T;

interface DeepReadonlyArray2945<T> extends ReadonlyArray<DeepReadonly2945<T>> {}

type DeepReadonlyObject2945<T> = {
  readonly [P in keyof T]: DeepReadonly2945<T[P]>;
};

type UnionToIntersection2945<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2945<T> = UnionToIntersection2945<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2945<T extends unknown[], V> = [...T, V];

type TuplifyUnion2945<T, L = LastOf2945<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2945<TuplifyUnion2945<Exclude<T, L>>, L>;

type DeepPartial2945<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2945<T[P]> }
  : T;

type Paths2945<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2945<K, Paths2945<T[K], Prev2945[D]>> : never }[keyof T]
  : never;

type Prev2945 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2945<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2945 {
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

type ConfigPaths2945 = Paths2945<NestedConfig2945>;

interface HeavyProps2945 {
  config: DeepPartial2945<NestedConfig2945>;
  path?: ConfigPaths2945;
}

const HeavyComponent2945 = memo(function HeavyComponent2945({ config }: HeavyProps2945) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2945) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2945 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2945: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2945.displayName = 'HeavyComponent2945';
export default HeavyComponent2945;
