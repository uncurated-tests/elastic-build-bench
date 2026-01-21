'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14617<T> = T extends (infer U)[]
  ? DeepReadonlyArray14617<U>
  : T extends object
  ? DeepReadonlyObject14617<T>
  : T;

interface DeepReadonlyArray14617<T> extends ReadonlyArray<DeepReadonly14617<T>> {}

type DeepReadonlyObject14617<T> = {
  readonly [P in keyof T]: DeepReadonly14617<T[P]>;
};

type UnionToIntersection14617<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14617<T> = UnionToIntersection14617<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14617<T extends unknown[], V> = [...T, V];

type TuplifyUnion14617<T, L = LastOf14617<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14617<TuplifyUnion14617<Exclude<T, L>>, L>;

type DeepPartial14617<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14617<T[P]> }
  : T;

type Paths14617<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14617<K, Paths14617<T[K], Prev14617[D]>> : never }[keyof T]
  : never;

type Prev14617 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14617<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14617 {
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

type ConfigPaths14617 = Paths14617<NestedConfig14617>;

interface HeavyProps14617 {
  config: DeepPartial14617<NestedConfig14617>;
  path?: ConfigPaths14617;
}

const HeavyComponent14617 = memo(function HeavyComponent14617({ config }: HeavyProps14617) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14617) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14617 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14617: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14617.displayName = 'HeavyComponent14617';
export default HeavyComponent14617;
