'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2265<T> = T extends (infer U)[]
  ? DeepReadonlyArray2265<U>
  : T extends object
  ? DeepReadonlyObject2265<T>
  : T;

interface DeepReadonlyArray2265<T> extends ReadonlyArray<DeepReadonly2265<T>> {}

type DeepReadonlyObject2265<T> = {
  readonly [P in keyof T]: DeepReadonly2265<T[P]>;
};

type UnionToIntersection2265<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2265<T> = UnionToIntersection2265<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2265<T extends unknown[], V> = [...T, V];

type TuplifyUnion2265<T, L = LastOf2265<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2265<TuplifyUnion2265<Exclude<T, L>>, L>;

type DeepPartial2265<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2265<T[P]> }
  : T;

type Paths2265<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2265<K, Paths2265<T[K], Prev2265[D]>> : never }[keyof T]
  : never;

type Prev2265 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2265<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2265 {
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

type ConfigPaths2265 = Paths2265<NestedConfig2265>;

interface HeavyProps2265 {
  config: DeepPartial2265<NestedConfig2265>;
  path?: ConfigPaths2265;
}

const HeavyComponent2265 = memo(function HeavyComponent2265({ config }: HeavyProps2265) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2265) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2265 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2265: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2265.displayName = 'HeavyComponent2265';
export default HeavyComponent2265;
