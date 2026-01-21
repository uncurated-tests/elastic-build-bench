'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5139<T> = T extends (infer U)[]
  ? DeepReadonlyArray5139<U>
  : T extends object
  ? DeepReadonlyObject5139<T>
  : T;

interface DeepReadonlyArray5139<T> extends ReadonlyArray<DeepReadonly5139<T>> {}

type DeepReadonlyObject5139<T> = {
  readonly [P in keyof T]: DeepReadonly5139<T[P]>;
};

type UnionToIntersection5139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5139<T> = UnionToIntersection5139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5139<T extends unknown[], V> = [...T, V];

type TuplifyUnion5139<T, L = LastOf5139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5139<TuplifyUnion5139<Exclude<T, L>>, L>;

type DeepPartial5139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5139<T[P]> }
  : T;

type Paths5139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5139<K, Paths5139<T[K], Prev5139[D]>> : never }[keyof T]
  : never;

type Prev5139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5139 {
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

type ConfigPaths5139 = Paths5139<NestedConfig5139>;

interface HeavyProps5139 {
  config: DeepPartial5139<NestedConfig5139>;
  path?: ConfigPaths5139;
}

const HeavyComponent5139 = memo(function HeavyComponent5139({ config }: HeavyProps5139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5139.displayName = 'HeavyComponent5139';
export default HeavyComponent5139;
