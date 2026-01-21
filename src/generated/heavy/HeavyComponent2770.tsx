'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2770<T> = T extends (infer U)[]
  ? DeepReadonlyArray2770<U>
  : T extends object
  ? DeepReadonlyObject2770<T>
  : T;

interface DeepReadonlyArray2770<T> extends ReadonlyArray<DeepReadonly2770<T>> {}

type DeepReadonlyObject2770<T> = {
  readonly [P in keyof T]: DeepReadonly2770<T[P]>;
};

type UnionToIntersection2770<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2770<T> = UnionToIntersection2770<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2770<T extends unknown[], V> = [...T, V];

type TuplifyUnion2770<T, L = LastOf2770<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2770<TuplifyUnion2770<Exclude<T, L>>, L>;

type DeepPartial2770<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2770<T[P]> }
  : T;

type Paths2770<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2770<K, Paths2770<T[K], Prev2770[D]>> : never }[keyof T]
  : never;

type Prev2770 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2770<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2770 {
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

type ConfigPaths2770 = Paths2770<NestedConfig2770>;

interface HeavyProps2770 {
  config: DeepPartial2770<NestedConfig2770>;
  path?: ConfigPaths2770;
}

const HeavyComponent2770 = memo(function HeavyComponent2770({ config }: HeavyProps2770) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2770) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2770 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2770: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2770.displayName = 'HeavyComponent2770';
export default HeavyComponent2770;
