'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2445<T> = T extends (infer U)[]
  ? DeepReadonlyArray2445<U>
  : T extends object
  ? DeepReadonlyObject2445<T>
  : T;

interface DeepReadonlyArray2445<T> extends ReadonlyArray<DeepReadonly2445<T>> {}

type DeepReadonlyObject2445<T> = {
  readonly [P in keyof T]: DeepReadonly2445<T[P]>;
};

type UnionToIntersection2445<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2445<T> = UnionToIntersection2445<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2445<T extends unknown[], V> = [...T, V];

type TuplifyUnion2445<T, L = LastOf2445<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2445<TuplifyUnion2445<Exclude<T, L>>, L>;

type DeepPartial2445<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2445<T[P]> }
  : T;

type Paths2445<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2445<K, Paths2445<T[K], Prev2445[D]>> : never }[keyof T]
  : never;

type Prev2445 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2445<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2445 {
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

type ConfigPaths2445 = Paths2445<NestedConfig2445>;

interface HeavyProps2445 {
  config: DeepPartial2445<NestedConfig2445>;
  path?: ConfigPaths2445;
}

const HeavyComponent2445 = memo(function HeavyComponent2445({ config }: HeavyProps2445) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2445) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2445 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2445: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2445.displayName = 'HeavyComponent2445';
export default HeavyComponent2445;
