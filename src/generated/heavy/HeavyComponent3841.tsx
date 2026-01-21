'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3841<T> = T extends (infer U)[]
  ? DeepReadonlyArray3841<U>
  : T extends object
  ? DeepReadonlyObject3841<T>
  : T;

interface DeepReadonlyArray3841<T> extends ReadonlyArray<DeepReadonly3841<T>> {}

type DeepReadonlyObject3841<T> = {
  readonly [P in keyof T]: DeepReadonly3841<T[P]>;
};

type UnionToIntersection3841<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3841<T> = UnionToIntersection3841<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3841<T extends unknown[], V> = [...T, V];

type TuplifyUnion3841<T, L = LastOf3841<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3841<TuplifyUnion3841<Exclude<T, L>>, L>;

type DeepPartial3841<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3841<T[P]> }
  : T;

type Paths3841<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3841<K, Paths3841<T[K], Prev3841[D]>> : never }[keyof T]
  : never;

type Prev3841 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3841<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3841 {
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

type ConfigPaths3841 = Paths3841<NestedConfig3841>;

interface HeavyProps3841 {
  config: DeepPartial3841<NestedConfig3841>;
  path?: ConfigPaths3841;
}

const HeavyComponent3841 = memo(function HeavyComponent3841({ config }: HeavyProps3841) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3841) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3841 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3841: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3841.displayName = 'HeavyComponent3841';
export default HeavyComponent3841;
