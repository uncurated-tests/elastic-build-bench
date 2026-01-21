'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly139<T> = T extends (infer U)[]
  ? DeepReadonlyArray139<U>
  : T extends object
  ? DeepReadonlyObject139<T>
  : T;

interface DeepReadonlyArray139<T> extends ReadonlyArray<DeepReadonly139<T>> {}

type DeepReadonlyObject139<T> = {
  readonly [P in keyof T]: DeepReadonly139<T[P]>;
};

type UnionToIntersection139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf139<T> = UnionToIntersection139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push139<T extends unknown[], V> = [...T, V];

type TuplifyUnion139<T, L = LastOf139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push139<TuplifyUnion139<Exclude<T, L>>, L>;

type DeepPartial139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial139<T[P]> }
  : T;

type Paths139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join139<K, Paths139<T[K], Prev139[D]>> : never }[keyof T]
  : never;

type Prev139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig139 {
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

type ConfigPaths139 = Paths139<NestedConfig139>;

interface HeavyProps139 {
  config: DeepPartial139<NestedConfig139>;
  path?: ConfigPaths139;
}

const HeavyComponent139 = memo(function HeavyComponent139({ config }: HeavyProps139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent139.displayName = 'HeavyComponent139';
export default HeavyComponent139;
