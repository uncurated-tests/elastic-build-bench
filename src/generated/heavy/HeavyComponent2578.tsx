'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2578<T> = T extends (infer U)[]
  ? DeepReadonlyArray2578<U>
  : T extends object
  ? DeepReadonlyObject2578<T>
  : T;

interface DeepReadonlyArray2578<T> extends ReadonlyArray<DeepReadonly2578<T>> {}

type DeepReadonlyObject2578<T> = {
  readonly [P in keyof T]: DeepReadonly2578<T[P]>;
};

type UnionToIntersection2578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2578<T> = UnionToIntersection2578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2578<T extends unknown[], V> = [...T, V];

type TuplifyUnion2578<T, L = LastOf2578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2578<TuplifyUnion2578<Exclude<T, L>>, L>;

type DeepPartial2578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2578<T[P]> }
  : T;

type Paths2578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2578<K, Paths2578<T[K], Prev2578[D]>> : never }[keyof T]
  : never;

type Prev2578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2578 {
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

type ConfigPaths2578 = Paths2578<NestedConfig2578>;

interface HeavyProps2578 {
  config: DeepPartial2578<NestedConfig2578>;
  path?: ConfigPaths2578;
}

const HeavyComponent2578 = memo(function HeavyComponent2578({ config }: HeavyProps2578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2578.displayName = 'HeavyComponent2578';
export default HeavyComponent2578;
