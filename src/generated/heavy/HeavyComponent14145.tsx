'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14145<T> = T extends (infer U)[]
  ? DeepReadonlyArray14145<U>
  : T extends object
  ? DeepReadonlyObject14145<T>
  : T;

interface DeepReadonlyArray14145<T> extends ReadonlyArray<DeepReadonly14145<T>> {}

type DeepReadonlyObject14145<T> = {
  readonly [P in keyof T]: DeepReadonly14145<T[P]>;
};

type UnionToIntersection14145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14145<T> = UnionToIntersection14145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14145<T extends unknown[], V> = [...T, V];

type TuplifyUnion14145<T, L = LastOf14145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14145<TuplifyUnion14145<Exclude<T, L>>, L>;

type DeepPartial14145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14145<T[P]> }
  : T;

type Paths14145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14145<K, Paths14145<T[K], Prev14145[D]>> : never }[keyof T]
  : never;

type Prev14145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14145 {
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

type ConfigPaths14145 = Paths14145<NestedConfig14145>;

interface HeavyProps14145 {
  config: DeepPartial14145<NestedConfig14145>;
  path?: ConfigPaths14145;
}

const HeavyComponent14145 = memo(function HeavyComponent14145({ config }: HeavyProps14145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14145.displayName = 'HeavyComponent14145';
export default HeavyComponent14145;
