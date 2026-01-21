'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2814<T> = T extends (infer U)[]
  ? DeepReadonlyArray2814<U>
  : T extends object
  ? DeepReadonlyObject2814<T>
  : T;

interface DeepReadonlyArray2814<T> extends ReadonlyArray<DeepReadonly2814<T>> {}

type DeepReadonlyObject2814<T> = {
  readonly [P in keyof T]: DeepReadonly2814<T[P]>;
};

type UnionToIntersection2814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2814<T> = UnionToIntersection2814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2814<T extends unknown[], V> = [...T, V];

type TuplifyUnion2814<T, L = LastOf2814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2814<TuplifyUnion2814<Exclude<T, L>>, L>;

type DeepPartial2814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2814<T[P]> }
  : T;

type Paths2814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2814<K, Paths2814<T[K], Prev2814[D]>> : never }[keyof T]
  : never;

type Prev2814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2814 {
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

type ConfigPaths2814 = Paths2814<NestedConfig2814>;

interface HeavyProps2814 {
  config: DeepPartial2814<NestedConfig2814>;
  path?: ConfigPaths2814;
}

const HeavyComponent2814 = memo(function HeavyComponent2814({ config }: HeavyProps2814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2814.displayName = 'HeavyComponent2814';
export default HeavyComponent2814;
