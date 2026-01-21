'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2714<T> = T extends (infer U)[]
  ? DeepReadonlyArray2714<U>
  : T extends object
  ? DeepReadonlyObject2714<T>
  : T;

interface DeepReadonlyArray2714<T> extends ReadonlyArray<DeepReadonly2714<T>> {}

type DeepReadonlyObject2714<T> = {
  readonly [P in keyof T]: DeepReadonly2714<T[P]>;
};

type UnionToIntersection2714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2714<T> = UnionToIntersection2714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2714<T extends unknown[], V> = [...T, V];

type TuplifyUnion2714<T, L = LastOf2714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2714<TuplifyUnion2714<Exclude<T, L>>, L>;

type DeepPartial2714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2714<T[P]> }
  : T;

type Paths2714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2714<K, Paths2714<T[K], Prev2714[D]>> : never }[keyof T]
  : never;

type Prev2714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2714 {
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

type ConfigPaths2714 = Paths2714<NestedConfig2714>;

interface HeavyProps2714 {
  config: DeepPartial2714<NestedConfig2714>;
  path?: ConfigPaths2714;
}

const HeavyComponent2714 = memo(function HeavyComponent2714({ config }: HeavyProps2714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2714.displayName = 'HeavyComponent2714';
export default HeavyComponent2714;
