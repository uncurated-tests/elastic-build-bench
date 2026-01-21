'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6139<T> = T extends (infer U)[]
  ? DeepReadonlyArray6139<U>
  : T extends object
  ? DeepReadonlyObject6139<T>
  : T;

interface DeepReadonlyArray6139<T> extends ReadonlyArray<DeepReadonly6139<T>> {}

type DeepReadonlyObject6139<T> = {
  readonly [P in keyof T]: DeepReadonly6139<T[P]>;
};

type UnionToIntersection6139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6139<T> = UnionToIntersection6139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6139<T extends unknown[], V> = [...T, V];

type TuplifyUnion6139<T, L = LastOf6139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6139<TuplifyUnion6139<Exclude<T, L>>, L>;

type DeepPartial6139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6139<T[P]> }
  : T;

type Paths6139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6139<K, Paths6139<T[K], Prev6139[D]>> : never }[keyof T]
  : never;

type Prev6139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6139 {
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

type ConfigPaths6139 = Paths6139<NestedConfig6139>;

interface HeavyProps6139 {
  config: DeepPartial6139<NestedConfig6139>;
  path?: ConfigPaths6139;
}

const HeavyComponent6139 = memo(function HeavyComponent6139({ config }: HeavyProps6139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6139.displayName = 'HeavyComponent6139';
export default HeavyComponent6139;
