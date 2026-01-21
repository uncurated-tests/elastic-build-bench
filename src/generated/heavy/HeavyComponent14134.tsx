'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14134<T> = T extends (infer U)[]
  ? DeepReadonlyArray14134<U>
  : T extends object
  ? DeepReadonlyObject14134<T>
  : T;

interface DeepReadonlyArray14134<T> extends ReadonlyArray<DeepReadonly14134<T>> {}

type DeepReadonlyObject14134<T> = {
  readonly [P in keyof T]: DeepReadonly14134<T[P]>;
};

type UnionToIntersection14134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14134<T> = UnionToIntersection14134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14134<T extends unknown[], V> = [...T, V];

type TuplifyUnion14134<T, L = LastOf14134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14134<TuplifyUnion14134<Exclude<T, L>>, L>;

type DeepPartial14134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14134<T[P]> }
  : T;

type Paths14134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14134<K, Paths14134<T[K], Prev14134[D]>> : never }[keyof T]
  : never;

type Prev14134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14134 {
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

type ConfigPaths14134 = Paths14134<NestedConfig14134>;

interface HeavyProps14134 {
  config: DeepPartial14134<NestedConfig14134>;
  path?: ConfigPaths14134;
}

const HeavyComponent14134 = memo(function HeavyComponent14134({ config }: HeavyProps14134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14134.displayName = 'HeavyComponent14134';
export default HeavyComponent14134;
