'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14613<T> = T extends (infer U)[]
  ? DeepReadonlyArray14613<U>
  : T extends object
  ? DeepReadonlyObject14613<T>
  : T;

interface DeepReadonlyArray14613<T> extends ReadonlyArray<DeepReadonly14613<T>> {}

type DeepReadonlyObject14613<T> = {
  readonly [P in keyof T]: DeepReadonly14613<T[P]>;
};

type UnionToIntersection14613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14613<T> = UnionToIntersection14613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14613<T extends unknown[], V> = [...T, V];

type TuplifyUnion14613<T, L = LastOf14613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14613<TuplifyUnion14613<Exclude<T, L>>, L>;

type DeepPartial14613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14613<T[P]> }
  : T;

type Paths14613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14613<K, Paths14613<T[K], Prev14613[D]>> : never }[keyof T]
  : never;

type Prev14613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14613 {
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

type ConfigPaths14613 = Paths14613<NestedConfig14613>;

interface HeavyProps14613 {
  config: DeepPartial14613<NestedConfig14613>;
  path?: ConfigPaths14613;
}

const HeavyComponent14613 = memo(function HeavyComponent14613({ config }: HeavyProps14613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14613.displayName = 'HeavyComponent14613';
export default HeavyComponent14613;
