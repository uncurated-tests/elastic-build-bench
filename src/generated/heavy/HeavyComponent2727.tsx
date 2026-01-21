'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2727<T> = T extends (infer U)[]
  ? DeepReadonlyArray2727<U>
  : T extends object
  ? DeepReadonlyObject2727<T>
  : T;

interface DeepReadonlyArray2727<T> extends ReadonlyArray<DeepReadonly2727<T>> {}

type DeepReadonlyObject2727<T> = {
  readonly [P in keyof T]: DeepReadonly2727<T[P]>;
};

type UnionToIntersection2727<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2727<T> = UnionToIntersection2727<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2727<T extends unknown[], V> = [...T, V];

type TuplifyUnion2727<T, L = LastOf2727<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2727<TuplifyUnion2727<Exclude<T, L>>, L>;

type DeepPartial2727<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2727<T[P]> }
  : T;

type Paths2727<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2727<K, Paths2727<T[K], Prev2727[D]>> : never }[keyof T]
  : never;

type Prev2727 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2727<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2727 {
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

type ConfigPaths2727 = Paths2727<NestedConfig2727>;

interface HeavyProps2727 {
  config: DeepPartial2727<NestedConfig2727>;
  path?: ConfigPaths2727;
}

const HeavyComponent2727 = memo(function HeavyComponent2727({ config }: HeavyProps2727) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2727) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2727 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2727: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2727.displayName = 'HeavyComponent2727';
export default HeavyComponent2727;
