'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2180<T> = T extends (infer U)[]
  ? DeepReadonlyArray2180<U>
  : T extends object
  ? DeepReadonlyObject2180<T>
  : T;

interface DeepReadonlyArray2180<T> extends ReadonlyArray<DeepReadonly2180<T>> {}

type DeepReadonlyObject2180<T> = {
  readonly [P in keyof T]: DeepReadonly2180<T[P]>;
};

type UnionToIntersection2180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2180<T> = UnionToIntersection2180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2180<T extends unknown[], V> = [...T, V];

type TuplifyUnion2180<T, L = LastOf2180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2180<TuplifyUnion2180<Exclude<T, L>>, L>;

type DeepPartial2180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2180<T[P]> }
  : T;

type Paths2180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2180<K, Paths2180<T[K], Prev2180[D]>> : never }[keyof T]
  : never;

type Prev2180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2180 {
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

type ConfigPaths2180 = Paths2180<NestedConfig2180>;

interface HeavyProps2180 {
  config: DeepPartial2180<NestedConfig2180>;
  path?: ConfigPaths2180;
}

const HeavyComponent2180 = memo(function HeavyComponent2180({ config }: HeavyProps2180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2180.displayName = 'HeavyComponent2180';
export default HeavyComponent2180;
