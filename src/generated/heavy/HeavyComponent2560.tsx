'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2560<T> = T extends (infer U)[]
  ? DeepReadonlyArray2560<U>
  : T extends object
  ? DeepReadonlyObject2560<T>
  : T;

interface DeepReadonlyArray2560<T> extends ReadonlyArray<DeepReadonly2560<T>> {}

type DeepReadonlyObject2560<T> = {
  readonly [P in keyof T]: DeepReadonly2560<T[P]>;
};

type UnionToIntersection2560<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2560<T> = UnionToIntersection2560<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2560<T extends unknown[], V> = [...T, V];

type TuplifyUnion2560<T, L = LastOf2560<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2560<TuplifyUnion2560<Exclude<T, L>>, L>;

type DeepPartial2560<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2560<T[P]> }
  : T;

type Paths2560<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2560<K, Paths2560<T[K], Prev2560[D]>> : never }[keyof T]
  : never;

type Prev2560 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2560<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2560 {
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

type ConfigPaths2560 = Paths2560<NestedConfig2560>;

interface HeavyProps2560 {
  config: DeepPartial2560<NestedConfig2560>;
  path?: ConfigPaths2560;
}

const HeavyComponent2560 = memo(function HeavyComponent2560({ config }: HeavyProps2560) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2560) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2560 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2560: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2560.displayName = 'HeavyComponent2560';
export default HeavyComponent2560;
