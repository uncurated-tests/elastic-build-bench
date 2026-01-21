'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14130<T> = T extends (infer U)[]
  ? DeepReadonlyArray14130<U>
  : T extends object
  ? DeepReadonlyObject14130<T>
  : T;

interface DeepReadonlyArray14130<T> extends ReadonlyArray<DeepReadonly14130<T>> {}

type DeepReadonlyObject14130<T> = {
  readonly [P in keyof T]: DeepReadonly14130<T[P]>;
};

type UnionToIntersection14130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14130<T> = UnionToIntersection14130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14130<T extends unknown[], V> = [...T, V];

type TuplifyUnion14130<T, L = LastOf14130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14130<TuplifyUnion14130<Exclude<T, L>>, L>;

type DeepPartial14130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14130<T[P]> }
  : T;

type Paths14130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14130<K, Paths14130<T[K], Prev14130[D]>> : never }[keyof T]
  : never;

type Prev14130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14130 {
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

type ConfigPaths14130 = Paths14130<NestedConfig14130>;

interface HeavyProps14130 {
  config: DeepPartial14130<NestedConfig14130>;
  path?: ConfigPaths14130;
}

const HeavyComponent14130 = memo(function HeavyComponent14130({ config }: HeavyProps14130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14130.displayName = 'HeavyComponent14130';
export default HeavyComponent14130;
