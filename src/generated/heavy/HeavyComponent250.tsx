'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly250<T> = T extends (infer U)[]
  ? DeepReadonlyArray250<U>
  : T extends object
  ? DeepReadonlyObject250<T>
  : T;

interface DeepReadonlyArray250<T> extends ReadonlyArray<DeepReadonly250<T>> {}

type DeepReadonlyObject250<T> = {
  readonly [P in keyof T]: DeepReadonly250<T[P]>;
};

type UnionToIntersection250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf250<T> = UnionToIntersection250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push250<T extends unknown[], V> = [...T, V];

type TuplifyUnion250<T, L = LastOf250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push250<TuplifyUnion250<Exclude<T, L>>, L>;

type DeepPartial250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial250<T[P]> }
  : T;

type Paths250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join250<K, Paths250<T[K], Prev250[D]>> : never }[keyof T]
  : never;

type Prev250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig250 {
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

type ConfigPaths250 = Paths250<NestedConfig250>;

interface HeavyProps250 {
  config: DeepPartial250<NestedConfig250>;
  path?: ConfigPaths250;
}

const HeavyComponent250 = memo(function HeavyComponent250({ config }: HeavyProps250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent250.displayName = 'HeavyComponent250';
export default HeavyComponent250;
