'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2567<T> = T extends (infer U)[]
  ? DeepReadonlyArray2567<U>
  : T extends object
  ? DeepReadonlyObject2567<T>
  : T;

interface DeepReadonlyArray2567<T> extends ReadonlyArray<DeepReadonly2567<T>> {}

type DeepReadonlyObject2567<T> = {
  readonly [P in keyof T]: DeepReadonly2567<T[P]>;
};

type UnionToIntersection2567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2567<T> = UnionToIntersection2567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2567<T extends unknown[], V> = [...T, V];

type TuplifyUnion2567<T, L = LastOf2567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2567<TuplifyUnion2567<Exclude<T, L>>, L>;

type DeepPartial2567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2567<T[P]> }
  : T;

type Paths2567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2567<K, Paths2567<T[K], Prev2567[D]>> : never }[keyof T]
  : never;

type Prev2567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2567 {
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

type ConfigPaths2567 = Paths2567<NestedConfig2567>;

interface HeavyProps2567 {
  config: DeepPartial2567<NestedConfig2567>;
  path?: ConfigPaths2567;
}

const HeavyComponent2567 = memo(function HeavyComponent2567({ config }: HeavyProps2567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2567.displayName = 'HeavyComponent2567';
export default HeavyComponent2567;
