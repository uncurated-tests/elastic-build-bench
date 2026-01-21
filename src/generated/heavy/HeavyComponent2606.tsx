'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2606<T> = T extends (infer U)[]
  ? DeepReadonlyArray2606<U>
  : T extends object
  ? DeepReadonlyObject2606<T>
  : T;

interface DeepReadonlyArray2606<T> extends ReadonlyArray<DeepReadonly2606<T>> {}

type DeepReadonlyObject2606<T> = {
  readonly [P in keyof T]: DeepReadonly2606<T[P]>;
};

type UnionToIntersection2606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2606<T> = UnionToIntersection2606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2606<T extends unknown[], V> = [...T, V];

type TuplifyUnion2606<T, L = LastOf2606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2606<TuplifyUnion2606<Exclude<T, L>>, L>;

type DeepPartial2606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2606<T[P]> }
  : T;

type Paths2606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2606<K, Paths2606<T[K], Prev2606[D]>> : never }[keyof T]
  : never;

type Prev2606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2606 {
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

type ConfigPaths2606 = Paths2606<NestedConfig2606>;

interface HeavyProps2606 {
  config: DeepPartial2606<NestedConfig2606>;
  path?: ConfigPaths2606;
}

const HeavyComponent2606 = memo(function HeavyComponent2606({ config }: HeavyProps2606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2606.displayName = 'HeavyComponent2606';
export default HeavyComponent2606;
