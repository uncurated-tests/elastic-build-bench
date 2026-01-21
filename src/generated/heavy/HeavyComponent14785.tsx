'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14785<T> = T extends (infer U)[]
  ? DeepReadonlyArray14785<U>
  : T extends object
  ? DeepReadonlyObject14785<T>
  : T;

interface DeepReadonlyArray14785<T> extends ReadonlyArray<DeepReadonly14785<T>> {}

type DeepReadonlyObject14785<T> = {
  readonly [P in keyof T]: DeepReadonly14785<T[P]>;
};

type UnionToIntersection14785<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14785<T> = UnionToIntersection14785<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14785<T extends unknown[], V> = [...T, V];

type TuplifyUnion14785<T, L = LastOf14785<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14785<TuplifyUnion14785<Exclude<T, L>>, L>;

type DeepPartial14785<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14785<T[P]> }
  : T;

type Paths14785<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14785<K, Paths14785<T[K], Prev14785[D]>> : never }[keyof T]
  : never;

type Prev14785 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14785<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14785 {
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

type ConfigPaths14785 = Paths14785<NestedConfig14785>;

interface HeavyProps14785 {
  config: DeepPartial14785<NestedConfig14785>;
  path?: ConfigPaths14785;
}

const HeavyComponent14785 = memo(function HeavyComponent14785({ config }: HeavyProps14785) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14785) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14785 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14785: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14785.displayName = 'HeavyComponent14785';
export default HeavyComponent14785;
