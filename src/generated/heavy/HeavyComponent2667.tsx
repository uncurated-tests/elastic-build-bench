'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2667<T> = T extends (infer U)[]
  ? DeepReadonlyArray2667<U>
  : T extends object
  ? DeepReadonlyObject2667<T>
  : T;

interface DeepReadonlyArray2667<T> extends ReadonlyArray<DeepReadonly2667<T>> {}

type DeepReadonlyObject2667<T> = {
  readonly [P in keyof T]: DeepReadonly2667<T[P]>;
};

type UnionToIntersection2667<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2667<T> = UnionToIntersection2667<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2667<T extends unknown[], V> = [...T, V];

type TuplifyUnion2667<T, L = LastOf2667<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2667<TuplifyUnion2667<Exclude<T, L>>, L>;

type DeepPartial2667<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2667<T[P]> }
  : T;

type Paths2667<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2667<K, Paths2667<T[K], Prev2667[D]>> : never }[keyof T]
  : never;

type Prev2667 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2667<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2667 {
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

type ConfigPaths2667 = Paths2667<NestedConfig2667>;

interface HeavyProps2667 {
  config: DeepPartial2667<NestedConfig2667>;
  path?: ConfigPaths2667;
}

const HeavyComponent2667 = memo(function HeavyComponent2667({ config }: HeavyProps2667) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2667) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2667 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2667: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2667.displayName = 'HeavyComponent2667';
export default HeavyComponent2667;
