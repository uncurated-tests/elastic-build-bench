'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2387<T> = T extends (infer U)[]
  ? DeepReadonlyArray2387<U>
  : T extends object
  ? DeepReadonlyObject2387<T>
  : T;

interface DeepReadonlyArray2387<T> extends ReadonlyArray<DeepReadonly2387<T>> {}

type DeepReadonlyObject2387<T> = {
  readonly [P in keyof T]: DeepReadonly2387<T[P]>;
};

type UnionToIntersection2387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2387<T> = UnionToIntersection2387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2387<T extends unknown[], V> = [...T, V];

type TuplifyUnion2387<T, L = LastOf2387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2387<TuplifyUnion2387<Exclude<T, L>>, L>;

type DeepPartial2387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2387<T[P]> }
  : T;

type Paths2387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2387<K, Paths2387<T[K], Prev2387[D]>> : never }[keyof T]
  : never;

type Prev2387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2387 {
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

type ConfigPaths2387 = Paths2387<NestedConfig2387>;

interface HeavyProps2387 {
  config: DeepPartial2387<NestedConfig2387>;
  path?: ConfigPaths2387;
}

const HeavyComponent2387 = memo(function HeavyComponent2387({ config }: HeavyProps2387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2387.displayName = 'HeavyComponent2387';
export default HeavyComponent2387;
