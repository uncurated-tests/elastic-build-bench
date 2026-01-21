'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2106<T> = T extends (infer U)[]
  ? DeepReadonlyArray2106<U>
  : T extends object
  ? DeepReadonlyObject2106<T>
  : T;

interface DeepReadonlyArray2106<T> extends ReadonlyArray<DeepReadonly2106<T>> {}

type DeepReadonlyObject2106<T> = {
  readonly [P in keyof T]: DeepReadonly2106<T[P]>;
};

type UnionToIntersection2106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2106<T> = UnionToIntersection2106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2106<T extends unknown[], V> = [...T, V];

type TuplifyUnion2106<T, L = LastOf2106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2106<TuplifyUnion2106<Exclude<T, L>>, L>;

type DeepPartial2106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2106<T[P]> }
  : T;

type Paths2106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2106<K, Paths2106<T[K], Prev2106[D]>> : never }[keyof T]
  : never;

type Prev2106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2106 {
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

type ConfigPaths2106 = Paths2106<NestedConfig2106>;

interface HeavyProps2106 {
  config: DeepPartial2106<NestedConfig2106>;
  path?: ConfigPaths2106;
}

const HeavyComponent2106 = memo(function HeavyComponent2106({ config }: HeavyProps2106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2106.displayName = 'HeavyComponent2106';
export default HeavyComponent2106;
