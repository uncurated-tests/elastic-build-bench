'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2795<T> = T extends (infer U)[]
  ? DeepReadonlyArray2795<U>
  : T extends object
  ? DeepReadonlyObject2795<T>
  : T;

interface DeepReadonlyArray2795<T> extends ReadonlyArray<DeepReadonly2795<T>> {}

type DeepReadonlyObject2795<T> = {
  readonly [P in keyof T]: DeepReadonly2795<T[P]>;
};

type UnionToIntersection2795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2795<T> = UnionToIntersection2795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2795<T extends unknown[], V> = [...T, V];

type TuplifyUnion2795<T, L = LastOf2795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2795<TuplifyUnion2795<Exclude<T, L>>, L>;

type DeepPartial2795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2795<T[P]> }
  : T;

type Paths2795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2795<K, Paths2795<T[K], Prev2795[D]>> : never }[keyof T]
  : never;

type Prev2795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2795 {
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

type ConfigPaths2795 = Paths2795<NestedConfig2795>;

interface HeavyProps2795 {
  config: DeepPartial2795<NestedConfig2795>;
  path?: ConfigPaths2795;
}

const HeavyComponent2795 = memo(function HeavyComponent2795({ config }: HeavyProps2795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2795.displayName = 'HeavyComponent2795';
export default HeavyComponent2795;
