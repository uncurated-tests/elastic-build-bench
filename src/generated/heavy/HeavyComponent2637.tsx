'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2637<T> = T extends (infer U)[]
  ? DeepReadonlyArray2637<U>
  : T extends object
  ? DeepReadonlyObject2637<T>
  : T;

interface DeepReadonlyArray2637<T> extends ReadonlyArray<DeepReadonly2637<T>> {}

type DeepReadonlyObject2637<T> = {
  readonly [P in keyof T]: DeepReadonly2637<T[P]>;
};

type UnionToIntersection2637<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2637<T> = UnionToIntersection2637<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2637<T extends unknown[], V> = [...T, V];

type TuplifyUnion2637<T, L = LastOf2637<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2637<TuplifyUnion2637<Exclude<T, L>>, L>;

type DeepPartial2637<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2637<T[P]> }
  : T;

type Paths2637<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2637<K, Paths2637<T[K], Prev2637[D]>> : never }[keyof T]
  : never;

type Prev2637 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2637<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2637 {
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

type ConfigPaths2637 = Paths2637<NestedConfig2637>;

interface HeavyProps2637 {
  config: DeepPartial2637<NestedConfig2637>;
  path?: ConfigPaths2637;
}

const HeavyComponent2637 = memo(function HeavyComponent2637({ config }: HeavyProps2637) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2637) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2637 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2637: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2637.displayName = 'HeavyComponent2637';
export default HeavyComponent2637;
