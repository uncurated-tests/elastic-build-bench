'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly651<T> = T extends (infer U)[]
  ? DeepReadonlyArray651<U>
  : T extends object
  ? DeepReadonlyObject651<T>
  : T;

interface DeepReadonlyArray651<T> extends ReadonlyArray<DeepReadonly651<T>> {}

type DeepReadonlyObject651<T> = {
  readonly [P in keyof T]: DeepReadonly651<T[P]>;
};

type UnionToIntersection651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf651<T> = UnionToIntersection651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push651<T extends unknown[], V> = [...T, V];

type TuplifyUnion651<T, L = LastOf651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push651<TuplifyUnion651<Exclude<T, L>>, L>;

type DeepPartial651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial651<T[P]> }
  : T;

type Paths651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join651<K, Paths651<T[K], Prev651[D]>> : never }[keyof T]
  : never;

type Prev651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig651 {
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

type ConfigPaths651 = Paths651<NestedConfig651>;

interface HeavyProps651 {
  config: DeepPartial651<NestedConfig651>;
  path?: ConfigPaths651;
}

const HeavyComponent651 = memo(function HeavyComponent651({ config }: HeavyProps651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent651.displayName = 'HeavyComponent651';
export default HeavyComponent651;
