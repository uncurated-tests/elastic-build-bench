'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2600<T> = T extends (infer U)[]
  ? DeepReadonlyArray2600<U>
  : T extends object
  ? DeepReadonlyObject2600<T>
  : T;

interface DeepReadonlyArray2600<T> extends ReadonlyArray<DeepReadonly2600<T>> {}

type DeepReadonlyObject2600<T> = {
  readonly [P in keyof T]: DeepReadonly2600<T[P]>;
};

type UnionToIntersection2600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2600<T> = UnionToIntersection2600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2600<T extends unknown[], V> = [...T, V];

type TuplifyUnion2600<T, L = LastOf2600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2600<TuplifyUnion2600<Exclude<T, L>>, L>;

type DeepPartial2600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2600<T[P]> }
  : T;

type Paths2600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2600<K, Paths2600<T[K], Prev2600[D]>> : never }[keyof T]
  : never;

type Prev2600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2600 {
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

type ConfigPaths2600 = Paths2600<NestedConfig2600>;

interface HeavyProps2600 {
  config: DeepPartial2600<NestedConfig2600>;
  path?: ConfigPaths2600;
}

const HeavyComponent2600 = memo(function HeavyComponent2600({ config }: HeavyProps2600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2600.displayName = 'HeavyComponent2600';
export default HeavyComponent2600;
