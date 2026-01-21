'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly878<T> = T extends (infer U)[]
  ? DeepReadonlyArray878<U>
  : T extends object
  ? DeepReadonlyObject878<T>
  : T;

interface DeepReadonlyArray878<T> extends ReadonlyArray<DeepReadonly878<T>> {}

type DeepReadonlyObject878<T> = {
  readonly [P in keyof T]: DeepReadonly878<T[P]>;
};

type UnionToIntersection878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf878<T> = UnionToIntersection878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push878<T extends unknown[], V> = [...T, V];

type TuplifyUnion878<T, L = LastOf878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push878<TuplifyUnion878<Exclude<T, L>>, L>;

type DeepPartial878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial878<T[P]> }
  : T;

type Paths878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join878<K, Paths878<T[K], Prev878[D]>> : never }[keyof T]
  : never;

type Prev878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig878 {
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

type ConfigPaths878 = Paths878<NestedConfig878>;

interface HeavyProps878 {
  config: DeepPartial878<NestedConfig878>;
  path?: ConfigPaths878;
}

const HeavyComponent878 = memo(function HeavyComponent878({ config }: HeavyProps878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent878.displayName = 'HeavyComponent878';
export default HeavyComponent878;
