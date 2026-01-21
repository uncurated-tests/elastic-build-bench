'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14841<T> = T extends (infer U)[]
  ? DeepReadonlyArray14841<U>
  : T extends object
  ? DeepReadonlyObject14841<T>
  : T;

interface DeepReadonlyArray14841<T> extends ReadonlyArray<DeepReadonly14841<T>> {}

type DeepReadonlyObject14841<T> = {
  readonly [P in keyof T]: DeepReadonly14841<T[P]>;
};

type UnionToIntersection14841<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14841<T> = UnionToIntersection14841<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14841<T extends unknown[], V> = [...T, V];

type TuplifyUnion14841<T, L = LastOf14841<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14841<TuplifyUnion14841<Exclude<T, L>>, L>;

type DeepPartial14841<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14841<T[P]> }
  : T;

type Paths14841<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14841<K, Paths14841<T[K], Prev14841[D]>> : never }[keyof T]
  : never;

type Prev14841 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14841<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14841 {
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

type ConfigPaths14841 = Paths14841<NestedConfig14841>;

interface HeavyProps14841 {
  config: DeepPartial14841<NestedConfig14841>;
  path?: ConfigPaths14841;
}

const HeavyComponent14841 = memo(function HeavyComponent14841({ config }: HeavyProps14841) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14841) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14841 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14841: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14841.displayName = 'HeavyComponent14841';
export default HeavyComponent14841;
