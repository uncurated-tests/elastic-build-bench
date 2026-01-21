'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2750<T> = T extends (infer U)[]
  ? DeepReadonlyArray2750<U>
  : T extends object
  ? DeepReadonlyObject2750<T>
  : T;

interface DeepReadonlyArray2750<T> extends ReadonlyArray<DeepReadonly2750<T>> {}

type DeepReadonlyObject2750<T> = {
  readonly [P in keyof T]: DeepReadonly2750<T[P]>;
};

type UnionToIntersection2750<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2750<T> = UnionToIntersection2750<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2750<T extends unknown[], V> = [...T, V];

type TuplifyUnion2750<T, L = LastOf2750<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2750<TuplifyUnion2750<Exclude<T, L>>, L>;

type DeepPartial2750<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2750<T[P]> }
  : T;

type Paths2750<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2750<K, Paths2750<T[K], Prev2750[D]>> : never }[keyof T]
  : never;

type Prev2750 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2750<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2750 {
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

type ConfigPaths2750 = Paths2750<NestedConfig2750>;

interface HeavyProps2750 {
  config: DeepPartial2750<NestedConfig2750>;
  path?: ConfigPaths2750;
}

const HeavyComponent2750 = memo(function HeavyComponent2750({ config }: HeavyProps2750) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2750) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2750 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2750: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2750.displayName = 'HeavyComponent2750';
export default HeavyComponent2750;
