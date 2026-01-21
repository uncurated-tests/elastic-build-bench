'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3814<T> = T extends (infer U)[]
  ? DeepReadonlyArray3814<U>
  : T extends object
  ? DeepReadonlyObject3814<T>
  : T;

interface DeepReadonlyArray3814<T> extends ReadonlyArray<DeepReadonly3814<T>> {}

type DeepReadonlyObject3814<T> = {
  readonly [P in keyof T]: DeepReadonly3814<T[P]>;
};

type UnionToIntersection3814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3814<T> = UnionToIntersection3814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3814<T extends unknown[], V> = [...T, V];

type TuplifyUnion3814<T, L = LastOf3814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3814<TuplifyUnion3814<Exclude<T, L>>, L>;

type DeepPartial3814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3814<T[P]> }
  : T;

type Paths3814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3814<K, Paths3814<T[K], Prev3814[D]>> : never }[keyof T]
  : never;

type Prev3814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3814 {
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

type ConfigPaths3814 = Paths3814<NestedConfig3814>;

interface HeavyProps3814 {
  config: DeepPartial3814<NestedConfig3814>;
  path?: ConfigPaths3814;
}

const HeavyComponent3814 = memo(function HeavyComponent3814({ config }: HeavyProps3814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3814.displayName = 'HeavyComponent3814';
export default HeavyComponent3814;
