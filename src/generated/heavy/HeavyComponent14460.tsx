'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14460<T> = T extends (infer U)[]
  ? DeepReadonlyArray14460<U>
  : T extends object
  ? DeepReadonlyObject14460<T>
  : T;

interface DeepReadonlyArray14460<T> extends ReadonlyArray<DeepReadonly14460<T>> {}

type DeepReadonlyObject14460<T> = {
  readonly [P in keyof T]: DeepReadonly14460<T[P]>;
};

type UnionToIntersection14460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14460<T> = UnionToIntersection14460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14460<T extends unknown[], V> = [...T, V];

type TuplifyUnion14460<T, L = LastOf14460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14460<TuplifyUnion14460<Exclude<T, L>>, L>;

type DeepPartial14460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14460<T[P]> }
  : T;

type Paths14460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14460<K, Paths14460<T[K], Prev14460[D]>> : never }[keyof T]
  : never;

type Prev14460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14460 {
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

type ConfigPaths14460 = Paths14460<NestedConfig14460>;

interface HeavyProps14460 {
  config: DeepPartial14460<NestedConfig14460>;
  path?: ConfigPaths14460;
}

const HeavyComponent14460 = memo(function HeavyComponent14460({ config }: HeavyProps14460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14460.displayName = 'HeavyComponent14460';
export default HeavyComponent14460;
