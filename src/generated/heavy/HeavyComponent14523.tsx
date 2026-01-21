'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14523<T> = T extends (infer U)[]
  ? DeepReadonlyArray14523<U>
  : T extends object
  ? DeepReadonlyObject14523<T>
  : T;

interface DeepReadonlyArray14523<T> extends ReadonlyArray<DeepReadonly14523<T>> {}

type DeepReadonlyObject14523<T> = {
  readonly [P in keyof T]: DeepReadonly14523<T[P]>;
};

type UnionToIntersection14523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14523<T> = UnionToIntersection14523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14523<T extends unknown[], V> = [...T, V];

type TuplifyUnion14523<T, L = LastOf14523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14523<TuplifyUnion14523<Exclude<T, L>>, L>;

type DeepPartial14523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14523<T[P]> }
  : T;

type Paths14523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14523<K, Paths14523<T[K], Prev14523[D]>> : never }[keyof T]
  : never;

type Prev14523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14523 {
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

type ConfigPaths14523 = Paths14523<NestedConfig14523>;

interface HeavyProps14523 {
  config: DeepPartial14523<NestedConfig14523>;
  path?: ConfigPaths14523;
}

const HeavyComponent14523 = memo(function HeavyComponent14523({ config }: HeavyProps14523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14523.displayName = 'HeavyComponent14523';
export default HeavyComponent14523;
