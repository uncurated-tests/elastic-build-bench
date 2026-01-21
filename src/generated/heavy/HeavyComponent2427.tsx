'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2427<T> = T extends (infer U)[]
  ? DeepReadonlyArray2427<U>
  : T extends object
  ? DeepReadonlyObject2427<T>
  : T;

interface DeepReadonlyArray2427<T> extends ReadonlyArray<DeepReadonly2427<T>> {}

type DeepReadonlyObject2427<T> = {
  readonly [P in keyof T]: DeepReadonly2427<T[P]>;
};

type UnionToIntersection2427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2427<T> = UnionToIntersection2427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2427<T extends unknown[], V> = [...T, V];

type TuplifyUnion2427<T, L = LastOf2427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2427<TuplifyUnion2427<Exclude<T, L>>, L>;

type DeepPartial2427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2427<T[P]> }
  : T;

type Paths2427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2427<K, Paths2427<T[K], Prev2427[D]>> : never }[keyof T]
  : never;

type Prev2427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2427 {
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

type ConfigPaths2427 = Paths2427<NestedConfig2427>;

interface HeavyProps2427 {
  config: DeepPartial2427<NestedConfig2427>;
  path?: ConfigPaths2427;
}

const HeavyComponent2427 = memo(function HeavyComponent2427({ config }: HeavyProps2427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2427.displayName = 'HeavyComponent2427';
export default HeavyComponent2427;
