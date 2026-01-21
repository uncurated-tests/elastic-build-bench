'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2726<T> = T extends (infer U)[]
  ? DeepReadonlyArray2726<U>
  : T extends object
  ? DeepReadonlyObject2726<T>
  : T;

interface DeepReadonlyArray2726<T> extends ReadonlyArray<DeepReadonly2726<T>> {}

type DeepReadonlyObject2726<T> = {
  readonly [P in keyof T]: DeepReadonly2726<T[P]>;
};

type UnionToIntersection2726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2726<T> = UnionToIntersection2726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2726<T extends unknown[], V> = [...T, V];

type TuplifyUnion2726<T, L = LastOf2726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2726<TuplifyUnion2726<Exclude<T, L>>, L>;

type DeepPartial2726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2726<T[P]> }
  : T;

type Paths2726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2726<K, Paths2726<T[K], Prev2726[D]>> : never }[keyof T]
  : never;

type Prev2726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2726 {
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

type ConfigPaths2726 = Paths2726<NestedConfig2726>;

interface HeavyProps2726 {
  config: DeepPartial2726<NestedConfig2726>;
  path?: ConfigPaths2726;
}

const HeavyComponent2726 = memo(function HeavyComponent2726({ config }: HeavyProps2726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2726.displayName = 'HeavyComponent2726';
export default HeavyComponent2726;
