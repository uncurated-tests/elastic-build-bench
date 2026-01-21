'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2761<T> = T extends (infer U)[]
  ? DeepReadonlyArray2761<U>
  : T extends object
  ? DeepReadonlyObject2761<T>
  : T;

interface DeepReadonlyArray2761<T> extends ReadonlyArray<DeepReadonly2761<T>> {}

type DeepReadonlyObject2761<T> = {
  readonly [P in keyof T]: DeepReadonly2761<T[P]>;
};

type UnionToIntersection2761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2761<T> = UnionToIntersection2761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2761<T extends unknown[], V> = [...T, V];

type TuplifyUnion2761<T, L = LastOf2761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2761<TuplifyUnion2761<Exclude<T, L>>, L>;

type DeepPartial2761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2761<T[P]> }
  : T;

type Paths2761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2761<K, Paths2761<T[K], Prev2761[D]>> : never }[keyof T]
  : never;

type Prev2761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2761 {
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

type ConfigPaths2761 = Paths2761<NestedConfig2761>;

interface HeavyProps2761 {
  config: DeepPartial2761<NestedConfig2761>;
  path?: ConfigPaths2761;
}

const HeavyComponent2761 = memo(function HeavyComponent2761({ config }: HeavyProps2761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2761.displayName = 'HeavyComponent2761';
export default HeavyComponent2761;
