'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2462<T> = T extends (infer U)[]
  ? DeepReadonlyArray2462<U>
  : T extends object
  ? DeepReadonlyObject2462<T>
  : T;

interface DeepReadonlyArray2462<T> extends ReadonlyArray<DeepReadonly2462<T>> {}

type DeepReadonlyObject2462<T> = {
  readonly [P in keyof T]: DeepReadonly2462<T[P]>;
};

type UnionToIntersection2462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2462<T> = UnionToIntersection2462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2462<T extends unknown[], V> = [...T, V];

type TuplifyUnion2462<T, L = LastOf2462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2462<TuplifyUnion2462<Exclude<T, L>>, L>;

type DeepPartial2462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2462<T[P]> }
  : T;

type Paths2462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2462<K, Paths2462<T[K], Prev2462[D]>> : never }[keyof T]
  : never;

type Prev2462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2462 {
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

type ConfigPaths2462 = Paths2462<NestedConfig2462>;

interface HeavyProps2462 {
  config: DeepPartial2462<NestedConfig2462>;
  path?: ConfigPaths2462;
}

const HeavyComponent2462 = memo(function HeavyComponent2462({ config }: HeavyProps2462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2462.displayName = 'HeavyComponent2462';
export default HeavyComponent2462;
