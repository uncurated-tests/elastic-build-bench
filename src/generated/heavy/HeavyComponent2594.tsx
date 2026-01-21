'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2594<T> = T extends (infer U)[]
  ? DeepReadonlyArray2594<U>
  : T extends object
  ? DeepReadonlyObject2594<T>
  : T;

interface DeepReadonlyArray2594<T> extends ReadonlyArray<DeepReadonly2594<T>> {}

type DeepReadonlyObject2594<T> = {
  readonly [P in keyof T]: DeepReadonly2594<T[P]>;
};

type UnionToIntersection2594<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2594<T> = UnionToIntersection2594<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2594<T extends unknown[], V> = [...T, V];

type TuplifyUnion2594<T, L = LastOf2594<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2594<TuplifyUnion2594<Exclude<T, L>>, L>;

type DeepPartial2594<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2594<T[P]> }
  : T;

type Paths2594<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2594<K, Paths2594<T[K], Prev2594[D]>> : never }[keyof T]
  : never;

type Prev2594 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2594<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2594 {
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

type ConfigPaths2594 = Paths2594<NestedConfig2594>;

interface HeavyProps2594 {
  config: DeepPartial2594<NestedConfig2594>;
  path?: ConfigPaths2594;
}

const HeavyComponent2594 = memo(function HeavyComponent2594({ config }: HeavyProps2594) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2594) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2594 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2594: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2594.displayName = 'HeavyComponent2594';
export default HeavyComponent2594;
