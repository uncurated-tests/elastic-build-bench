'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2867<T> = T extends (infer U)[]
  ? DeepReadonlyArray2867<U>
  : T extends object
  ? DeepReadonlyObject2867<T>
  : T;

interface DeepReadonlyArray2867<T> extends ReadonlyArray<DeepReadonly2867<T>> {}

type DeepReadonlyObject2867<T> = {
  readonly [P in keyof T]: DeepReadonly2867<T[P]>;
};

type UnionToIntersection2867<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2867<T> = UnionToIntersection2867<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2867<T extends unknown[], V> = [...T, V];

type TuplifyUnion2867<T, L = LastOf2867<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2867<TuplifyUnion2867<Exclude<T, L>>, L>;

type DeepPartial2867<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2867<T[P]> }
  : T;

type Paths2867<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2867<K, Paths2867<T[K], Prev2867[D]>> : never }[keyof T]
  : never;

type Prev2867 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2867<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2867 {
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

type ConfigPaths2867 = Paths2867<NestedConfig2867>;

interface HeavyProps2867 {
  config: DeepPartial2867<NestedConfig2867>;
  path?: ConfigPaths2867;
}

const HeavyComponent2867 = memo(function HeavyComponent2867({ config }: HeavyProps2867) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2867) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2867 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2867: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2867.displayName = 'HeavyComponent2867';
export default HeavyComponent2867;
