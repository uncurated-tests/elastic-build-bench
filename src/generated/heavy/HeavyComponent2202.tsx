'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2202<T> = T extends (infer U)[]
  ? DeepReadonlyArray2202<U>
  : T extends object
  ? DeepReadonlyObject2202<T>
  : T;

interface DeepReadonlyArray2202<T> extends ReadonlyArray<DeepReadonly2202<T>> {}

type DeepReadonlyObject2202<T> = {
  readonly [P in keyof T]: DeepReadonly2202<T[P]>;
};

type UnionToIntersection2202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2202<T> = UnionToIntersection2202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2202<T extends unknown[], V> = [...T, V];

type TuplifyUnion2202<T, L = LastOf2202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2202<TuplifyUnion2202<Exclude<T, L>>, L>;

type DeepPartial2202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2202<T[P]> }
  : T;

type Paths2202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2202<K, Paths2202<T[K], Prev2202[D]>> : never }[keyof T]
  : never;

type Prev2202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2202 {
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

type ConfigPaths2202 = Paths2202<NestedConfig2202>;

interface HeavyProps2202 {
  config: DeepPartial2202<NestedConfig2202>;
  path?: ConfigPaths2202;
}

const HeavyComponent2202 = memo(function HeavyComponent2202({ config }: HeavyProps2202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2202.displayName = 'HeavyComponent2202';
export default HeavyComponent2202;
