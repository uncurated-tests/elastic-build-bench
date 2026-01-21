'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly413<T> = T extends (infer U)[]
  ? DeepReadonlyArray413<U>
  : T extends object
  ? DeepReadonlyObject413<T>
  : T;

interface DeepReadonlyArray413<T> extends ReadonlyArray<DeepReadonly413<T>> {}

type DeepReadonlyObject413<T> = {
  readonly [P in keyof T]: DeepReadonly413<T[P]>;
};

type UnionToIntersection413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf413<T> = UnionToIntersection413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push413<T extends unknown[], V> = [...T, V];

type TuplifyUnion413<T, L = LastOf413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push413<TuplifyUnion413<Exclude<T, L>>, L>;

type DeepPartial413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial413<T[P]> }
  : T;

type Paths413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join413<K, Paths413<T[K], Prev413[D]>> : never }[keyof T]
  : never;

type Prev413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig413 {
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

type ConfigPaths413 = Paths413<NestedConfig413>;

interface HeavyProps413 {
  config: DeepPartial413<NestedConfig413>;
  path?: ConfigPaths413;
}

const HeavyComponent413 = memo(function HeavyComponent413({ config }: HeavyProps413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent413.displayName = 'HeavyComponent413';
export default HeavyComponent413;
