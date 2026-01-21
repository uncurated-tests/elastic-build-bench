'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4139<T> = T extends (infer U)[]
  ? DeepReadonlyArray4139<U>
  : T extends object
  ? DeepReadonlyObject4139<T>
  : T;

interface DeepReadonlyArray4139<T> extends ReadonlyArray<DeepReadonly4139<T>> {}

type DeepReadonlyObject4139<T> = {
  readonly [P in keyof T]: DeepReadonly4139<T[P]>;
};

type UnionToIntersection4139<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4139<T> = UnionToIntersection4139<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4139<T extends unknown[], V> = [...T, V];

type TuplifyUnion4139<T, L = LastOf4139<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4139<TuplifyUnion4139<Exclude<T, L>>, L>;

type DeepPartial4139<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4139<T[P]> }
  : T;

type Paths4139<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4139<K, Paths4139<T[K], Prev4139[D]>> : never }[keyof T]
  : never;

type Prev4139 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4139<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4139 {
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

type ConfigPaths4139 = Paths4139<NestedConfig4139>;

interface HeavyProps4139 {
  config: DeepPartial4139<NestedConfig4139>;
  path?: ConfigPaths4139;
}

const HeavyComponent4139 = memo(function HeavyComponent4139({ config }: HeavyProps4139) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4139) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4139 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4139: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4139.displayName = 'HeavyComponent4139';
export default HeavyComponent4139;
