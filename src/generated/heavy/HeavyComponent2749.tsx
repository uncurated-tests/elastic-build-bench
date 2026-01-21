'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2749<T> = T extends (infer U)[]
  ? DeepReadonlyArray2749<U>
  : T extends object
  ? DeepReadonlyObject2749<T>
  : T;

interface DeepReadonlyArray2749<T> extends ReadonlyArray<DeepReadonly2749<T>> {}

type DeepReadonlyObject2749<T> = {
  readonly [P in keyof T]: DeepReadonly2749<T[P]>;
};

type UnionToIntersection2749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2749<T> = UnionToIntersection2749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2749<T extends unknown[], V> = [...T, V];

type TuplifyUnion2749<T, L = LastOf2749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2749<TuplifyUnion2749<Exclude<T, L>>, L>;

type DeepPartial2749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2749<T[P]> }
  : T;

type Paths2749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2749<K, Paths2749<T[K], Prev2749[D]>> : never }[keyof T]
  : never;

type Prev2749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2749 {
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

type ConfigPaths2749 = Paths2749<NestedConfig2749>;

interface HeavyProps2749 {
  config: DeepPartial2749<NestedConfig2749>;
  path?: ConfigPaths2749;
}

const HeavyComponent2749 = memo(function HeavyComponent2749({ config }: HeavyProps2749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2749.displayName = 'HeavyComponent2749';
export default HeavyComponent2749;
