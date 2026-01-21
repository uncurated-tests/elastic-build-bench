'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly281<T> = T extends (infer U)[]
  ? DeepReadonlyArray281<U>
  : T extends object
  ? DeepReadonlyObject281<T>
  : T;

interface DeepReadonlyArray281<T> extends ReadonlyArray<DeepReadonly281<T>> {}

type DeepReadonlyObject281<T> = {
  readonly [P in keyof T]: DeepReadonly281<T[P]>;
};

type UnionToIntersection281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf281<T> = UnionToIntersection281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push281<T extends unknown[], V> = [...T, V];

type TuplifyUnion281<T, L = LastOf281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push281<TuplifyUnion281<Exclude<T, L>>, L>;

type DeepPartial281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial281<T[P]> }
  : T;

type Paths281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join281<K, Paths281<T[K], Prev281[D]>> : never }[keyof T]
  : never;

type Prev281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig281 {
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

type ConfigPaths281 = Paths281<NestedConfig281>;

interface HeavyProps281 {
  config: DeepPartial281<NestedConfig281>;
  path?: ConfigPaths281;
}

const HeavyComponent281 = memo(function HeavyComponent281({ config }: HeavyProps281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent281.displayName = 'HeavyComponent281';
export default HeavyComponent281;
