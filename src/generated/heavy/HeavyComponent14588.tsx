'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14588<T> = T extends (infer U)[]
  ? DeepReadonlyArray14588<U>
  : T extends object
  ? DeepReadonlyObject14588<T>
  : T;

interface DeepReadonlyArray14588<T> extends ReadonlyArray<DeepReadonly14588<T>> {}

type DeepReadonlyObject14588<T> = {
  readonly [P in keyof T]: DeepReadonly14588<T[P]>;
};

type UnionToIntersection14588<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14588<T> = UnionToIntersection14588<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14588<T extends unknown[], V> = [...T, V];

type TuplifyUnion14588<T, L = LastOf14588<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14588<TuplifyUnion14588<Exclude<T, L>>, L>;

type DeepPartial14588<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14588<T[P]> }
  : T;

type Paths14588<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14588<K, Paths14588<T[K], Prev14588[D]>> : never }[keyof T]
  : never;

type Prev14588 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14588<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14588 {
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

type ConfigPaths14588 = Paths14588<NestedConfig14588>;

interface HeavyProps14588 {
  config: DeepPartial14588<NestedConfig14588>;
  path?: ConfigPaths14588;
}

const HeavyComponent14588 = memo(function HeavyComponent14588({ config }: HeavyProps14588) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14588) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14588 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14588: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14588.displayName = 'HeavyComponent14588';
export default HeavyComponent14588;
