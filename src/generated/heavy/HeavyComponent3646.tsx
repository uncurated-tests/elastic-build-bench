'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3646<T> = T extends (infer U)[]
  ? DeepReadonlyArray3646<U>
  : T extends object
  ? DeepReadonlyObject3646<T>
  : T;

interface DeepReadonlyArray3646<T> extends ReadonlyArray<DeepReadonly3646<T>> {}

type DeepReadonlyObject3646<T> = {
  readonly [P in keyof T]: DeepReadonly3646<T[P]>;
};

type UnionToIntersection3646<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3646<T> = UnionToIntersection3646<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3646<T extends unknown[], V> = [...T, V];

type TuplifyUnion3646<T, L = LastOf3646<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3646<TuplifyUnion3646<Exclude<T, L>>, L>;

type DeepPartial3646<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3646<T[P]> }
  : T;

type Paths3646<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3646<K, Paths3646<T[K], Prev3646[D]>> : never }[keyof T]
  : never;

type Prev3646 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3646<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3646 {
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

type ConfigPaths3646 = Paths3646<NestedConfig3646>;

interface HeavyProps3646 {
  config: DeepPartial3646<NestedConfig3646>;
  path?: ConfigPaths3646;
}

const HeavyComponent3646 = memo(function HeavyComponent3646({ config }: HeavyProps3646) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3646) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3646 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3646: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3646.displayName = 'HeavyComponent3646';
export default HeavyComponent3646;
