'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2625<T> = T extends (infer U)[]
  ? DeepReadonlyArray2625<U>
  : T extends object
  ? DeepReadonlyObject2625<T>
  : T;

interface DeepReadonlyArray2625<T> extends ReadonlyArray<DeepReadonly2625<T>> {}

type DeepReadonlyObject2625<T> = {
  readonly [P in keyof T]: DeepReadonly2625<T[P]>;
};

type UnionToIntersection2625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2625<T> = UnionToIntersection2625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2625<T extends unknown[], V> = [...T, V];

type TuplifyUnion2625<T, L = LastOf2625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2625<TuplifyUnion2625<Exclude<T, L>>, L>;

type DeepPartial2625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2625<T[P]> }
  : T;

type Paths2625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2625<K, Paths2625<T[K], Prev2625[D]>> : never }[keyof T]
  : never;

type Prev2625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2625 {
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

type ConfigPaths2625 = Paths2625<NestedConfig2625>;

interface HeavyProps2625 {
  config: DeepPartial2625<NestedConfig2625>;
  path?: ConfigPaths2625;
}

const HeavyComponent2625 = memo(function HeavyComponent2625({ config }: HeavyProps2625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2625.displayName = 'HeavyComponent2625';
export default HeavyComponent2625;
