'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2654<T> = T extends (infer U)[]
  ? DeepReadonlyArray2654<U>
  : T extends object
  ? DeepReadonlyObject2654<T>
  : T;

interface DeepReadonlyArray2654<T> extends ReadonlyArray<DeepReadonly2654<T>> {}

type DeepReadonlyObject2654<T> = {
  readonly [P in keyof T]: DeepReadonly2654<T[P]>;
};

type UnionToIntersection2654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2654<T> = UnionToIntersection2654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2654<T extends unknown[], V> = [...T, V];

type TuplifyUnion2654<T, L = LastOf2654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2654<TuplifyUnion2654<Exclude<T, L>>, L>;

type DeepPartial2654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2654<T[P]> }
  : T;

type Paths2654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2654<K, Paths2654<T[K], Prev2654[D]>> : never }[keyof T]
  : never;

type Prev2654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2654 {
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

type ConfigPaths2654 = Paths2654<NestedConfig2654>;

interface HeavyProps2654 {
  config: DeepPartial2654<NestedConfig2654>;
  path?: ConfigPaths2654;
}

const HeavyComponent2654 = memo(function HeavyComponent2654({ config }: HeavyProps2654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2654.displayName = 'HeavyComponent2654';
export default HeavyComponent2654;
