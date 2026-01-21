'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3139<T> = T extends (infer U)[]
  ? DeepReadonlyArray3139<U>
  : T extends object
  ? DeepReadonlyObject3139<T>
  : T;

interface DeepReadonlyArray3139<T> extends ReadonlyArray<DeepReadonly3139<T>> {}

type DeepReadonlyObject3139<T> = {
  readonly [P in keyof T]: DeepReadonly3139<T[P]>;
};

type UnionToIntersection3139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3139<T> = UnionToIntersection3139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3139<T extends unknown[], V> = [...T, V];

type TuplifyUnion3139<T, L = LastOf3139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3139<TuplifyUnion3139<Exclude<T, L>>, L>;

type DeepPartial3139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3139<T[P]> }
  : T;

type Paths3139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3139<K, Paths3139<T[K], Prev3139[D]>> : never }[keyof T]
  : never;

type Prev3139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3139 {
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

type ConfigPaths3139 = Paths3139<NestedConfig3139>;

interface HeavyProps3139 {
  config: DeepPartial3139<NestedConfig3139>;
  path?: ConfigPaths3139;
}

const HeavyComponent3139 = memo(function HeavyComponent3139({ config }: HeavyProps3139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3139.displayName = 'HeavyComponent3139';
export default HeavyComponent3139;
