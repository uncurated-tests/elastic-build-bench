'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2627<T> = T extends (infer U)[]
  ? DeepReadonlyArray2627<U>
  : T extends object
  ? DeepReadonlyObject2627<T>
  : T;

interface DeepReadonlyArray2627<T> extends ReadonlyArray<DeepReadonly2627<T>> {}

type DeepReadonlyObject2627<T> = {
  readonly [P in keyof T]: DeepReadonly2627<T[P]>;
};

type UnionToIntersection2627<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2627<T> = UnionToIntersection2627<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2627<T extends unknown[], V> = [...T, V];

type TuplifyUnion2627<T, L = LastOf2627<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2627<TuplifyUnion2627<Exclude<T, L>>, L>;

type DeepPartial2627<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2627<T[P]> }
  : T;

type Paths2627<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2627<K, Paths2627<T[K], Prev2627[D]>> : never }[keyof T]
  : never;

type Prev2627 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2627<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2627 {
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

type ConfigPaths2627 = Paths2627<NestedConfig2627>;

interface HeavyProps2627 {
  config: DeepPartial2627<NestedConfig2627>;
  path?: ConfigPaths2627;
}

const HeavyComponent2627 = memo(function HeavyComponent2627({ config }: HeavyProps2627) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2627) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2627 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2627: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2627.displayName = 'HeavyComponent2627';
export default HeavyComponent2627;
