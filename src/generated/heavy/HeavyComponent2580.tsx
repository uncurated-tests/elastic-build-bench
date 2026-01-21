'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2580<T> = T extends (infer U)[]
  ? DeepReadonlyArray2580<U>
  : T extends object
  ? DeepReadonlyObject2580<T>
  : T;

interface DeepReadonlyArray2580<T> extends ReadonlyArray<DeepReadonly2580<T>> {}

type DeepReadonlyObject2580<T> = {
  readonly [P in keyof T]: DeepReadonly2580<T[P]>;
};

type UnionToIntersection2580<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2580<T> = UnionToIntersection2580<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2580<T extends unknown[], V> = [...T, V];

type TuplifyUnion2580<T, L = LastOf2580<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2580<TuplifyUnion2580<Exclude<T, L>>, L>;

type DeepPartial2580<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2580<T[P]> }
  : T;

type Paths2580<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2580<K, Paths2580<T[K], Prev2580[D]>> : never }[keyof T]
  : never;

type Prev2580 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2580<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2580 {
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

type ConfigPaths2580 = Paths2580<NestedConfig2580>;

interface HeavyProps2580 {
  config: DeepPartial2580<NestedConfig2580>;
  path?: ConfigPaths2580;
}

const HeavyComponent2580 = memo(function HeavyComponent2580({ config }: HeavyProps2580) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2580) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2580 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2580: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2580.displayName = 'HeavyComponent2580';
export default HeavyComponent2580;
